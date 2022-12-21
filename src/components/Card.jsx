import styles from './Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.btnx} onClick={props.onClose}>X</button>
         <div className={styles.bgcard}><img src={props.image} alt="" className={styles.img} /></div>
         <div className={styles.infcard}>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>

      </div>
   );
}