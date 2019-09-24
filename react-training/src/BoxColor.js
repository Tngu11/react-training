import React from 'react';



const BoxColor = props => {
  const textColor=(props.r+props.g+props.b)<300?'white':'black';
  const outputStr = `rgb(${props.r} , ${props.g} , ${props.b})`;
  const hex = `#${(props.r).toString(16)}${(props.g).toString(16)}${(props.b).toString(16)}`;
  const boxStyle = {
    backgroundColor: outputStr,
    color: textColor
  };
  return (
    <div style={boxStyle} >
      <p>{outputStr}</p>
      <p>{hex}</p> 
    </div>
  );
};



export default BoxColor;