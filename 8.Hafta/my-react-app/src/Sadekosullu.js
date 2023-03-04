import Basarili from "./Basarili";
import Basarisiz from "./Basarisiz";

function Sadekosullu(props) {
  const arabalar = props.arabalar;
  return (
    <>
      {arabalar.length > 0 && <h1>Araba var</h1>}
      {
        arabalar.length == 0 && 
          <h1>Araba Yok</h1>
      }
    </>
  );
}

export default Sadekosullu;
