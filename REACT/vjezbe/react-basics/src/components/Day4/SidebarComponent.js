
function SidebarComponent (props) {
    const sideList = props.articles.map(a => a.name);
    console.log(sideList);
    
    
    function DisplayList () {
        return(
            sideList.map((element, index) => <p onClick={() => props.changePage(index)}>{element}</p>)
        )
    }
    

    return (
        <div className="left">
            <DisplayList/>
        </div>
    )
}

export {SidebarComponent};