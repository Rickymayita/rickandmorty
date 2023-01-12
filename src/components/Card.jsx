import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/actions'

export default function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((s) => s.myFavorites);
 
   function handleFavorite(ch) {
     if (isFav) {
       setIsFav(false);
       dispatch(deleteFavorites(ch.id));
     } else {
       setIsFav(true);
       dispatch(addFavorites(ch));
     }
   }
 
   useEffect(() => {
     myFavorites.forEach((ch) => {
       if (ch.id === props.id) {
         setIsFav(true);
       }
     });
   }, [myFavorites]);
   
   return (
      <div className={styles.card}>
         <div>
            { isFav ? (
                  <button onClick={() => handleFavorite(props)}>❤️</button>
               ) : (
                  <button onClick={() => handleFavorite(props)}>🤍</button>
               )}
            <button className={styles.btnx} onClick={props.onClose}>X</button>
         </div>

         <div className={styles.bgcard}><img src={props.image} alt="" className={styles.img} /></div>

         <Link to={`/detail/${props.id}`}>

            <div className={styles.infcard}>
               <h2>{props.name}</h2>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
            </div>
         </Link>

      </div>
   );
}
