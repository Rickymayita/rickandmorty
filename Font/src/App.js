import React, { useState, useEffect } from 'react';
import './App.css'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Porfolio from './components/Porfolio';
import Favorites from './components/Favorites';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '01p@ssWord';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
    else {
      alert('Verifica los datos de ingreso (username = ejemplo@gmail.com password = 01p@ssWord)')
    }
  }

  function logout() {
    setAccess(false);
    navigate('/')
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const location = useLocation();
  const [character, setCharacters] = React.useState([]);

  async function onSearch(id) {
    try {
      const result = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      const char = result.data
      if (char.name) {
        let existe = character.find((element) => element.id === char.id)
        if (existe) {
          alert('personaje ya elegido')
        } else {
          setCharacters((oldChars) => [...oldChars, char]);
        }

      } else {
        window.alert('No hay personajes con ese ID');
      }
    } catch (error) {
      console.log(error);
    }

  }
  const onClose = (id) => {
    setCharacters((dato) => {
      return dato.filter((element) => element.id !== id)
    })
  }

  return (
    <div className='App' >

      * <div>
        {location.pathname === '/' ? null : <NavBar logout={logout} onSearch={onSearch} />}
      </div>
      <Routes>
        <Route exact path='/' element={<Form login={login} />}></Route>
        <Route path='/home' element={<Cards character={character} onClose={onClose} />}></Route>
        <Route exact path='/detail/:detailId' element={<Detail />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/porfolio' element={<Porfolio />}></Route>
        <Route exact path='/favorites' element={<Favorites character={character} onClose={onClose} />}></Route>
      </Routes>
    </div>
  )
}

export default App
