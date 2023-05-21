import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'

const CircleLoader = () => {
  return (
    <div>
        <ThreeCircles
  height="50"
  width="50"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass="w-full d-flex items-center justify-center h-full min-h-[30vh]"
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  )
}

export default CircleLoader