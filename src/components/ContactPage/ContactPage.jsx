import React from "react";
import styles from "../ContactPage/ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.location}>
      <br />
      <h2 className={styles.infokarta}>СПЕШИ К НАМ!</h2>
      <br />
      <section className="map">
        <div className="map-container">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23222.263162874176!2d45.68353679309757!3d43.318804040173745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d13abc103637%3A0x8601f7fff1cac51f!2zSW50b2NvZGUgQ29kaW5nIEJvb3RjYW1wIOKAkyDRiNC60L7Qu9CwINC_0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1671410821699!5m2!1sru!2sru"
            width="80%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
