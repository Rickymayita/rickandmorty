import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharacter] = React.useState('')

   const handleInput = (event) => {
      
      const value = event.target.value
      setCharacter(value)
          
   }
   const onSearchMax = ()=>{
      props.onSearch(character)
      setCharacter('')
   }

   return (
      <div className={styles.search}>
         <div className={styles.box}>
            <input type='search' onChange={handleInput} value={character}/>
            <label>Ingrese número</label>
         </div>

         <button className={styles.btn} onClick={onSearchMax}>Search</button>
      </div>
   );
}
