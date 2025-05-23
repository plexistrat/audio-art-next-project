import React from "react";
import styles from "./Collection.module.css";

const guitarAmps = [
  {
    id: 1,
    name: "Cosmonaut",
    description: "Single Ended, Class A, 12Watt Amplifier",
    price: "$2000",
    image:
      "https://images.squarespace-cdn.com/content/v1/579a694129687f6efd6fc60d/1479070001085-FSVVZKB3EK3J6NKX8P44/IMG_3922.JPG",
  },
  {
    id: 2,
    name: "Apollo",
    description: "Single Ended Parallel, Class A, 25 Watt Amplifier",
    price: "$2000",
    image:
      "https://killerguitarrigs.com/wp-content/uploads/2023/11/Cover-Pic-News-6-1400x600.jpg",
  },
  {
    id: 3,
    name: "Odyssey",
    description: "Push pull 50 Watt Amplifier",
    price: "$2000",
    image:
      "https://guitar.com/wp-content/uploads/2018/11/bartel-amplifiers-roseland@936x702.jpg",
  },
];

type Props = {};

const Collection = (props: Props) => {
  return (
    <div className={styles.collection} id="collection">
      <div className={styles.header}>
        <h1>Our Custom made Amplifiers</h1>
        <p>Meticulously engineered to deliver unparalleled sonic fidelity</p>
      </div>
      <div className={styles.cardsContainer}>
        {guitarAmps.map((guitarAmp) => (
          <div key={guitarAmp.id} className={styles.cards}>
            <img
              src={guitarAmp.image}
              alt={guitarAmp.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{guitarAmp.name}</h2>
              <p className={styles.cardDescription}>{guitarAmp.description}</p>
              <p className={styles.cardPrice}>{guitarAmp.price}</p>
              <button className={styles.cardButton}>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
