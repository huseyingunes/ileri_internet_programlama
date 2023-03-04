function Dugme(props){
    const merhaba = () => {
        alert('Merhaba React')
    }
    return(
        <>
            <button onClick={merhaba}>Tıkla</button>
            <button onClick={() => {console.log('Merhaba React')}}>
                Tıkla
            </button>
        </>
    );
}

export default Dugme;