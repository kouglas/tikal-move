//@ts-nocheck
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from "chart.js";
import { Line } from "react-chartjs-2";
import Papa from 'papaparse';
import { useEffect, useState, useCallback } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)






const CustomLineGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [randomCsvFileName, setRandomCsvFileName] = useState('/Chlorella.csv');
  const [currentFilename, setCurrentFilename] = useState('Chlorella.csv')

  const fetchChartData = useCallback(async () => {
    try {
      // Fetch CSV data based on the randomCsvFileName
      const csvString = await fetch(randomCsvFileName).then(response => response.text());

      // Parse CSV data
      const parsedData = Papa.parse(csvString, { header: true });
      const data = parsedData.data;

      // Extract necessary columns for chart
      const labels = data.map((row) => row['Wavenumber']);
      const processedData = data.map((row) => parseFloat(row['Processed']));

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Random Data',
            data: processedData,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0.4,
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
          },
        ],
      });
      setCurrentFilename(randomCsvFileName.replace('/', ''));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [randomCsvFileName]);

  useEffect(() => {
    // Initial fetch
    fetchChartData();
  }, [fetchChartData]);

  const handleGetSampleClick = async () => {
    try {
      // Use dynamic import to fetch file names at build time
      const csvFilesContext = require.context('../../public', false, /\.csv$/);
      const csvFiles = csvFilesContext.keys().map(filename => filename.replace('./', ''));

      // Randomly select a CSV file
      const randomIndex = Math.floor(Math.random() * csvFiles.length);
      const randomCsvFile = csvFiles[randomIndex];

      // Update randomCsvFileName state
      setRandomCsvFileName(`/${randomCsvFile}`);

      // Fetch chart data based on the new randomCsvFileName
      await fetchChartData();
    } catch (error) {
      console.error('Error getting random CSV file:', error);
    }
  };

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
  }

  
  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950">{`${currentFilename}`}</h1>
      </div>
      <div>
        <button
          onClick={handleGetSampleClick}
          className="flex w-1/2 mx-auto justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase mt-10"
        >
          Get Sample
        </button>
      </div>
      <div>
        <Line data={chartData} options={options} />
      </div>
      <br />
    </section>
  );
}

export default CustomLineGraph;
