import React from 'react';
// import Visa from "./visa.png";
// import MasterCard from "./master-card.svg";

const imagePath = {
  "Visa": "assets/img/visa.png",
  "Mastercard": "assets/img/master-card.svg",
}

const CreditCard = props => {

  const cardStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
    borderRadius: '10px',
    height: '150px',
    width: '250px'
  }

  const cardNumStyle = {
    fontSize: "30px",
    margin: "20px 0"
  }

  const lowerP = {
    fontSize: "12px",
    textAlign: "left",
    lineHeight: "12px"
  }

  return (
    <div style={cardStyle}>
      <img src={imagePath[props.type]} width="80px" />
      <p style={cardNumStyle}> •••• •••• •••• {props.number.slice(11, 15)} </p>
      <p style={lowerP}> Expires {props.expirationMonth}/{props.expirationYear} {props.bank} </p>
      <p style={lowerP}>{props.owner}</p>
    </div>
  );
}


export default CreditCard;
