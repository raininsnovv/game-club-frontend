import React, { useState } from 'react'
import moment from 'moment'

const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const currentDate = moment(date).format('MMMM YYYY')
  const daysInMonth = moment(date).daysInMonth()
  const firstDayOfMonth = moment(date).startOf('month').format('dddd')
  const days = []

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(<div key={i}>{moment(date).date(i).format('YYYY MM DD ')}</div>)
  }

  return (
    <div>
      <h3>{currentDate}</h3>
      <h4>First day of the month: {firstDayOfMonth}</h4>
      {days}
    </div>
  )
}

export default Calendar
