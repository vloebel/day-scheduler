//
//  https://github.com/vloebel/day-scheduler/tree/develop
//

// Display current day at the top of the calendar
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);


///TRY THIS var time = moment(timestring);




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


// /// testing a few things
// $('#save9').on('click', function () {
//   alert('I will save you.');
// })



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

// jQuery
$(document).ready( function () {
  console.log("ready");
  $("textarea").addClass("present");
  var testHourEl = $("div[data-hour='02:00']");
  var testHour = testHourEl.attr('data-hour'); 
  
  let cHour = moment().format("HH:mm");
  
  console.log(`test hour is ${testHour} type= ${typeof (testHour)}`);
  console.log(`and cHour is ${cHour} type= ${typeof (cHour)}`);
  console.log('comparing testHour.isBefore cHour')
 
  if (moment("hour", testHour).isBefore("hour", cHour)) {console.log("before!");}
  else { console.log("after!"); }

  console.log('comparing cHour.isBefore testHour')
  if (moment("hour", cHour).isBefore("hour", testHour)) {console.log("before!");}
  else { console.log("after!"); }
});


/////////// CHANGE THAT TO parsInt ///////////



//////////////////////////////////////
//  STORAGE
////////////////////////////////////
var toDoItems = [
  {
    time: '',
    task: ''
  }]

//toDolist = parsed array of toDoItems or 
// an empty array if none.

var toDoList = JSON.parse(localStorage.getItem('toDoItems')) || [];

// is toDoList an argument? From where?
function displayToDoList(toDoList) {
  // clear the html in every textblock
  $("textarea").text('kick me');
  $("textarea").empty();
  // go through the list and post the itemms
  // $$$$$$$$ PARSING TIME IS CONFUSING ME
  // for (var i = 0; i < list.length; i++) {
  //   var tTime = toDoList[i].time;
  //   var tTask = toDoList[i].task;
  //   // CONVERT tTime to an ID - as in 
  //   // 3:00 becomes ID="03:00"
  //   // Locate the hour with that ID
  //   // set the next-sibling text field = task
  }

//   function saveToDoList(toDoList) {
//     localStorage.setItem('toDoItems');
//   }
// }




////////////////////////////////////////////////////
// WAIT FOR SAVE CLICK 
//  Any time there's a click on save, save the whole list
// $('.saveBtn').on('click', function (event) {
//   event.preventDefault();
//   // $$$ Get textfield col from parent row
//   var newTask = $this.text().trim()
//   var newTime = /*hour field of */ $this.val(); 
//  converted to what ?
  // toDoItems.time.push(newTime);
  // toDoItems.task.push(newTask);
  // saveToDoList(toDoList);

  //test it

  displayToDoList(toDoList);