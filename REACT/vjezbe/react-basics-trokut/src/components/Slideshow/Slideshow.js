/** Here you can write the code for your slideshow component
 *  you can use the images placed in the slideshowData file
 */
import { useEffect, useState } from 'react'
import { slidesList } from './slideshowData'
import './Slideshow.scss'


function Slideshow (props){

  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(slidesList[0]);
  const [somePropState, setSomePropState] = useState(props.someProp);

  // async function fetchContent(fetchURL){
  //   const response = await fetch(fetchURL);
  //   const result = await response.json();
  //   console.log("FETCH API Result:", result);
  // }

  useEffect(() => {
    // do something on initial component mount
    // Here you can use fetch from API
    // const fetchURL = "https://swapi.dev/api/people/1"
    // fetchContent(fetchURL);
    console.log("This shall fire only once")
    console.warn("slideList =>", slidesList)
    console.warn("currentSlide =>", currentSlide)

  }, []);

  useEffect(() => {

    console.log("SliderIndex State changed to=> ", sliderIndex);
    console.log("current slide", slidesList[sliderIndex]);
    setCurrentSlide(slidesList[sliderIndex])

    // do something on sliderIndex changes
  }, [sliderIndex]);

  useEffect(() => {
    console.log("")
    console.log("handlePrevButtonClick is clicked!!!!!!!!")
    console.log("")

  }, [somePropState]);

  function handlePrevButtonClick(){
    setSliderIndex(sliderIndex - 1);
  }
  function handleNextButtonClick(){
    setSliderIndex(sliderIndex + 1);
  }

  function handleSomePropStateChange(){
    setSomePropState("New value");
  }
// END OF BUSINESS LOGIC
  return(
      <div className={'slideshow-wrapper'}>
        <h1>Slideshow</h1>
        <div className="img-wrapper">
          <button className={'prev'} onClick={() => sliderIndex > 0 && handlePrevButtonClick()}> ← </button>
          <img src={currentSlide.url} alt={currentSlide.alt}/>
          <button className={'next'} onClick={()=> sliderIndex < slidesList.length - 1  && handleNextButtonClick()}> → </button>
        </div>
        <div className={'ticks'}>
          {slidesList.map((item, index) =>
              <span className={index === sliderIndex && 'active'} onClick={() => setSliderIndex(index)}></span>
          )}
        </div>

        {/* This prooves unchangeability of props and changeability of local state valid inside this component*/}
        <h4 onClick={()=> handleSomePropStateChange() }>{props.someProp}</h4>
        <h4 onClick={() => handleSomePropStateChange() }>{somePropState}</h4>
      </div>
  )
}

export { Slideshow }
