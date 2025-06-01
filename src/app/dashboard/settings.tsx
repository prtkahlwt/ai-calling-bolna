"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function Settings() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("password123");
    const [companyName, setCompanyName] = useState("Example Corp.");
    //   const [allocatedNumbers, setAllocatedNumbers] = useState([
    //     "1234567890",
    //     "2345678901",
    //     "3456789012",
    //   ]);
    const allocatedNumbers = [
        "1234567890",
        "2345678901",
        "3456789012",
    ];
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("johndoe@example.com");

    return (
        <div className="w-full h-full max-h-full overflow-y-auto p-6 md:p-8">
            <h2 className="text-3xl font-semibold mb-8">Settings</h2>

            {/* Form */}
            <div className="space-y-8 max-w-none">
                {/* First & Last Name */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 max-w-lg min-w-[280px]">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            className="w-full"
                        />
                    </div>

                    <div className="flex-1 max-w-lg min-w-[280px]">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="max-w-lg">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full"
                    />
                </div>

                {/* Password */}
                <div className="relative max-w-lg">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type={passwordVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pr-10"
                    />
                    <Button
                        type="button"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="absolute right-2 top-8 p-1"
                        variant="ghost"
                    >
                        {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </Button>
                </div>

                {/* Company Name */}
                <div className="max-w-lg">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enter your company name"
                        className="w-full"
                    />
                </div>
            </div>

            {/* Allocated Numbers */}
            <div className="mt-12 max-w-3xl">
                <h3 className="text-2xl font-semibold mb-4">Allocated Numbers</h3>
                <p className="mb-4">Total Numbers: {allocatedNumbers.length}</p>

                <table className="w-full border-collapse border border-gray-200 rounded-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left">Sr No</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Allocated Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allocatedNumbers.map((number, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Save Button */}
            <div className="mt-8 max-w-lg">
                <Button className="w-full">Save Changes</Button>
            </div>
        </div>
    );
}
