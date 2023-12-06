import styles from "./CharacterCard.module.scss";

const CharacterCard = ({resData}) => {

    const {status,name,species,gender,location,origin,image}=resData;
  
    // const{deliveryTime}=resData?.info?.sla;
    
    if (!resData) {
      // Handle the case where resData is null or undefined
      return null;
    }
    
    
    
      return (
        <div className={styles.res_card}>
          <div className={styles.res_image}>
            <img
            className={styles.res_logo}
              src={image}
              alt="restaurantimage"
            />
          </div>
          <div className={styles.res_info }>
            <div className={`${styles.res-name} p-1`}>{name}</div>
            <div className={styles.res_footer_container}>
            <div className={`${styles.res_cuisine} p-1`}>{status}-{species}</div>
            <div className={`${styles.res_cuisine} p-1`}>{gender}</div>
            </div>
            
            <div className={`${styles.res_ratings} p-1 text-sm`}>
           
            
            Last Known Location: {location?.name}</div>

            <div className={`${styles.res_deliverytime} p-1`}>First seen in {origin.name}</div>
           
          </div>
        </div>
      );
    };
    export default CharacterCard;