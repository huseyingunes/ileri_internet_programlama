import logo from './logo.svg';
import './App.css';
import Bilesenim from './Bilesenim';
function XTaneBilesenim(props){
  let dizi = [];
  for(let i = 0; i < props.xkere; i++){
    dizi.push(<Bilesenim renk={props.renk}/>)
  }
  return dizi;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <XTaneBilesenim xkere="2" renk="red"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Öğren
        </a>
      </header>
    </div>
  );
}

export default App;
