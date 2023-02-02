import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addBooking } from '../../../features/slice/bookingSlice'
import moment from 'moment'

import styles from './Booking.module.scss'

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
  const [login, setLogin] = useState('')

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

  const [disabledTime, setDisabledTime] = useState(false)
  const [disabledDate, setDisabledDate] = useState(false)
  const handleSubmitBooking = () => {
    if (objDate.date !== undefined && objDate.hours !== undefined) {
      dispatch(
        addBooking({
          seat: '63d4891d91bffe27c5f6fcb8',
          player: login,
          date: objDate.date,
          hours: objDate.hours,
        })
      )
      setDisabledTime(true)
      setDisabledDate(true)
    }
    setLogin('')
  }

  const handleLogin = (e) => {
    setLogin(e.target.value)
    console.log(login)
  }

  const checkFreeOrNot = useSelector((state) => state.bookingSlice.booking)

  return (
    <div className={styles.main}>
      <div className={styles.mainCalendar}>
        <div className={styles.duringMonth}>{currentDate}</div>
        <div className={styles.loginInput}>
          <input
            type="text"
            placeholder="Введите логин..."
            value={login}
            onChange={handleLogin}
          />
        </div>
        {JSON.stringify(checkFreeOrNot).indexOf('Время') !== -1 ? (
          <div className={styles.reservationTime}>{checkFreeOrNot}</div>
        ) : JSON.stringify(checkFreeOrNot).indexOf('период') !== -1 ? (
          <div className={styles.reservationTime}>{checkFreeOrNot}</div>
        ) : (
          <div className={styles.reservationTime2}>Забронируйте время</div>
        )}
        <div className={styles.calendarAndTime}>
          <div className={styles.container}>
            <div>Дата</div>
            <div className={styles.daysContainerCalendar}>
              {days.map((item) => (
                <div
                  onClick={() =>
                    handleDate(item.props.children.props.children[0])
                  }
                  className={styles.chooseDate}
                >
                  {item}
                  <input type="checkbox" disabled={disabledDate} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.container2}>
            <div>Время</div>
            <div className={styles.containerTime}>
              {time.map((item, index) => {
                return (
                  <div
                    className={styles.timeInDay}
                    onClick={() => handleChoseDate(item)}
                  >
                    {item}
                    <input type="checkbox" disabled={disabledTime} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmitBooking}
          className={styles.buttonReservation}
        >
          забронировать
        </button>
      </div>
    </div>
  )
}

export default Booking
