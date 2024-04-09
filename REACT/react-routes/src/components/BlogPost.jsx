import { Link, useParams, useSearchParams } from "react-router-dom";
import { articleList } from "../pages/articleList";

const defaultArticle = {
    title: "No such title",
    content: "Return to sender"
}


const BlogPost = (props) => {
    const URLParams = useParams();
    const [searchParams] = useSearchParams();
    const objectParams = Object.fromEntries([...searchParams]);
    console.log(searchParams);
    console.log(searchParams.get("campaign"));
    console.log("searchParams object: ", objectParams);
    /* console.log(articleList);
    console.log(URLParams, "URLParams");
    console.log("ID from URL: ", URLParams.id); */
    const matchedArticles = articleList.filter(item => {
        return URLParams.id.toString() === item.id.toString()
    });
    /* console.log("article found: ", matchedArticles); */
    const article = matchedArticles[0] === undefined ? defaultArticle : matchedArticles[0];
    return(
        <div className="article-wrapper">
            <Link to={"/blog"}>
            <button> ← Back to Article List</button>
            </Link>
            <h2>{article.title}</h2>
            <div>{article.content}</div>
        </div>
    )
} 

export {BlogPost};