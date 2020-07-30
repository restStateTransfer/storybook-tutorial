import React from 'react';
import './Input.css'

function Input(props){
  const {size = 'small'} = props;
  return (
    <input className={`${size}`}  />
  )
}

export default Input
