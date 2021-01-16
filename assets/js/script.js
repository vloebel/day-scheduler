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
    time: '10:00',
    task: 'Finish javaScript challenge'
  },
  {
    time: '9:00',
    task: 'Stare at javaScript challenge'
  },
  {
    time: '17:00',
    task: ''
  },
  {
    time: '2:00',
    task: 'out of range'
  },
  {
    time: '15:00',
    task: 'rejoice over js challenge'
  }]

//Get the taskList of toDoItems

// var taskList = JSON.parse(localStorage.getItem('toDoItems')) || [];
var taskList = toDoItems; //test pointer
///////////////////////////////////////
// FUNCTION UPDATESCHEDULE
// Re-initialize the
// tasks in the schedule to make sure it's
// all current and correct
//////////////////////////////////////
function updateSchedule() {
  // clear all textblocks
  $("textarea").empty();
  // check the time and formatting]
  styleSchedule(startHr, endHr);
  // append the text items
  for (i = 0; i < taskList.length; i++) {
    // Use the time as an id to get the schedule hour
    var nextID = parseInt(taskList[i].time);
    //  skip this i if input not valid
    if (nextID < startHr || nextID > endHr) {
      // console.log(`invalid time ${taskList[i].time}`);
      continue;
    } else if (taskList[i].task == null ||  
        taskList[i].task == undefined || 
        taskList[i].task.length == 0) {
        // console.log(`empty task at time:  ${taskList[i].time}`);
    } else {
    var nextEl = $(`#${nextID}`);
    console.log(nextEl);
    nextEl.text(taskList[i].task);
    }
  }
}







  
  // go through the list and post the itemms
  // $$$$$$$$ PARSING TIME IS CONFUSING ME
  // for (var i = 0; i < list.length; i++) {
  //   var tTime = toDoList[i].time;
  //   var tTask = toDoList[i].task;
  //   // CONVERT tTime to an ID - as in 
  //   // 3:00 becomes ID="03:00"
  //   // Locate the hour with that ID
  //   // set the next-sibling text field = task


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

updateSchedule();