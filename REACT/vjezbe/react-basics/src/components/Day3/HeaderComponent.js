function HeaderComponent(props) {
    return(
        <div className="header">
            <div className="logo">Blog</div>
            <div className="navBar">
                <ul className="navList">
                    <li className="navListItem"><a href="#">{props.header.link1}</a></li>
                    <li className="navListItem"><a href="#">{props.header.link2}</a></li>
                    <li className="navListItem"><a href="#">{props.header.link3}</a></li>
                    <li className="navListItem"><a href="#">{props.header.link4}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;

