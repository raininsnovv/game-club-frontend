import React from 'react';
import { Skeleton, Typography } from '@mui/material';
import styles from './PC.module.scss';

const SkeletonPorts = () => {
  return (
    <>
      <Typography variant="h3" mt={3}>
        <Skeleton sx={{ backgroundColor: 'rgb(93, 92, 92)', fontSize: '1em' }} />
      </Typography>
      <div className={styles.wrapper}>
        <Skeleton
          variant="rounded"
          width={'30%'}
          height={'70%'}
          sx={{ backgroundColor: 'rgb(93, 92, 92)' }}
        />
        <div className={styles.seats}>
          <div className={styles.seatsItems}>
            <Skeleton
              variant="rounded"
              width={'90%'}
              height={'85%'}
              sx={{ backgroundColor: 'rgb(93, 92, 92)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonPorts;
