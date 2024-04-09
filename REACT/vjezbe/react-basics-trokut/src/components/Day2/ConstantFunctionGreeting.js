// Constant Functions ConstantFunctionGreeting
import './ConstantFunctionGreeting.css'
import './stylingSASS.scss'
const ConstantFunctionGreeting = () => {
  const validation = false;

  //  Dynamic initial Class
  let customClass = "heading";

  if(validation === true){
    customClass += " blue";
  }

  return (
    <h3 className={customClass}> Dynamic Color Greeting from Constant Function Component</h3>
  );
}

export default ConstantFunctionGreeting;
