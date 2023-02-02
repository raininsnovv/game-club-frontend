import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PC.module.scss';
import { Link } from 'react-router-dom';
import DesktopWindowsTwoToneIcon from '@mui/icons-material/DesktopWindowsTwoTone';
import SkeletonPorts from './SkeletonPorts';
import { fetchSeats } from '../../../features/slice/seatSlice';

const PC = () => {
  const dispatch = useDispatch();
  const { seats, loading } = useSelector((state) => state.seatSlice);

  useEffect(() => {
    dispatch(fetchSeats());
  }, [dispatch]);

  if (loading) {
    return <SkeletonPorts />;
  }

  const pcSeats = seats.filter((item) => item.platformType.includes('PC'));

  return (
    <>
      <Typography variant="h3" mt={3}>
        Пункт дислокации
      </Typography>
      <div className={styles.wrapper}>
        <div className={styles.platformImg}></div>
        <div className={styles.seats}>
          <div className={styles.seatsItems}>
            {pcSeats.map((seat) => (
              <Link to={`/seat/${seat._id}`}>
                <div className={styles.item}>
                  <DesktopWindowsTwoToneIcon fontSize="large" />
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

export default PC;
