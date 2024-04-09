import React from 'react';
  
  // FUNCTION FunctionComponentGreeting

  function FunctionComponentGreeting() {
    const styles = {
      color: "hotpink",
      backgroundColor: "White",
      padding: "25px",
      borderRadius: "10px"
    }
    return (
      <h3 style={styles}>Greetings from Function Component</h3>
    )
  }

  export default FunctionComponentGreeting;