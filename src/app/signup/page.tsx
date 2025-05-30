"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type FormValues = {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    password: string;
    confirmPassword: string;
    companyName: string;
    referenceCode?: string;
};

const countryCodes = [
    { label: "🇺🇸 +1", value: "+1" },
    //   { label: "🇬🇧 +44", value: "+44" },
    { label: "🇮🇳 +91", value: "+91" },
    //   { label: "🇨🇦 +1 (CA)", value: "+1 (CA)" }, // visually unique label
    //   { label: "🇦🇺 +61", value: "+61" },
];

export default function SignupPage() {
    const form = useForm<FormValues>({
        defaultValues: {
            name: "",
            email: "",
            countryCode: "+1",
            phone: "",
            password: "",
            confirmPassword: "",
            companyName: "",
            referenceCode: "",
        },
    });

    function onSubmit(data: FormValues) {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert(JSON.stringify(data, null, 2));
        // TODO: Call signup API here
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-md border p-8 shadow">
                <h1 className="mb-6 text-center text-2xl font-semibold">Sign Up</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            rules={{ required: "Name is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your full name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email */}
                        <FormField
                            control={form.control}
                            name="email"
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email address",
                                },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone number + country code combined */}
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <div className="flex space-x-2">
                                {/* Country Code Select */}
                                <FormField
                                    control={form.control}
                                    name="countryCode"
                                    render={({ field }) => (
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-24">
                                                    <SelectValue placeholder="+Code" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {countryCodes.map((code, idx) => (
                                                        <SelectItem key={`${code.value}-${idx}`} value={code.value}>
                                                            {code.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    )}
                                />

                                {/* Phone Input */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    rules={{
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "Phone number must be digits only",
                                        },
                                    }}
                                    render={({ field }) => (
                                        <FormControl className="flex-1">
                                            <Input placeholder="1234567890" {...field} />
                                        </FormControl>
                                    )}
                                />
                            </div>
                            <FormMessage />
                        </FormItem>


                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            rules={{
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Confirm Password */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            rules={{
                                required: "Please confirm your password",
                                validate: (value) => value === form.watch("password") || "Passwords do not match",
                            }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Re-enter Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Company Name */}
                        <FormField
                            control={form.control}
                            name="companyName"
                            rules={{ required: "Company Name is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your company" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Reference Code (optional) */}
                        <FormField
                            control={form.control}
                            name="referenceCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Reference Code (optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Reference code" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
