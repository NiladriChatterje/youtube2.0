import React from 'react'

const History = () => {
    const [history,setHistory] = React.useState(()=>(localStorage.getItem('history')||[]))
  return (
    <div>History</div>
  )
}

export default History