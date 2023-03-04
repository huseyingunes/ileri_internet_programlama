function RenkliyaziTr(props)
{
    return(
        <li>
            <span style={{color:props.renkEng}}>{props.renkTr}</span>
        </li>
    )
}

function ListeRenklerTr(props) {
    const renkler = [
      {'eng' : 'black', "tr" : "siyah"},
      {'eng' : 'gray', "tr" : "gri"},
      {'eng' : 'blue', "tr" : "mavi"},
      {'eng' : 'orange', "tr" : "turuncu"}
    ]
    return (
      <>
        <h1>Renkli Yazılar</h1>
        <ul>
            {renkler.map((renk) => 
              <RenkliyaziTr renkEng={renk.eng} renkTr={renk.tr} />
            )}
        </ul>
      </>
    );
  }
  
  export default ListeRenklerTr;