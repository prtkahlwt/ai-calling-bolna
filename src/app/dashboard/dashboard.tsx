"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardSection: React.FC = () => {
  // Dummy Data for Calls
  const callsData = [
    { label: "Total Calls Made", value: 25 },
    { label: "Total Calls Answered", value: 20 },
    { label: "Total Calls Rejected", value: 5 },
  ];

  // Pie Chart Data for Positive and Negative responses
  const pieData = {
    labels: ["Positive", "Negative"],
    datasets: [
      {
        data: [70, 30], // Dummy data: 70% Positive, 30% Negative
        backgroundColor: ["#4CAF50", "#F44336"], // Green for Positive, Red for Negative
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="space-y-8 p-6">
      {/* Dashboard Title */}
      <h2 className="text-3xl font-semibold mb-8">Dashboard</h2>

      {/* First Section */}
      <div className="flex gap-6 flex-wrap">
        {/* Statistics Boxes */}
        <div className="flex flex-col gap-4 md:flex-1">
          {callsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 border max-w-[250px] w-full mb-4"
            >
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:flex-1">
          {callsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 border max-w-[250px] w-full mb-4"
            >
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Pie Chart Container */}
        <div className="flex-1 max-w-[250px] w-full mb-4">
          {/* Title for Pie Chart */}
          <h3 className="text-xl font-semibold mb-4 text-center">Response Chart</h3>

          {/* Pie Chart with Border */}
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
        </div>
      </div>

      {/* Second Section */}
{/* 
      <div className="flex gap-6 flex-wrap">
        <div className="flex flex-col gap-4 md:flex-1">
          {callsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 border max-w-[250px] w-full mb-4"
            >
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex-1 max-w-[250px] w-full mb-4">
          <h3 className="text-xl font-semibold mb-4 text-center">Response Chart</h3>
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <Pie data={pieData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
       */}
    </div>
  );
};

export default DashboardSection;
