
function SidebarComponent (props) {
    return (
        <div className="left">
            <h2>{props.main.leftTitle}</h2>
            <p>{props.main.insideText}</p>
        </div>
    )
}

export {SidebarComponent};