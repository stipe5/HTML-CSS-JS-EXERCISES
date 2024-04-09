
function ArticleComponent (props) {
    return (
        <div className="right">
            <h2>{props.main.rightTitle}</h2>
            <p>{props.main.insideText}</p>
        </div>
    )
}

export {ArticleComponent};