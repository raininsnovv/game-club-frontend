import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBooking } from '../../../features/slice/bookingSlice'

import styles from './Booking.module.scss'
import Calendar from './Calendar'

const Booking = () => {
  const dispatch = useDispatch()

  const dateForBooking = {
    daysOfTheWeek: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    time: [
      '09:00',
      '09:30',
      '10:00',
      '10:30',
      '11:00',
      '11:30',
      '12:00',
      '12:30',
      '13:00',
      '13:30',
      '14:00',
      '14:30',
      '15:00',
      '15:30',
      '16:00',
      '16:30',
      '17:00',
      '17:30',
      '18:00',
      '18:30',
      '19:00',
      '19:30',
      '20:00',
      '20:30',
      '21:00',
      '21:30',
      '22:00',
      '22:30',
      '23:00',
      '23:30',
      '24:00',
    ],
  }
  const { daysOfTheWeek, time } = dateForBooking
  const [openDate, setOpenDate] = useState(false)
  const [bookingOrNot, setBookingOrNot] = useState(false)
  const bookingAll = useSelector((state) => state.bookingSlice.booking)
  const res = bookingAll.time
  let str = ''
  const handleOpenDate = () => {
    setOpenDate(true)
  }
  const handleChoseDate = (hours) => {
    str += hours
  }

  const handleSubmitBooking = () => {
    dispatch(
      addBooking({
        seat: '63d4891d91bffe27c5f6fcb8',
        player: 'Rash',
        date: '2023-01-30',
        hours: str,
      })
    )
  }

  const handleCalendar = () => {
    return (
      <div>
        <Calendar />
      </div>
    )
  }

  return (
    <div className={styles.main}>
      <div className={styles.daysWeekAndTime}>
        {' '}
        {daysOfTheWeek.map((item, index) => {
          return (
            <div onClick={() => handleOpenDate()}>
              {' '}
              <div className={styles.daysInWeek}>{item}</div>
            </div>
          )
        })}
      </div>

      <div className={styles.containerTime}>
        {openDate
          ? time.map((item, index) => {
              return (
                <div
                  className={
                    bookingOrNot ? styles.timeInDay : styles.timeInDay2
                  }
                  onClick={() => handleChoseDate(item)}
                >
                  {item}
                </div>
              )
            })
          : null}
        <div>{openDate ? handleCalendar() : null}</div>
      </div>
      <button onClick={handleSubmitBooking}>забронировать</button>
    </div>
  )
}

export default Booking
