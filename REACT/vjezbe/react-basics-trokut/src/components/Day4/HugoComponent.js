import { useState } from 'react'
import { userData } from './userData'

function HugoComponent(){
  // START BUSINESS LOGIC
  console.log("user data ==>", userData);
  const initialGreeting = "Hello guest";
  let initialUser = {
    name: "Hugo",
    lastName: "Mrvkica",
    role: "Gamer",
  }
  if(userData !== undefined){ initialUser = userData[0]}
  const [greeting, setGreeting] = useState(initialGreeting)
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(initialUser);

  /*
  This handles the counter
   */
  function handleCounter(){
    if(count >= 4 ){
      setCount('MANY')
    }
    else if(count !== "MANY"){
      setCount(count + 1)
    }
  }

  function handleGreeting(){
    setGreeting(`Hello ${user.name} ${user.lastName} (${user.role})`)
    // setGreeting("Hello " + user.name  + " " + user.lastName + " "+user.role)
  }

  const buttonStyle = {
    padding: 10,
    backgroundColor: "orange",
    color: "white",
    borderRadius: 4,
    marginRight: 10,
    outline: "none",
    borderColor: "orange",
    marginBottom: 50
  }
  const imageStyle = {borderRadius: "50%"}

// END BUSINESS LOGIC
  return (
    <div style={{textAlign: 'center'}}>
      <h3>{greeting}</h3>
      <h4>{count} times</h4>
      <img alt={'user image url'} style={imageStyle} src={user.imageUrl} /> <br/><br/>
      <button style={buttonStyle} onClick={() => handleGreeting()}>Greet me</button>
      <button style={buttonStyle} onClick={() => handleCounter()}>Count</button>
    </div>
  )
}

export { HugoComponent }
