"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    },
    legend: {
      position: "bottom",
      align: "center",
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "$",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      backgroundColor: "#2244F6",
      barThickness: 30,
      maxBarThickness: 30,
    },
    {
      label: "$",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      backgroundColor: "rgba(34, 68, 246, 0.1)",
      borderRadius: 5,
      barThickness: 30,
      maxBarThickness: 30,
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
