import { useState } from "react";
import { userData } from "./userData";

function StateExampleComponent () {
    // START BUSINESS LOGIC
    const buttonStyles = {
        backgroundColor: "orange",
        borderRadius: "10px",
        color: "white",
        padding: "15px"
    }
    const initalGreeting = "Hello Guest"
    let initalUser = {
        name: "Stjepan",
        lastName: "Goreta",
        role: "Trainee"
    }
    if (userData !== undefined){initalUser = userData}
    const [greeting, setGreeting] = useState(initalGreeting);
    const [count, setCount] = useState(0);
    const [user, setUser] = useState(initalUser);
    

    function handleCount () {
        const noGreeting = "No Greetings for you"
        if(count === 3){
            setCount(noGreeting);
            setGreeting("");
            return
        }else if (count === noGreeting){
            setCount(3 + 1)
            setGreeting(initalGreeting);
            return
        }
        setCount(count + 1)
        
    }

    function handleGreeting() {
        setGreeting(`Hello ${user.name} ${user.lastName} (${user.role})`)
    }

    // END BUSINESS LOGIC
    return (
        <div style={{backgroundColor: "black"}}>
            <h3>{greeting}</h3>
            <img src={userData.imageUrl}></img>
            <h3>{count}</h3>
            <button onClick={() => handleGreeting()} style={buttonStyles}>Greet me</button>
            <button onClick={() => handleCount()} style={buttonStyles}>Count</button>
        </div>
    )
}

export {StateExampleComponent};