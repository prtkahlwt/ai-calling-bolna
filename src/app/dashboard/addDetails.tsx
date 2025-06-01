"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";

import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ExcelCell = string | number;

interface ExcelFileData {
    id: number;
    name: string;
    data: ExcelCell[][];
}

export default function ExcelUploader() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [currentData, setCurrentData] = useState<ExcelFileData | null>(null);
    const [history, setHistory] = useState<ExcelFileData[]>([]);
    const [tabValue, setTabValue] = useState<"current" | "history">("current");
    const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(
        null
    );

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    const handleAddFile = () => {
        if (!selectedFile) {
            alert("Please select an Excel file first");
            return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target?.result;
            if (typeof bstr !== "string" && !(bstr instanceof ArrayBuffer)) return;

            const wb = XLSX.read(bstr, { type: "binary" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as ExcelCell[][];

            const newFileData: ExcelFileData = {
                id: Date.now(),
                name: selectedFile.name,
                data,
            };

            setCurrentData(newFileData);
            setHistory((prev) => [newFileData, ...prev]);
            setSelectedFile(null);
            setTabValue("current");
            setSelectedHistoryId(null);
            // Reset the file input manually if needed, but since uncontrolled no value to clear
        };

        reader.readAsBinaryString(selectedFile);
    };

    const renderTable = (data: ExcelCell[][]) => {
        if (!data || data.length === 0) return <p>No data available</p>;

        return (
            <div className="overflow-auto border rounded-md">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            {data[0].map((header: string | number, idx: number) => (
                                <th
                                    key={idx}
                                    className="border px-3 py-1 text-left font-medium"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1).map((row, ridx) => (
                            <tr
                                key={ridx}
                                className={ridx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                            >
                                {row.map((cell: string | number, cidx: number) => (
                                    <td key={cidx} className="border px-3 py-1">
                                        {cell !== undefined ? cell.toString() : ""}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* File Upload Section */}
            <div className="flex gap-4 items-center">
                {/* NOTE: No value prop here */}
                <Input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                    className="flex-1"
                />
                <Button onClick={handleAddFile} disabled={!selectedFile}>
                    Add It
                </Button>
            </div>

            {/* Tabs Section */}
            <Tabs value={tabValue} onValueChange={(value: string) => setTabValue(value as "current" | "history")} className="space-y-4">
                <TabsList>
                    <TabsTrigger value="current">Current</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>

                <TabsContent value="current">
                    {currentData ? (
                        <>
                            <h3 className="text-lg font-semibold mb-2">
                                Showing: {currentData.name}
                            </h3>
                            {renderTable(currentData.data)}
                        </>
                    ) : (
                        <p>No current file uploaded</p>
                    )}
                </TabsContent>

                <TabsContent value="history" className="space-y-4">
                    {history.length === 0 && <p>No history available</p>}

                    {history.length > 0 && (
                        <div className="flex gap-4">
                            {/* List of history files */}
                            <div className="min-w-[180px] max-w-[220px] border rounded-md overflow-auto max-h-[300px] p-2">
                                {history.map((file) => (
                                    <button
                                        key={file.id}
                                        className={`block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 ${selectedHistoryId === file.id
                                                ? "bg-indigo-100 font-semibold"
                                                : ""
                                            }`}
                                        onClick={() => setSelectedHistoryId(file.id)}
                                    >
                                        {file.name}
                                    </button>
                                ))}
                            </div>

                            {/* Display selected file data */}
                            <div className="flex-1">
                                {selectedHistoryId ? (
                                    renderTable(
                                        history.find((f) => f.id === selectedHistoryId)?.data || []
                                    )
                                ) : (
                                    <p>Select a file from history to see data</p>
                                )}
                            </div>
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    );
}
