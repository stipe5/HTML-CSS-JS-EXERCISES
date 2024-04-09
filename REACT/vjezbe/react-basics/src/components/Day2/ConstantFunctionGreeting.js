import React from 'react';
import "./ConstantFunctionGreeting.css"
import "./stylingSASS.scss"
  
const ConstantFunctionGreeting = () => {
  const validation = true;

  let customClass = "heading";
  if(validation) {
    customClass += " blue";
  }
  return (
    <h3 className={customClass}>Greetings from Constant Function Component</h3>
  )
}

export default ConstantFunctionGreeting;