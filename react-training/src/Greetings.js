import React from 'react';

const helloTranslated = {
  de: "Hallo",
  fr: "Bonjour",
  es: "Hola",
  en: "Hello"
};


const Greetings = props => {
  return (
    <div className="Greetings">
      {helloTranslated[props.lang]} {props.name}
    </div>
  );
};


export default Greetings;