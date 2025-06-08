"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access the Redux store
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

// Define AuthState type for Redux state
interface AuthState {
  username: string | null;
  password: string | null;
  agent_id: string | null;
  numbers: string[] | null;
}

export default function Settings() {
  // Get logged-in user details from Redux store
  const user = useSelector((state: { auth: AuthState }) => state.auth);

  // State variables for form fields
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState(user.password || "");  // Default to user password from store
  const [companyName, setCompanyName] = useState(user.username || "");  // Default to user username
  const [allocatedNumbers, setAllocatedNumbers] = useState(user.numbers || []);  // Default to user allocated numbers
  const [firstName, setFirstName] = useState(user.username?.split(" ")[0] || "");  // Extract first name from username
  const [lastName, setLastName] = useState(user.username?.split(" ")[1] || "");  // Extract last name from username
  const [email, setEmail] = useState(user.username + "@example.com" || "");  // Use email based on user
  const [agentId] = useState(user.agent_id || "");  // Default to user agent_id (non-editable)

  useEffect(() => {
    // If user data changes, update the state
    setPassword(user.password || "");
    setCompanyName(user.username || "");
    setAllocatedNumbers(user.numbers || []);
    setFirstName(user.username?.split(" ")[0] || "");
    setLastName(user.username?.split(" ")[1] || "");
    setEmail(user.username + "@example.com" || "");
  }, [user]);  // Re-run whenever `user` changes

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

        {/* Agent ID - Non-editable */}
        <div className="max-w-lg">
          <Label htmlFor="agentId">Agent ID</Label>
          <Input
            id="agentId"
            value={agentId}
            disabled  // Make it non-editable
            placeholder="Agent ID (Non-editable)"
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
            {allocatedNumbers.map((number: string, idx: number) => (
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
