import { useState } from 'react'

function StatesExampleOriginal() {

  const [greeting, setGreeting] = useState('Hello Guest');

  return(
    <div>
      <h3>States Example: {greeting} </h3>
    </div>
  )
}
