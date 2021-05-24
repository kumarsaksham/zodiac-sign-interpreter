import React, { useState } from "react";
import "./styles.css";

var zodiacDictionary = {
  "♈" : "Aries",
  "♉" : "Taurus",
  "♊" : "Gemini",
  "♋" : "Cancer",
  "♌" : "Leo",
  "♍" : "Virgo",
  "♎" : "Libra",
  "♏" : "Scorpio",
  "♐" : "Sagittarius",
  "♐" : "Capricorn",
  "♒" : "Aquarius",
  "♓" : "Pisces",
}

//Converting Object to array using Object.keys 
var zodiacSymbols = Object.keys(zodiacDictionary);

export default function App() {
  var [zodiacSign,setZodiacSign] = useState("")

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var zodiacSign = zodiacDictionary[userInput];
    setZodiacSign(zodiacSign);
  }

  function clickEventHandler(item){
    var zodiacSign = zodiacDictionary[item];
    setZodiacSign(zodiacSign)
    
  }

  return (
    <div className="App">
      <header className = "header">Zodiac Sign Interpreter</header>
      <input onChange ={inputEventHandler} placeholder = "Put your zodiac symbol here or select from below."></input>
      <div className = "output"> { zodiacSign }  </div>

      <h3>Zodiac Signs</h3>
      {
        zodiacSymbols.map(item => {
          return (
            <span onClick = {() => clickEventHandler(item)} key={item} className = "zodiacSymbols"> {item} </span>
          )
        })
      }
    </div>
  );
}
