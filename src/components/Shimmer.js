import styles from "./Shimmer.module.scss";


const Shimmer=()=> {



    return (
        <div className={styles.body}>
        <div className={styles.body_container}>
          <div className={styles.sidebar}>
     <div className={styles.filterCategory}>
     
     </div>

          </div>
          <div className={styles.right_container}>
            <div className={styles.filter_container}>
              <div className={styles.filter}>
            
              </div>
            </div>
            <div className={styles.res_container}>
              {/* Shimmer effect for loading state */}
              <div className={styles.shimmer_container}>
        <div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div><div className={styles.shimmer_cards}>
            
            </div>
        <div className={styles.shimmercards}>

        </div>



        </div>
              {/* Add more shimmer elements as needed */}
            </div>
          </div>
        </div>
        </div>
       
    )

}
export default Shimmer;