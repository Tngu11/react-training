import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greetings";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import Rating from "./Rating";

const card1 = {
  type: "Visa",
  number: "0123456789018845",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color: "white"
};

const card2 = {
  type: "Master Card",
  number: "0123456789010995",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222"
};

const card3 = {
  type: "Visa",
  number: "0123456789016984",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "Name of the Bank",
  owner: "Firstname Lastname",
  bgColor: "#ddbb55",
  color: "white"
};

function App() {
  return (
    <div className="App">
      <Greetings name="Ludwig" lang="de" />
      <Greetings name="François" lang="fr" />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={80} g={255} b={0} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <CreditCard {...card1} />
        <CreditCard {...card2} />
        <CreditCard {...card3} />
      </div>
      <Rating children={3} />
      <Rating children={1.3} />
      <Rating children={4.5} />
    </div>
  );
}

export default App;
