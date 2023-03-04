import Basarili from './Basarili';
import Basarisiz from './Basarisiz';

function Ifkosullu(props){
    const basariDurumu = props.basariDurumu;
    if (basariDurumu) {
        return <Basarili/>;
      }
      return <Basarisiz/>;

}

export default Ifkosullu;