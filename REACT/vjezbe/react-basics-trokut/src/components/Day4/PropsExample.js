import { useState } from 'react'

function Greeting(props) {
  return (
    <div>
      <p>Greeting: {props.text}</p>
    </div>
  )
}


function FullName (props) {
  const initialUser = {
    name: "Jasmin",
    lastName: "Causevic"
  }
  const [user, setUser] = useState(initialUser)
  const handleClick = () => {
    setUser({
      name: props.name,
      lastName: props.lastName
    })
  }
  return(
    <>
      <h3>{user.name} {user.lastName}</h3>
      <button onClick={() => handleClick()}>Change Name</button>
    </>
  )
}

export {Greeting, FullName};
