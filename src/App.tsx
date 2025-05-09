import Logo from './assets/images/title.png'
import balbaurus from './assets/images/balbasaur.png'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'
import Menu from './components/menu'
import pokemons from './assets/data/pokemon.json';
import Home from './pages/home'

// import balbasaur from './assets/images/balbasaur.png';
// import ivysaur from './assets/images/ivysaur.png';
// import venusaur from './assets/images/venusaur.png';
// import charmender from './assets/images/charmender.png';
// import charmeleon from './assets/images/charmeleon.png';
// import charizard from './assets/images/charizard.png';
// import squirtle from './assets/images/squirtle.png';
// import wartortle from './assets/images/wartortle.png';
// const imageMap: Record<string, string> = {
//   'balbasaur.png': balbasaur,
//   'ivysaur.png': ivysaur,
//   'venusaur.png': venusaur,
//   'charmender.png': charmender,
//   'charmeleon.png': charmeleon,
//   'charizard.png': charizard,
//   'squirtle.png': squirtle,
//   'wartortle.png': wartortle,
// };

function App() {
  return (
    <div>
      <Navbar logo={Logo} />
      <Menu
        
      />

      <Home/>
        
    </div>
  )
}

export default App
