export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={()=>{props.onSearch(7)}}>Agregar</button>
      </div>
   );
}
