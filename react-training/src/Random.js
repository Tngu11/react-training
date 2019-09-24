import React from 'react';


const Random = props => {

  const randomNumber = Math.ceil(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div className="border">
      Random value between {props.min} and {props.max} => {
        randomNumber
      }
    </div>
  )
}


export default Random;