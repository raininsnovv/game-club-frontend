import React from "react";
import styles from "./Card.module.scss";

const Card = ({ background }) => {
  return (
    <div className={styles.div} style={{ width: "300px", height: "300px", alignItems:'center' }}>
      <img className={styles.img} src={background} />
    </div>
  );
};

export default Card;
