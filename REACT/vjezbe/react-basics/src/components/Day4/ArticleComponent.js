
function ArticleComponent (props) {
    
    function changePage() {
        if (props.page + 1 < Object.keys(props.articles).length) {
            props.changePage(props.page + 1);
        } else {
            alert("No more articles to show");
        }
    }
    console.log(props.page);

    return (
        <div className="right">
            <button onClick={() => changePage()}>Next Article</button>
            <h2>{props.articles[props.page].name}</h2>
            <p>{props.articles[props.page].description}</p>
        </div>
    )
}

export {ArticleComponent};