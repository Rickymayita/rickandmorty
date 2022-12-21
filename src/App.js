import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import NavBar from './components/NavBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
       <NavBar />
      </div>
      <hr />      
      <div>
        <Cards
          characters={characters}
        />
      </div>
      
    </div>
  )
}

export default App
