import React from 'react';
import ConstantFunctionGreeting from './ConstantFunctionGreeting'
// Class Definition Component ClassComponentGreeting
// Ovaj nacin se vise ne preporuca koristiti (Sluzbeno proglaseno obsolete od strane Facebooka)


class ClassComponentGreeting extends React.Component {
  render() {
    return (
      <>
        <h2 style={{color: "green"}}>Greeting From Class Component</h2>
      </>
    );
  }
}

export default ClassComponentGreeting;
