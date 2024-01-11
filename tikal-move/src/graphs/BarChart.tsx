//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,  
} from "chart.js";
// import ChartSummary from "./ChartSummary";
import data from '/src/data/data.json'
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
)


const BarChart = () => {

  // get the day values
  const getDay = (weekday) => {
    return [weekday.day]
  }

  // hold the values that will be labels 
  const labels = data.map(getDay)

  // get the amount values
  const getAmount = (cost) => {
    return [cost.amount]
  }

  // what we want to show in the data field (the bars)
  const amountSpent = data.map(getAmount)


  // console.log(labels)

  const chartData = {
    labels,
    datasets: [
      {
        label: "",
        data: amountSpent,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)', //red
            'rgba(255, 159, 64, 0.2)', // orange
            'rgba(255, 205, 86, 0.2)', //yellow?
            'rgba(75, 192, 192, 0.2)', //green
            'rgba(54, 162, 235, 0.2)', // blue
            'rgba(153, 102, 255, 0.2)', //purple
            'rgba(201, 203, 207, 0.2)' //gray
          ],
          borderColor: [
            'rgb(255, 99, 132)', //red
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)' //gray
          ],
          borderWidth: 1,
        borderRadius: 4,
        // hoverBackgroundColor: 'hsl(186, 34%, 60%)'
      }
    ],
    options: {
      scales: {
        x: {
          grid: {
            display: false, 
          },
          border: {
            color: 'white'
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
          border: {
            color: 'white'
          }
        }
      }
    }
  }

  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950">Collected Soil Moisture</h1>
      </div>
      <div>
        <Bar data={chartData} options={chartData.options} />
      </div>
      <br />
    </section>
  
  );
}

export default BarChart;