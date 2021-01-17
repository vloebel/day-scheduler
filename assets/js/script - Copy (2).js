//
//  https://github.com/vloebel/day-scheduler/tree/develop
//

// Display current day at the top of the calendar
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);

//  business day 9-5
const startHr = 9;
const endHr = 17;

//  Test array
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
    time: '15:00',
    task: 'rejoice over js challenge'
  }];


var taskArr = toDoItems; 

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

function styleSchedule(startHr, endHr) {
  var currentHour = moment();
  for (i = startHr; i <= endHr; i++) {
    hourToCheck = `${i}:00`;
    // console.log('hourToCheck is ' + hourToCheck);
    // make an id from the for loop index
    nextID = (`${i}`);
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


//Get the taskList of toDoItems

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
  for (i = 0; i < taskArr.length; i++) {
    // Use the time as an id to get the schedule hour
    var nextID = parseInt(taskArr[i].time);
    //  skip this i if input not valid
    if (nextID < startHr || nextID > endHr) {
      // console.log(`invalid time ${taskList[i].time}`);
      continue;
    } else if (taskArr[i].task == null ||
      taskArr[i].task == undefined ||
      taskArr[i].task.length == 0) {
      // console.log(`empty task at time:  ${taskList[i].time}`);
    } else {
      var nextEl = $(`#${nextID}`);
      nextEl.text(taskArr[i].task);
    }
  }
}







////////////////////////////////////////////////////
// WAIT FOR SAVE CLICK 
//  Any time there's a click on save, save the whole list
// $('.saveBtn').on('click', function (event) {
//   event.preventDefault();


updateSchedule();

/////////////////////////////////////////////////
//////// SAVE BUTTON CLICK
$(".time-block").on("click" ,".saveBtn", function () {
  var newText = $(this).siblings(".description")
    .val();
  var taskTime = $(this).siblings(".description")
    .attr("id");  
  console.log(`I need to save ${newText} at ${taskTime}`);
  // if this time block already had a description in
  // taskArr, replace the task. otherwise add it to taskArr
  for (var i = 0; i <= taskArr.length; i++) {
    if (i == taskArr.length) {
      // taskArr[i].time = taskTime;
      // taskArr[i].task = newText;
      taskArr[i].push(taskTime, newText);
      console.log("added " + taskArr[i] + "at pos "[i]);
    }
    else if (taskArr[i].time == i) {
      console.log("got task[arr].time of " + i);
      taskArr[i].task = newText;
      console.log(`inserted ${taskArr[i]}${"at pos "[i]}`);
    }
  }
  console.log(taskArr);
   
});


/////////////////////////////////////////////////////////
//////// TEXTAREA CLICK
$(".time-block").on("click" ,".description", function () {
  var taskTxt = $(this)
    .text()
    .trim(); 
    var taskTime = this.id;  
    console.log(`I need to do ${taskTxt} at ${taskTime}`);
});
/////////////////////////////////////////////////////////////


// var taskArr = JSON.parse(localStorage.getItem('toDoItems')) || [];
