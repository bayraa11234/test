import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(2, 255, 132, 0.2)",
      borderColor: "rgba(2, 255, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "# of Votes",
      data: [3, 2, 3, 15, 6, 9],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "# of Votes",
      data: [2, 1, 9, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 255, 0.2)",
      borderColor: "rgba(255, 99, 255, 1)",
      borderWidth: 1,
    },
    {
      label: "# of Votes",
      data: [9, 10, 13, 1, 20, 18],
      backgroundColor: "rgba(0, 99, 132, 0.2)",
      borderColor: "rgba(0, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export function DashboardChart() {
  return <Radar data={data} />;
}
