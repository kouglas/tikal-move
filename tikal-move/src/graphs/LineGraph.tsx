//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  // BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,  
} from "chart.js";
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // BarElement,
  Title,
  Tooltip,
  Legend,
)


const LineGraph = () => {
  const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

  const chartData = {
    labels,
    datasets: [
      {
        label: "cyanobacteria detected",
        data: [134, 212, 555, 953, 764, 111, 432 ],
        backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.5)',
          // borderWidth: 1,
        // borderRadius: 4,
        lineTension: .4,
        hoverBackgroundColor: 'hsl(186, 34%, 60%)'
      }
    ],
    options: {
      responsive: true,
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
            // display: true,
          },
          ticks: {
            display: true,
          },
          // border: {
          //   color: 'white'
          // }
        }
      }
    }
  }

  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950">Input Water Quality </h1>
      </div>
      <div>
        <Line data={chartData} options={chartData.options} />

      </div>
    
    
      <br />
    </section>
  
  );
}

export default LineGraph;