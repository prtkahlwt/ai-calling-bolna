"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setUserDetails } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

type FormValues = {
  email: string;
  password: string;
};

interface DecodedToken {
  username: string;
  password: string;
  agent_id: string;
  numbers: string[];
}

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      // Send the POST request to the backend for login
      const response = await axios.post(`${BACKEND_URL}/login`, {
        email: data.email, // Assuming email is the username
        password: data.password,
      });

      const token = response.data.token; // Get the JWT token from the response

      // Store token in cookie with an expiration time of 7 days
      Cookies.set('token', token, { expires: 7 }); // Token expires in 7 days

      // Decode the JWT token
      const decodedToken: DecodedToken = jwtDecode(token);

      // Store user details in cookies (expires in 7 days)
      Cookies.set('user', JSON.stringify({
        username: decodedToken.username,
        agent_id: decodedToken.agent_id,
        numbers: decodedToken.numbers,
      }), { expires: 7 });

      // Dispatch the decoded data to Redux store
      dispatch(
        setUserDetails({
          username: decodedToken.username,
          password: decodedToken.password,
          agent_id: decodedToken.agent_id,
          numbers: decodedToken.numbers,
        })
      );

      // Redirect the user after successful login
      router.push("/dashboard");

    } catch (error) {
      alert("Login failed! Please check your credentials and try again.");
    }
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-md border p-8 shadow">
        <h1 className="mb-6 text-center text-2xl font-semibold">Login</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is invalid",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
