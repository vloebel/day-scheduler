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

  // var taskArr = toDoItems; 


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
  for (i = 0; i < scheduleList.length; i++) {
    // Use the time as an id to get the schedule hour
    var nextID = parseInt(scheduleList[i].time);
    //  skip this i if input not valid
    if (nextID < startHr || nextID > endHr) {
      // console.log(`invalid time ${taskList[i].time}`);
      continue;
    } else if (scheduleList[i].task == null ||
      scheduleList[i].task == undefined ||
      scheduleList[i].task.length == 0) {
      // console.log(`empty task at time:  ${taskList[i].time}`);
    } else {
      var nextEl = $(`#${nextID}`);
      nextEl.text(scheduleList[i].task);
    }
  }
}











///////////////////////////////////
//////// SAVE BUTTON CLICK
///////////////////////////////////
$(".time-block").on("click", ".saveBtn", function () {
  var newItem = {}
  newItem.task = $(this).siblings(".description")
    .val();
  newItem.time = $(this).siblings(".description")
    .attr("id");  
  console.log(`I need to save ${newItem.task} at ${newItem.time}`);
  // if this time block already had a description in
  // scheduleList, replace the task. otherwise add it to list
  for (var i = 0; i <= scheduleList.length; i++) {
    console.log(`${i} <= ${scheduleList.length}`);
    if (i == scheduleList.length) {
      // scheduleList.push(newItem); TBDthis is wrong but why?
      scheduleList[i].task = newItem.task;
      scheduleList[i].time = newItem.time;

      console.log("added " + scheduleList[i] + "at pos " +[i]);
    }
    // else if (scheduleList[i].time == i) {
    //   console.log("got $time of " + i);
    //   scheduleList[i].task = newText;
    //   console.log("inserted " + scheduleList[i] + "at pos " +[i]);
    // }
  }
  console.log("after for loop schedule list is " + scheduleList);
  
});


/////////////////////////////////////////////////////////
//////// TEXTAREA CLICK
$(".time-block").on("click" ,".description", function () {
  var taskTxt = $(this)
    .text()
    .trim(); 
  // debug
    var taskTime = this.id;  
    console.log(`I need to do ${taskTxt} at ${taskTime}`);
});
/////////////////////////////////////////////////////////////

let scheduleList = toDoItems;
console.log ("length of let scheduleList" + scheduleList.length)
// scheduleList = JSON.parse(localStorage.getItem('toDoItems')) || [];
updateSchedule();