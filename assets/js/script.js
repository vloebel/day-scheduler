//
//  https://github.com/vloebel/day-scheduler/tree/develop
//

// Display current day at the top of the calendar
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);

//  business day 9-5
const startHr = 9;
const endHr = 17;


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


//////////////////////////////////////////
// FUNCTION styleSchedule (startHr, endHr)
// for each hour on the schedule
// - select the task text area
// - test its ID against the current time
// - style it with css classes: past present future
  
function styleSchedule (startHr, endHr) {
  var currentHour = moment();
  for (i = startHr; i <= endHr; i++) {
    hourToCheck = `${i}:00`;
    // console.log('hourToCheck is ' + hourToCheck);
    // make an id from the for loop index
    nextID = (`${i}`)
    nextEl = $("#" + nextID);
    // i is the "hour" we are testing     
    var testHour = moment().set('hour', i);
    // Remove any existing time class
   
    $(nextEl).removeClass("past present future");

    if (moment(testHour, "hour").isBefore(currentHour, "hour")) {
      $(nextEl).addClass("past");
    } else if (moment(testHour, "hour").isAfter(currentHour, "hour")) {
      $(nextEl).addClass("future");
    } else {
      $(nextEl).addClass("present");
    }
  }
}


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

//test it ttttt
styleSchedule(startHr, endHr);
displayToDoList(toDoList);