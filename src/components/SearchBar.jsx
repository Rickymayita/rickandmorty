import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharter] = React.useState('')

   const handleInput = (event) => {
      setCharter(event.target.value)    
   }

   return (
      <div className={styles.search}>
         <div className={styles.box}>
            <input type='search' onChange={handleInput} />
            <label>Ingrese número</label>
         </div>

         <button className={styles.btn} onClick={() => { props.onSearch(character) }}>Agregar</button>
      </div>
   );
}
