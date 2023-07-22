//display date and time ----------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";

// const name="lokesh kumar meena";
// const currDate = new Date().getDate();
// const currMonth = new Date().getMonth();
// const curryear= new Date().getFullYear();

// const currTime = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1> hello ,my name is {name}</h1>
//     <p> Current Date is = {currDate}/{currMonth}/{curryear}</p>
//     <p> current time is = {currTime}</p>
//   </>
  
  
//   ,document.getElementById("root")
// );



//-------------------------------------------------------------------------------
// //gallery
// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css';

// const name="vinod";
// const img1="https://picsum.photos/300/300"
// const img2="https://picsum.photos/400/300"
// const img3="https://picsum.photos/450/300"

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true" className="heading">my name is {name}</h1>
//     <img src={img1} alt="random image"/>
//     <img src={img2} alt="random image"/>
//     <img src={img3} alt="random image"/>
//   </>,document.getElementById("root")
// );

// project -2   ------------------------------------------------------------
// // greeting website for welcome user     
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

 const time=new Date().getHours();

let Msg=" ";
const cssStyle={};

// if(time=>1 && time<12){
//   Msg='good morning';
if(time>=1 && time<12){
  Msg='good morning';
  cssStyle.color="skyblue";
}else if(time>=12 && time<20){
  Msg='good evening'
  cssStyle.color="orange";
}
else{
  Msg="good night";
  cssStyle.color="black";
  
}

ReactDOM.render(
  <>
  <div className="main">
    <h1 className="text">hello sir ,<span style={cssStyle}>{ Msg}</span></h1>
  </div>

  </>,document.getElementById("root")
)