import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false
})


const DEFAULT_HEIGHT = 600
const DEFAULT_WIDTH = 600

const DEFAULT_CENTER = [38.907132, -77.036546]

const Map = (props) => {
  const{height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH} = props

  return (
    <div style= {{aspectRatio: width / height}}>
      <DynamicMap {...props} />
    </div>
  )

}

export default Map