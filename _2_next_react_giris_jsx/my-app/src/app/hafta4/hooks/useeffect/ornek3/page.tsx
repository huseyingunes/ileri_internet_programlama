'use client'
import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [sayac, setSayac] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [sayac]);

  return <>
    <h1>I've rendered {count} times!</h1>
    <button
        type="button"
        onClick={() => setSayac(1)}
      >Tıkla</button>
  </>;
}
