import Basarili from "./Basarili";
import Basarisiz from "./Basarisiz";

function Sapsadekosullu(props) {
  const arabalar = props.arabalar;
  return (
    arabalar.length > 0 ? <h1>Araba var</h1> : <h1>Araba yok</h1>
  );
}

export default Sapsadekosullu;
