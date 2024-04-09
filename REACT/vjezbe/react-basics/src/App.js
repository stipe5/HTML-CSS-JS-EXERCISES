import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyGoal from './components/Day2/MyGoalComponent';
import ClassComponentGreeting from './components/Day2/ClassComponentGreeting';
import FunctionComponentGreeting from './components/Day2/FunctionComponentGreeting';
import ConstantFunctionGreeting from './components/Day2/ConstantFunctionGreeting';
import { Day3Component } from './components/Day3/Day3Component';
import { PropComponent } from './components/Day3/PropComponent';
import { Day4Component } from './components/Day4/Day4Component';
import { SlideShowComponent } from './components/Slideshow/Slideshow';
import { slidesList } from './components/Slideshow/slideshowData';


  // FUNCTION APP
function App() {
  // START BUSINESS LOGIC

  const stringElement = "Hello String Element";
  const jsxElement = <h2>Hello JSX Syntax</h2>;
  const jsxVariableEl = <h2>JSX {stringElement}</h2>

  //JSX & FUNCTIONS

  const firstName = "Stjepan"
  const lastName = "Goreta"

  const jsxFunctionElement = <h2>Hello {fullName()}</h2>
  const jsxName = <h2>Hello {fullName2("Jasmin", "Causevic")}</h2>

  function fullName() {
    return firstName + " " + lastName;
  }

  function fullName2(fname, lname) {
    return fname + " " + lname;
  }

  // END OF BUSINESS LOGIC
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h2>{stringElement}</h2>
        {jsxElement}
        {jsxVariableEl}
        {jsxFunctionElement}
        {jsxName}
        <ClassComponentGreeting/>
        <FunctionComponentGreeting/>
        <ConstantFunctionGreeting/>
        <MyGoal/> */}
        {/* <PropComponent 
        itemObject ={{title: "Stjepan"}}
        title={"Title from props"}
        subtitle={"Some subtitle"}
        username={"stipe5"}
        />
        <PropComponent
        title={"This is another title"}
        subtitle={"Another subtitle"}
        username={"Stipendija"}
        />
        <Day3Component/> */}
        <Day4Component/>
        <SlideShowComponent data = {slidesList} />
      </header>
    </div>
  );
}

export default App;
