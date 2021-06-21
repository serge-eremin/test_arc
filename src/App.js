import React from 'react'
import './style.css'
import HistoryFn from './HistoryFn'
// import History from './History'

function App() {

  const metadata = {min: 0, max: 10}
  const data = {minValue: 2, maxValue: 9}
  const cx = 0 || null ;
  const cy = 0 || null
  const mStyles = {width:'350', height:'350'}
  const viewboxParams = "-166 -166 350 350"

  return (
    <div>
      <svg 
        style={mStyles}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={viewboxParams}>
          
        <HistoryFn
          cx={cx}
          cy={cy}
          metadata={metadata}
          data={data}
        />
      </svg>
    </div>
  )
}

export default App
