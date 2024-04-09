import './ArticleStyling.scss'

function ArticleComponent(props){
  // fallback content definition as default for Day3Component
  let content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam architecto autem blanditiis corporis dignissimos ducimus ea facere fugiat harum in iusto, labore mollitia officia porro quo, repellat rerum?";
  let title = "Default Title";
  if(props.description){
    content = props.description;
  }
  if(props.name){
    title = props.name
  }

  console.log("ArticleComponent name=> ", props.name);
  console.log("ArticleComponent description => ", props.description);
  return(
  <div className={'article'}>
    <h2>{title}</h2>
    <div className={'content'}>
      {content}
    </div>
  </div>
  )
}

export { ArticleComponent }
