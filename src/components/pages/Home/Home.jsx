import React from "react";
import ContactPage from "../../ContactPage/ContactPage";
import styles from "./Home.module.scss";
import Card from "./UI/Card/Card";
import pc from "./UI/pc.jpg";
import ps from "./UI/ps.png";
import headerImg from "./UI/headerImg.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerDiv}>
        {/* <div>
          <img className={styles.headerImg} src={headerImg} alt="" />
        </div> */}
        <div className={styles.logo}>
          <img className={styles.headerImg} src={headerImg} alt="" />
        </div>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>ВЫБЕРИ ПРЕДПОЧИТАЕМУЮ ПЛАТФОРМУ</h1>
        <h2 className={styles.subtitle}> свободных мест: 6</h2>
        <div className={styles.cardBox}>
          <Card className={styles.card} background={pc} />
          <Card background={ps} />
        </div>
      </div>
      <ContactPage className={styles.karta} />
    </div>
  );
};

export default Home;
