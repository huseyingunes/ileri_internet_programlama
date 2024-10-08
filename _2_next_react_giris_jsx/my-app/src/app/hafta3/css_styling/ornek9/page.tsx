import './tarz.css';

const Header = () => {
    const stil_nesnesi = {color: "red"}
    const stil_nesnesi2 = {color: "red", textDecoration:"underline"}
    return (
      <>
        <h1 style={{color: "red"}}>Hello Style!</h1>
        <h1 style={stil_nesnesi}>Hello Style!</h1>
        <h1 style={stil_nesnesi2}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

export default Header