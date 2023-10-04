import './App.css';
import CharactorDetail from './components/CharactorDetail';
import CharactorList from './components/CharactorList';
import Navbar from './components/Navbar';
import  {characters} from "../data/data";

function App() {

  return (  
    <div className="app">
       <Navbar/>
      <div className="main">
        <CharactorList characters={characters} />
        <CharactorDetail/>

      </div>
    </div>

   
  );

}

export default App;
