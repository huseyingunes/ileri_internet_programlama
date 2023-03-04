import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ifkosullu from './Ifkosullu';
import Sadekosullu from './Sadekosullu';
import Sapsadekosullu from './Sapsadekosullu';
import ListeRenkler from './ListeRenkler';
import ListeRenklerTr from './ListeRenklerTr';
import BasitForm from './BasitForm';
import BasitFormUseState from './BasitFormUseState';
import Ornek from './Ornek';

const arabalar = ["a", "b", "TOGG"]
const arabaYok = []
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Ornek />
    <BasitFormUseState />
    <BasitForm />
    <Ifkosullu basariDurumu={false} />
    <Ifkosullu basariDurumu={true} />
    <Sadekosullu arabalar={arabalar} />
    <Sadekosullu arabalar={arabaYok} />
    <Sapsadekosullu arabalar={arabalar} />
    <Sapsadekosullu arabalar={arabaYok} />
    <ListeRenkler />
    <ListeRenklerTr />

  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
