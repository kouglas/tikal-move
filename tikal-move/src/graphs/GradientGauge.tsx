//@ts-nocheck
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  RadialLinearScale,


} from "chart.js";
import { Doughnut} from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  ArcElement,
  RadialLinearScale,

)

const GradientGauge = () => {

  const chartData = {
    labels: ['Score', 'Gray Area'],
    datasets: [
      {
        label: "level of cont",
        data: [650, 200],
        backgroundColor: (context) => {
          console.log(context)
          const chart = context.chart
          const {ctx, chartArea} = chart
          if(!chartArea) {
            return null
          }
          if(context.dataIndex === 0) {
            return getGradient(chart)
          }else {
            return 'black'
          }
        },
        borderWidth: 1, 
        cutout: '90%',
        circumference: 180,
        rotation: 270,   
      }
    ],
    options: {
      responsive: true,
      aspectRatio: 2,
      scales: {
      },
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    },
  }

  const options = {

  }
  function getGradient(chart) {
    const {ctx, chartArea: {top, bottom, left, right}} = chart
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0)
    gradientSegment.addColorStop(0, 'red')
    gradientSegment.addColorStop(0.5, 'orange')
    gradientSegment.addColorStop(1, 'green')
    return gradientSegment
  }
  return (
    <section className="">
      <div>
        <h1 className="text-xl font-bold py-8  text-amber-950">Nutrient density</h1>
      </div>
      <div>
        <Doughnut 
          data={chartData}
          options={chartData.options}
        />
        {/* you need to fix the pointLabel  */}
        <div className="flex justify-between ">
          <div className=" ">
          <p>label 1</p>
          </div>
          <div className=" ">
          <p>label 2</p>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default GradientGauge;