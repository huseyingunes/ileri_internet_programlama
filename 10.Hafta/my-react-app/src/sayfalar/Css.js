import styles from "./tarz.module.css"

const Css = () => {
    const benimTarzim = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };
    // Inline Ornegi
    return(
    <> 
        <h1 style={{color:"red"}}>Afferin Bana</h1>
        <p style={benimTarzim}>Paragraf</p>
        <p className={styles.palamut} id='dfg'>Palamutlu paragraf</p>
    </>
  )};
  
  export default Css;