import { Link, Outlet, useParams } from "react-router-dom";
import { articleList } from "./articleList";
import "./Blog.css";


function LoadBlogs() {
  return(
    articleList.map(item => {
      return(
        <Link key={item.id} to={"/blog/" + item.id + (item.utm ? item.utm : "")}>
          <li key={item.id}>{item.title}</li>
        </Link> 
      )
      
    })
  )
}


function Blog () {

  const URLParams = useParams()
  let showArticleList = false;
  
  /* console.log("URL PARAMS", URLParams); */
  if(JSON.stringify(URLParams) === "{}"){
    showArticleList = true;
  }

  return (
    <div>
      <h1>This is a Blog</h1>
      {showArticleList && (
        <ul className="article-list">
        <LoadBlogs/>
      </ul>
      )}
      <div className="blog-posts-wrapper">
        <Outlet/>
      </div>
    </div>
  )
}

export { Blog };
