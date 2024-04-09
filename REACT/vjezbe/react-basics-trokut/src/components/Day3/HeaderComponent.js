import './HeaderComponent.scss'
function HeaderComponent(props){
  return (
    <nav className={'header-container'}>
      <ul className={'nav-list'}>
      {props.menuItems.map((item, index) =>
        <li key={index}>{item}</li>
      )}
      </ul>
    </nav>
  )
}
export { HeaderComponent }
