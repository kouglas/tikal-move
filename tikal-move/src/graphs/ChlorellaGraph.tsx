//@ts-nocheck
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const ChlorellaGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Fetch CSV data
    fetch('/Chlorella.csv') // Change this path if needed
      .then((response) => response.text())
      .then((csvString) => {
        // Parse CSV data
        const parsedData = Papa.parse(csvString, { header: true });
        const data = parsedData.data;
  
        // Extract necessary columns for chart
        const labels = data.map((row) => row['Wavenumber']); // Assuming 'wavenumber' is the column header for x-axis
        const processedData = data.map((row) => parseFloat(row['Processed'])); // Assuming 'processed' is the column header for y-axis
  
        // Update chart data state
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Chlorella',
              data: processedData,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.5)',
              lineTension: 0.4,
              hoverBackgroundColor: 'hsl(186, 34%, 60%)',
            },
          ],
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Wavenumber',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Processed',
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950">Found: Chlorella </h1>
      </div>
      <div>
        <Line data={chartData} options={options} />
      </div>
      <br />
    </section>
  );
}

export default ChlorellaGraph;
