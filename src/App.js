import React from 'react';
import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  const [character, setCharacters] = React.useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let existe = character.find((element) => element.id === data.id)
          if (existe) {
            alert('personaje ya elegido')
          }else{
            setCharacters((oldChars) => [...oldChars, data]);
          }

        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters((dato) => {
      return dato.filter((element) => element.id !== id)
    })
  }

  return (
    <div className='App' >
      <div>
        <NavBar
          onSearch={onSearch}
        />
      </div>

      <div>
        <Cards
          character={character}
          onClose={onClose}
        />
      </div>

    </div>
  )
}

export default App
