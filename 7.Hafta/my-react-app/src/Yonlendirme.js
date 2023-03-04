import React, { Component } from "react";

function Yonlendirme(){
    state = {
        xoffset: 0,
        yoffset: 0,
        delta: 10,
      };
    const yukari = () => {
        this.setState(
            { yoffset: this.state.yoffset 
              + this.state.delta });
    }
    return(
        <>
            <div id="kutu" 
            style={{
                width:200, 
                height:200, 
                backgroundColor:'black',
                zIndex:1000,
                position: "absolute",
                left: `${this.state.xoffset}px`,
                top: `${this.state.yoffset}px`,
                transform: 'translate(-50%,-50%)'
            }}>
                <button onClick={yukari}>Tıkla</button>
                <button onClick={yukari}>Tıkla</button>
                <button onClick={yukari}>Tıkla</button>
                <button onClick={yukari}>Tıkla</button>
                
            </div>
        </>
    );
}
export default Yonlendirme;
