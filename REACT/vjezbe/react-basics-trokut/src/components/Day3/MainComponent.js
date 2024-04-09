import './MainComponent.scss'
import { SidebarComponent } from './SidebarComponent'
import { ArticleComponent } from './ArticleComponent'
import { useState } from 'react'

const buttonStyle = {
  padding: 10,
  backgroundColor: "blue",
  color: "white",
  borderRadius: 4,
  marginRight: 10,
  outline: "none",
  borderColor: "orange",
  marginBottom: 50,
  position: "absolute",
  right: 20,
  top: 20
}

function MainComponent (props) {
  // START BUSINESS LOGIC
  console.log("MainComponent props.articles", props.articles);

  let initialName;
  let initialDescription;
  let initialCount = 0;
  if(props.articles){
    initialName = props.articles[initialCount].name;
    initialDescription = props.articles[initialCount].description
  }
  const [description, setDescription] = useState(initialDescription);
  const [name, setName] = useState(initialName);
  const [count, setCount] = useState(initialCount);

  const handleButtonClick = () => {
    console.log("Clicked button for Article ticker");
    setCount(count + 1);
    console.log("state of count => ", count)
    if(count < 12){
      setName(props.articles[count].name)
      setDescription(props.articles[count].description)
    }
  }

  // END BUSINESS LOGIC

  return (
    <div className={'main-container'} >
      <SidebarComponent />
      {props.showButton && <button style={buttonStyle} onClick={
        () => handleButtonClick()
      }
      >next article</button>}
      {/*<ArticleComponent description={props.article?.description} name={props.article?.name} />*/}
      <ArticleComponent description={description} name={name} />
    </div>
  )
}

export { MainComponent }
