"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
type ResponseType = "All" | "Positive" | "Negative";

interface DataRow {
  id: number;
  name: string;
  mobile: string;
  time: number; // seconds
  response: "Positive" | "Negative";
  audioUrl: string; // audio file url
  summary: string;
  cost:number;
}

const data: DataRow[] = [
  {
    id: 1,
    name: "Alice",
    mobile: "1234567890",
    time: 30,
    response: "Positive",
    audioUrl:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    summary: "Call went well, customer was satisfied.",
    cost: 20,
  },
  {
    id: 2,
    name: "Bob",
    mobile: "2345678901",
    time: 120,
    response: "Negative",
    audioUrl:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    summary: "Customer had multiple complaints.",
    cost: 22,
  },
  {
    id: 3,
    name: "Charlie",
    mobile: "3456789012",
    time: 45,
    response: "Positive",
    audioUrl:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    summary: "Customer was happy with the product info.",
    cost: 21,
  },
  {
    id: 4,
    name: "David",
    mobile: "4567890123",
    time: 90,
    response: "Negative",
    audioUrl:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    summary: "Call dropped, needs follow up.",
    cost: 30,
  },
  {
    id: 5,
    name: "Eve",
    mobile: "5678901234",
    time: 60,
    response: "Positive",
    audioUrl:
      "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    summary: "Positive feedback on support.",
    cost: 45,
  },
];

export default function Calling() {
  const [responseFilter, setResponseFilter] = useState<ResponseType>("All");
  const [minTime, setMinTime] = useState<string>("");
  const [maxTime, setMaxTime] = useState<string>("");
  const [minCost, setMinCost] = useState<string>("");
  const [maxCost, setMaxCost] = useState<string>("");
  const [nameFilter, setNameFilter] = useState<string>("");
  const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);
  // Filter data based on current filters
  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesResponse =
        responseFilter === "All" || row.response === responseFilter;
      const matchesMinTime = minTime ? row.time >= Number(minTime) : true;
      const matchesMaxTime = maxTime ? row.time <= Number(maxTime) : true;
      const matchesMinCost = minCost ? row.cost >= Number(minCost) : true;
      const matchesMaxCost = maxCost ? row.cost <= Number(maxCost) : true;
      const matchesName =
        nameFilter === "" || row.name.toLowerCase().includes(nameFilter.toLowerCase());
      return matchesResponse && matchesMinTime && matchesMaxTime && matchesName && matchesMaxCost && matchesMinCost;
    });
  }, [responseFilter, minTime, maxTime, nameFilter, minCost, maxCost]);

  return (
    <>
      <main className="flex-1 bg-gray-50 p-8 overflow-auto">
      <h1 className="mb-6 text-3xl font-semibold">Home Dashboard</h1>

      {/* Filters */}
      <section className="mb-6 flex flex-wrap gap-4 items-end">
        <div>
          <Label htmlFor="nameFilter">Filter by Name</Label>
          <Input
            id="nameFilter"
            type="text"
            placeholder="Search by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="w-40"
          />
        </div>

        <div>
          <Label htmlFor="response">Response</Label>
          <Select
            value={responseFilter}
            onValueChange={(val) => setResponseFilter(val as ResponseType)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select response" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Positive">Positive</SelectItem>
              <SelectItem value="Negative">Negative</SelectItem>
            </SelectContent>
          </Select>
        </div>

<div>
          <Label htmlFor="minCost">Min Cost</Label>
          <Input
            id="minCost"
            type="number"
            placeholder="Min"
            min={0}
            value={minCost}
            onChange={(e) => setMinCost(e.target.value)}
            className="w-24"
          />
        </div>

        <div>
          <Label htmlFor="maxCost">Max Cost</Label>
          <Input
            id="maxCost"
            type="number"
            placeholder="Max"
            min={0}
            value={maxCost}
            onChange={(e) => setMaxCost(e.target.value)}
            className="w-24"
          />
        </div>

        <div>
          <Label htmlFor="minTime">Min Time (sec)</Label>
          <Input
            id="minTime"
            type="number"
            placeholder="Min"
            min={0}
            value={minTime}
            onChange={(e) => setMinTime(e.target.value)}
            className="w-24"
          />
        </div>

        <div>
          <Label htmlFor="maxTime">Max Time (sec)</Label>
          <Input
            id="maxTime"
            type="number"
            placeholder="Max"
            min={0}
            value={maxTime}
            onChange={(e) => setMaxTime(e.target.value)}
            className="w-24"
          />
        </div>

        <Button
          onClick={() => {
            setResponseFilter("All");
            setMinTime("");
            setMaxTime("");
            setMinCost("");
            setMaxCost("");
            setNameFilter(""); // Clear Name filter
          }}
        >
          Clear Filters
        </Button>
      </section>

      {/* Table */}
      <section className="overflow-x-auto rounded border bg-white shadow">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b px-4 py-2">Sr No</th>
              <th className="border-b px-4 py-2">Name</th>
              <th className="border-b px-4 py-2">Mobile Number</th>
              <th className="border-b px-4 py-2">Time (sec)</th>
              <th className="border-b px-4 py-2">Cost</th>
              <th className="border-b px-4 py-2">Response</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            ) : (
              filteredData.map((row, idx) => (
                <tr key={row.id} className={`cursor-pointer ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-indigo-100`} onClick={()=>setSelectedRow(row)}>
                  <td className="border-b px-4 py-2">{idx + 1}</td>
                  <td className="border-b px-4 py-2">{row.name}</td>
                  <td className="border-b px-4 py-2">{row.mobile}</td>
                  <td className="border-b px-4 py-2">{row.time}</td>
                  <td className="border-b px-4 py-2">Rs {row.cost}</td>
                  <td className={`border-b px-4 py-2 font-semibold ${row.response === "Positive" ? "text-green-600" : "text-red-600"}`}>
                    {row.response}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </section>
    </main>

    <Dialog
        open={!!selectedRow}
        onOpenChange={(open) => !open && setSelectedRow(null)}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Call Details</DialogTitle>
            <DialogClose className="absolute right-4 top-4" />
          </DialogHeader>
          {selectedRow && (
            <div className="space-y-4">
              <p>
                <strong>Name:</strong> {selectedRow.name}
              </p>
              <p>
                <strong>Mobile Number:</strong> {selectedRow.mobile}
              </p>
              <p>
                <strong>Time (seconds):</strong> {selectedRow.time}
              </p>
              <p>
                <strong>Response:</strong>{" "}
                <span
                  className={
                    selectedRow.response === "Positive"
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {selectedRow.response}
                </span>
              </p>
              <div>
                <strong>Call Recording:</strong>
                <audio
                  controls
                  src={selectedRow.audioUrl}
                  className="mt-2 w-full rounded border"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
              <div>
                <strong>Summary:</strong>
                <p className="mt-1 rounded border p-3 bg-gray-50">
                  {selectedRow.summary}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.25s ease forwards;
        }
      `}</style>
    </>
  
  );
}
