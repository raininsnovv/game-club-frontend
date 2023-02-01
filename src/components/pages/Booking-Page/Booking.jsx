import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addBooking } from '../../../features/slice/bookingSlice'
import moment from 'moment'
import styles from './Calendar.module.scss'
import styles2 from './Booking.module.scss'

const Booking = () => {
  const dispatch = useDispatch()

  const [date2, setDate] = useState(new Date())
  const currentDate = moment(date2).format('MMMM YYYY')
  const daysInMonth = moment(date2).daysInMonth()
  const firstDayOfMonth = moment(date2).startOf('month').format('dddd')
  const days = []

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div>
        <div key={i}>{moment(date2).date(i).format('YYYY-MM-DD')} </div>
      </div>
    )
  }

  const dateForBooking = {
    daysOfTheWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    time: [
      '09:00 - 10:00',
      '10:00 - 11:00',
      '11:00 - 12:00',
      '12:00 - 13:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
      '15:00 - 16:00',
      '16:00 - 17:00',
      '17:00 - 18:00',
      '18:00 - 19:00',
      '19:00 - 20:00',
      '20:00 - 21:00',
      '21:00 - 22:00',
      '22:00 - 23:00',
      '23:00 - 24:00',
    ],
  }
  const { daysOfTheWeek, time } = dateForBooking

  const [bookingOrNot, setBookingOrNot] = useState(false)

  const objDate = {}

  const handleChoseDate = (hours) => {
    console.log(hours)

    objDate.hours = hours
    console.log(objDate)
  }

  const handleDate = (chosenDate) => {
    objDate.date = chosenDate
  }

  const handleSubmitBooking = () => {
    dispatch(
      addBooking({
        seat: '63d4891d91bffe27c5f6fcb8',
        player: 'Ruslan',
        date: objDate.date,
        hours: objDate.hours,
      })
    )
  }

  const checkFreeOrNot = useSelector((state) => state.bookingSlice.booking)

  console.log(checkFreeOrNot, 'checkOrNot')

  /* if (JSON.stringify(checkFreeOrNot).indexOf('Время') !== -1) {
    return <div>{checkFreeOrNot}</div>
  } else if (JSON.stringify(checkFreeOrNot).indexOf('период') !== -1) {
    return <div>{checkFreeOrNot}</div>
  } */

  return (
    <div className={styles2.main}>
      <div>
        <div className={styles.mainCalendar}>
          <div>{currentDate}</div>
          <div>First day of the month: {firstDayOfMonth}</div>
          <div className={styles.daysContainerCalendar}>
            {days.map((item) => (
              <div
                onClick={() =>
                  handleDate(item.props.children.props.children[0])
                }
              >
                <div className={styles.days}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {JSON.stringify(checkFreeOrNot).indexOf('Время') !== -1 ? (
        <div>{checkFreeOrNot}</div>
      ) : JSON.stringify(checkFreeOrNot).indexOf('период') !== -1 ? (
        <div>{checkFreeOrNot}</div>
      ) : (
        <div>Забронируйте время</div>
      )}
      <div className={styles2.containerTime}>
        {time.map((item, index) => {
          return (
            <div
              className={bookingOrNot ? styles2.timeInDay : styles2.timeInDay2}
              onClick={() => handleChoseDate(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
      <button onClick={handleSubmitBooking}>забронировать</button>
    </div>
  )
}

export default Booking
