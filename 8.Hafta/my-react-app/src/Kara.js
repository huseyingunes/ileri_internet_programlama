function Kara(props){
    const {renk="blue", size = 100} = props
    return(
        <div style={{color:renk, 
            width:size, 
            height:size, 
            backgroundColor:'black',
            position:'fixed',
            zIndex:1000,
            top:'50px',
            left:50
        }}></div>
    );
}

export default Kara;