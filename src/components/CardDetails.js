// CardDetails.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CardDetails.module.scss"; // Import the CSS module

const CardDetails = () => {
  const [cardData, setCardData] = useState([]);
  const { id } = useParams();

  const CardDataFetch = async (id) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const json = await data.json();
  
    setCardData(json);
  };

  const { name, image, origin, location, gender, species, status, type } = cardData;

  useEffect(() => {
    CardDataFetch(id);
  }, [id]);

  return (
    <div className={styles.card_details_container}>
      <div className={styles.card_details_name}>{name}</div>
      <img className={styles.card_details_image} src={image} alt="im" />
      <div className={styles.card_details_status}>{status}</div>
<div className={styles.container_info}>
      <div className={styles.left}>
        <div>Gender:</div>
        <div>spieces:</div>
        <div>Location:</div>
        <div>Origin:</div>
      </div>
      <div className={styles.right}>
      <div> {gender}</div>
        <div>{species}</div>
        <div>{location?.name}</div>
        <div>{origin?.name}</div>

   
      </div>
      </div>
    </div>
  );
};

export default CardDetails;
