import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button  className={styles.searchBar} onClick={()=>{props.onSearch(7)}}>Agregar</button>
      </div>
   );
}
