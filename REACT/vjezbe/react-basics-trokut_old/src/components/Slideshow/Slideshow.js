/** Here you can write the code for your slideshow component
 *  you can use the images placed in the slideshowData file
 */
<<<<<<< HEAD
import { useEffect, useState } from "react";
import "./Slideshow.scss";

function SlideShowComponent (props) {
    let slidesLength = props.data.map(a => a.name);
    console.log(slidesLength);
    const [currentPage, setCurrentPage] = useState(0);
    
    function InitDots() {
        let activeClass = "bi bi-circle-fill dots active" 
        let dotClass = "bi bi-circle-fill dots";

        useEffect(() => {
            let dotsList = Array.from(document.getElementsByClassName("dots"));
            console.log(dotsList, "test")
            dotsList.map((element) => {
                if (element.id == currentPage) {
                    console.log("true " + element.id);
                    element.className = activeClass;
                } else {
                    console.log("false");
                    element.className = dotClass;
                }
            })
        }, [currentPage]);

        return(
            props.data.map((element, index) => <i className={dotClass} id={index} onClick={() => setCurrentPage(index)}></i> )
        )
    }

    function handleClick(dir) {
        if (dir == "left") {
            if (currentPage === 0) {
                setCurrentPage(props.data.length - 1);
            } else {
                setCurrentPage(currentPage - 1);
            }    
        } else if (dir == "right") {
            if (currentPage + 1 === props.data.length) {
                setCurrentPage(0);
            } else {
                setCurrentPage(currentPage + 1);
            }
        }
    }

    return(
        <div className="main-container">
            <div className="slideshow-container">
                <div className="slideshow-elements">
                    <div className="element-numbering">
                        <p>{currentPage+1}/{slidesLength.length}</p>
                    </div>
                    <div className="element-arrows">
                        <div className="left" onClick={() => handleClick("left")}>
                            <i className="bi bi-chevron-left"></i>
                        </div>
                        <div className="right" onClick={() => handleClick("right")}>
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>
                    <div className="element-caption">
                        <p>{props.data[currentPage].alt}</p>
                    </div>
                </div>
                <div className="slideshow-image">
                    <img src={props.data[currentPage].url}></img>
                </div>
            </div>
            <div className="slideshow-dots">
                <InitDots/>
            </div>
        </div>
    )
}

export {SlideShowComponent};
=======


function Slideshow (){
  return(
    <>
      <h1>Slideshow</h1>
    </>
  )
}

export { Slideshow }
>>>>>>> adfa957349fa4c70e969035e6fe2bc3a7a53512c
