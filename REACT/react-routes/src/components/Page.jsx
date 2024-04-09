
const Page = (props) => {
    const pageTitle = props.title || "Default page Title";  
    return(
        <h1>{pageTitle}</h1>
    )
}

export {Page};