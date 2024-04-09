
function PropComponent (props) {
  console.log("props =>", props);
  console.log("title => ", props.title);
  console.log("subtitle => ", props.subtitle);

  const containerStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    color: "black",
    marginBottom: "20px",
    minWidth: "200px"
  }
  return(
    <div style={containerStyle}>
      <h4>{props.title}</h4>
      <h6>Written by: {props.username}</h6>
      <p>{props.subtitle}</p>
    </div>
  )
}

export { PropComponent }
