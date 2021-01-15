// Display current day at the top of the calendar
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);


// Load an empty HTML calendar
// Load a todo list from storage
// Assign each item to a textarea based
//    on it's time attribute
// Color each text area "past present or future"
//    based on it's relationship to current time

// When SAVE button is clicked
// update the todo list for the corresponding time
// save in local storage
// repeat to refresh screen


/// testing a few things
$('#save9').on('click', function () {
  alert('I will save you.');
})



let cTime = moment().format("HH:mm")
let cHour = moment().format("HH");

console.log(`time is ${cTime}`);
console.log(`hour is ${cHour}`);



// $(document).ready(function () {
//   console.log("ready");
//   $(".textarea").addClass("present");
// });
  
// // jQuery
// $(document).ready( function () {
//   console.log("ready");
//   $("textarea").addClass("present");
//   if (cHour < $("#03")) console.log("before three o'clock");
//   else console.log("after three o'clock");
//   $("#03").addClass("future");
// });

// $(document).ready(function () {
//   console.log("ready");
//   var myTime = $("#2oc").text();
//   console.log("myTime " + myTime);
//   if (moment(myTime).isBefore(cHour))console.log("before!");
//   else console.log("after!");
  
//////////////////////////////////////
//  STORAGE
////////////////////////////////////
// var toDoItems = [
// { tim: '',
//   tsk: '' }]
// list = todoitems array of objects or 
// an empty array if none.
var toDoList = JSON.parse(localStorage.getItem('toDoItems')) || [];
// is toDoList an argument? From where?
function getToDoList(toDoList) {
  // clear the html in every textblock
  $("textarea").text('kick me');//
  $("textarea").empty();
  // go through the list and post the itemms

}

//test it
getToDoList(toDoList);