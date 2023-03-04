/*
4 tane input olacak
bu 4 inputun tamamına bir değer girildiğinde
otomatik olarak çarpımlarını ve toplamlarını bir span da gösterecek
bir tane de color picker olacak
    bu color picker da renk değiştiğinde 
    sayfanın arka planı o renk olacak
*/

import { useState } from "react";

function Ornek(props) {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [color, setColor] = useState("");
  document.body.style.backgroundColor = color;
  return (
    <form>
      Değerler
      <input
        type="text"
        name="a1"
        value={a1}
        onChange={(e) => setA1(e.target.value)}
      />
      <input
        type="text"
        name="a2"
        value={a2}
        onChange={(e) => setA2(e.target.value)}
      />
      <input
        type="text"
        name="a3"
        value={a3}
        onChange={(e) => setA3(e.target.value)}
      />
      <input
        type="text"
        name="a4"
        value={a4}
        onChange={(e) => setA4(e.target.value)}
      />
      <input
        type="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>
        {(a1 != "" && a2!="" && a3!="" && a4!="") ? a1*a2*a3*a4 : ""}
      </p>
      <p>
        {(a1 != "" && a2!="" && a3!="" && a4!="") ? parseInt(a1)+parseInt(a2)+parseInt(a3)+parseInt(a4) : ""}
      </p>
    </form>
    
  );
}

export default Ornek;
