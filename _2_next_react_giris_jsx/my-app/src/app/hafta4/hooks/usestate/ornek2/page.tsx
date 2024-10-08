'use client'

import { useState } from "react";


export default function FavoriteColor() {

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite car brand is {car.brand}!</h1>
      <h1>My favorite car model is {car.model}!</h1>
      <h1>My favorite car year is {car.year}!</h1>
      <h1>My favorite color is {car.color}!</h1>
      <button
        type="button"
        onClick={() => updateColor()}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

