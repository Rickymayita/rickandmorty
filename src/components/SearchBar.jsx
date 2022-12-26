import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharter] = React.useState('')

   const handleInput = (event) =>{
      setCharter(event.target.value)
   }

   return (
      <div>
         <input type='search' onChange={handleInput}  />
      <button  className={styles.searchBar} onClick={()=>{props.onSearch(character)}}>Agregar</button>
      </div>
   );
}
