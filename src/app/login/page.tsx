"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";

import { jwtDecode } from "jwt-decode";
import { setUserDetails } from "@/store/authSlice";
import { useRouter } from "next/navigation"; // Updated import
import axios from "axios";

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
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      // Send the POST request to the backend for login
      const response = await axios.post("http://localhost:5000/login", {
        username: data.email, // Assuming email is the username
        password: data.password,
      });

      const token = response.data.token; // Get the JWT token from the response

      // Decode the JWT token
      const decodedToken: DecodedToken = jwtDecode(token);

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
      router.push("/dashboard"); // Using the new router

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please check your credentials and try again.");
    }
  };

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
