import { useState } from "react";
import { slidesList } from "../Slideshow/slideshowData";

const todos = [...slidesList];

function TodoList() {
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [currentAddNewValue, setCurrentAddNewValue] = useState("");

    function handleFilter(event) {
        console.log("something changed", event.target.value);
        const searchString = event.target.value;
        const matchedElements = filterByValue(todos, searchString);
        console.log("found", matchedElements);
        setFilteredTodos(matchedElements);

    }

    function filterByValue(array, string) {
        console.log("string to search", string);
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }

    function addNewChangeHandler(e) {
        console.log("Value entered: ", e.target.value);
        setCurrentAddNewValue(e.target.value)
    }

    function handleAddNewSubmission(e) {
        console.log("New Submission is to be added to the list at this point");
        console.log("Value to be saved: ", currentAddNewValue);
        const newElement = {name: currentAddNewValue};
        todos.push(newElement);
        setFilteredTodos([...todos]);
    }

    const inputStyle = {padding: 10, minWidth: 200};
    // End of business logic

    return(
        <div className="todolist-wrapper">
            <h4>TODO LIST</h4>
            {/* Here we make the part that filter what is shown in the list */}
            <div>Filter TODOS</div>
            <input style={inputStyle} type="text" onChange={(e) => handleFilter(e)}/>
            <ul>
                {filteredTodos.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
            {/* Here we make the part that add new item */}
                <h4>Add new TODO</h4>
                <div style={{display: "flex", flexDirection: "row", position: "relative"}}>
                    <input style={inputStyle} type="text" onChange={(event) => addNewChangeHandler(event)}/>
                    <input type="submit" onClick={(event) => handleAddNewSubmission(event)} value={"Add New"}/>
                </div>
        </div>
    )
}

export {TodoList};