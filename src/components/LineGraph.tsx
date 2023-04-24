import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

const fetchHistoricalData = async () => {
  const response = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.data;
};
const LineGraph: React.FC = () => {
  const { data, isLoading } = useQuery<HistoricalData>(
    "historicalData",
    fetchHistoricalData
  );

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Cases Fluctuations",
      },
    },
  };

  return (
    <Line data={chartData} options={options} style={{ maxHeight: "450px" }} />
  );
};

export default LineGraph;
