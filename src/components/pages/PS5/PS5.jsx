import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PS5.module.scss';
import { fetchSeats } from '../../../features/slice/seatSlice';
import { Link } from 'react-router-dom';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import SkeletonPorts from '../PC/SkeletonPorts';

const PS5 = () => {
  const dispatch = useDispatch();
  const { seats, loading } = useSelector((state) => state.seatSlice);

  useEffect(() => {
    dispatch(fetchSeats());
  }, [dispatch]);

  if (loading) {
    return <SkeletonPorts />;
  }

  const psSeats = seats.filter((item) => item.platformType.includes('PS'));

  return (
    <>
      <Typography variant="h3" mt={3}>
        Пункт дислокации
      </Typography>
      <div className={styles.wrapper}>
        <div className={styles.platformImg}></div>
        <div className={styles.seats}>
          <div className={styles.seatsItems}>
            {psSeats.map((seat) => (
              <Link to={`/seat/${seat._id}`}>
                <div className={styles.item}>
                  <SportsEsportsTwoToneIcon fontSize="large" />
                </div>
                <Typography mt={1}>{seat.platformType}</Typography>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PS5;
