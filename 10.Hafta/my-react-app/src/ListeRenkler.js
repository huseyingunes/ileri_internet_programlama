function Renkliyazi(props)
{
    return(
        <li>
            <span style={{color:props.renk}}>{props.renk}</span>
        </li>
    )
}

function ListeRenkler(props) {
    const renkler = ["gray", "red", "black"]
    return (
      <>
        <h1>Renkli Yazılar</h1>
        <ul>
            {renkler.map((renk) => <Renkliyazi renk={renk} />)}
        </ul>
      </>
    );
  }
  
  export default ListeRenkler;