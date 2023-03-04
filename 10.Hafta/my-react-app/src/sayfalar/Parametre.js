import { useParams } from "react-router-dom";
const Parametre = () => {
    const { kisi } = useParams();
    const { eleman } = useParams();
    return <h1>Parametre : {kisi}, {eleman}</h1>;
  };
  
  export default Parametre;