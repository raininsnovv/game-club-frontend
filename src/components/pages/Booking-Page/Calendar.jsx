import React, { useState } from 'react'
import moment from 'moment'
import styles from './Calendar.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addBooking } from '../../../features/slice/bookingSlice'
import { addDateInContainer } from '../../../features/reducers/bookingReducer'

const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const currentDate = moment(date).format('MMMM YYYY')
  const daysInMonth = moment(date).daysInMonth()
  const firstDayOfMonth = moment(date).startOf('month').format('dddd')
  const days = []
  const dispatch = useDispatch()

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div>
        <div key={i}>{moment(date).date(i).format('YYYY MM DD')} </div>
      </div>
    )
  }

  const containerDate = useSelector(
    (state) => state.bookingReducer.containerDate
  )

  const newContainer = [{ ...containerDate[0], ...containerDate[1] }]

  const handleDate = (chosenDate) => {
    console.log(chosenDate)

    dispatch(addDateInContainer({ date: chosenDate }))
    console.log(newContainer)
  }

  return (
    <div className={styles.main}>
      <div>{currentDate}</div>
      <div>First day of the month: {firstDayOfMonth}</div>
      <div className={styles.daysContainer}>
        {days.map((item) => (
          <div
            onClick={() => handleDate(item.props.children.props.children[0])}
          >
            <div className={styles.days}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
