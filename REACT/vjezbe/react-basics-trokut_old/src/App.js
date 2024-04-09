import logo from './logo.svg';
import './App.css';
import React from 'react'
import MyGoal from './components/Day2/MyGoal'
import ClassComponentGreeting from './components/Day2/ClassComponentGreetinng'
import FunctionComponentGreeting from './components/Day2/FunctionComponentGreeting'
import ConstantFunctionGreeting from './components/Day2/ConstantFunctionGreeting'
import { Day3Component } from './components/Day3/Day3Component'
import { BlogComponent } from './components/Day4/BlogComponent'
import { PropComponent } from './components/Day3/PropComponent'
import { SlideShowComponent } from './components/Slideshow/Slideshow';
import { slidesList } from './components/Slideshow/slideshowData';


// FUNCTION APP
function App() {
  // START BUSINESS LOGIC


  // END OF BUSINESS LOGIC
  return (
    <div className="App-2">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Day3Component />*/}
        {/*  here is a place for your <Slideshow /> component*/}
        {/* <BlogComponent /> */}
        <SlideShowComponent data={slidesList}/>
      </header>
    </div>
  );
}

export default App;
