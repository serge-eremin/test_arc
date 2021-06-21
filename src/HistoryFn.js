import React from 'react'

const HistoryFn = ({cx, cy, metadata, data}) => {
  
  
console.log(' -cx, cy- ', cx, cy)

  const DEGREES_IN_HALF_ARC = 120
  const GROOVE_RADIUS = 318 / 2
  const ANGLE_START = (-DEGREES_IN_HALF_ARC * Math.PI) / 180
  const ANGLE_END = (DEGREES_IN_HALF_ARC * Math.PI) / 180
  // const ANGLE_RANGE = ANGLE_END - ANGLE_START  
  let angleStart = ANGLE_START * (1 - 0.2 * data.minValue)
  let angleEnd = ANGLE_END * ( 0.2 * data.maxValue - 1)
  let angle = angleEnd - angleStart
    
  let coordsStart = {
    x: GROOVE_RADIUS * Math.cos(angleStart),
    y: GROOVE_RADIUS * Math.sin(angleStart),
  }

  let coordsEnd = {
    x: GROOVE_RADIUS * Math.cos(angleEnd),
    y: GROOVE_RADIUS * Math.sin(angleEnd),
  }
  
  const largeArcFlag = (angle) <= (Math.PI) ? "0" : "1";

  return (
    <g>
      <circle cx={cx} cy={cy} r={166} fill='black' />
      
      <g transform="rotate(-90)">
        <path
          d={`M0,0 l${coordsStart.x},${coordsStart.y}`}
          stroke='green'
          strokeWidth={5}
        />
        <path
          d={`M0,0 l${coordsEnd.x},${coordsEnd.y}`}
          stroke='blue'
          strokeWidth={5}
        />
        <path
          d={`
          M${coordsStart.x},${coordsStart.y}
           A${GROOVE_RADIUS},${GROOVE_RADIUS}
            0 ${largeArcFlag}
             1 ${coordsEnd.x},${coordsEnd.y}
            `}
          stroke='#7BCFFE'
          strokeWidth={5.8}
          fill="transparent"
        />
      </g>
    </g>
  )
}
export default HistoryFn
