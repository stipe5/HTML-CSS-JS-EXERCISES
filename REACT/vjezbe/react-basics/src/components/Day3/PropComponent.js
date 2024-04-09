
function PropComponent (props) {
    console.log(props);
    console.log(props.title);
    console.log(props.itemObject);
    const containerStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        color: "black",
        marginBottom: "20px",
        marginTop: "20px",
        minWidth: "200px"
    }
    return (
        <div style={containerStyle}>
            <h4>{props.title}</h4>
            <h6>Written by: {props.username}</h6>
            <p>{props.subtitle}</p>
        </div>
    )
}

export {PropComponent};