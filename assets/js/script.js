// One-day task schedule
// Vicky Loebel - UA Code Bootcamp module 5
/////////////////////////////////////////////
// PSEUDOCODE
// -Load any pre-existing tasks from local storage
// -Get the current real world time and use it to
//   style the tasks "past" "present" or "future"
// -display the tasks in the schedule
// - On save button click
// -- Get the task from the same row in
//      the calendar
// -- Save all tasks to local storage
// -- Update the style and tasks on the display
/////////////////////////////////////////////

// Display current day at the top of the schedule
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);

// set the hours of the business day
const startHr = 9;
const endHr = 17;

//  Initialize Schedule
//  I did not intend to hard code this but I cannot 
//  figure out how to push into this array and 
//  my askBCS helper couldn't figure out how either
//  corresponds to the hours in the HTML

var scheduleList = [
  {
    time: '9:00',
    task: ''
  },
  {
    time: '10:00',
    task: ''
  },
  {
    time: '11:00',
    task: ''
  },
  {
    time: '12:00',
    task: ''
  },
  {
    time: '13:00',
    task: ''
  },
  {
    time: '14:00',
    task: ''
  },
  {
    time: '15:00',
    task: ''
  },
  {
    time: '16:00',
    task: ''
  },
  {
    time: '17:00',
    task: ''
  }];

// ------------------------------------
// FUNCTION styleSchedule (startHr, endHr)
// for each hour on the schedule
// - select the task textarea
// - test its id against the current time
// - style it with css classes: past present future
// this should run after every "save" to local
// storage in case the current hour has changed
// ------------------------------------
function styleSchedule(startHr, endHr) {
  var currentHour = moment();
  for (i = startHr; i <= endHr; i++) {
    hourToCheck = `${i}:00`;
    // make an id from the for loop index
    // and select the next textarea
    nextID = (`${i}`);
    nextEl = $("#" + nextID);
    // i represents the "hour" we are testing     
    var testHour = moment().set('hour', i);
    // Remove any previous time class
    // and assign the new one.
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

// ------------------------------------
// FUNCTION updateSchedule
// Rewrite the textareas 
// on the schedule. 
// Runs after every save
// ------------------------------------
function updateSchedule() {
  // clear all textblocks
  $("textarea").empty();
  // check the time and formatting]
  styleSchedule(startHr, endHr);
  // insert the text items
  // i is the id of the textarea associated
  // with each hour on the schedule
  for (i = startHr; i <= endHr; i++) {
    indx = i - startHr;
    var nextEl = $(`#${i}`);
      nextEl.text(scheduleList[indx].task);
    }
  }

///////////////////////////////////
// EVENT click saveBtn
// update scheduleList with the new text
// -call function to save to local storage
// -call function to update display
///////////////////////////////////
$(".time-block").on("click", ".saveBtn", function () {
  var newToDo = $(this).siblings(".description")
    .val();
  var newTime = $(this).siblings(".description")
    .attr("id");  
  var key = parseInt(newTime) - startHr;
  scheduleList[key].task = newToDo;
  scheduleList[key].time = newTime;
  //debug:
  // console.log(`Saved ${scheduleList[key].task} at ${scheduleList[key].time} with index[${key}]`);
  saveScheduleList()
  updateSchedule();
});

// ------------------------------------
// EVENT click Textarea DEBUG ONLY
// no action is required on textarea edits  
// the new text sits in memory until user
// clicks save button
// ------------------------------------
// $(".time-block").on("click" ,".description", function () {
//   var taskTxt = $(this)
//     .text()
//     .trim(); 
//     var taskTime = this.id;  
//     console.log(`I need to do ${taskTxt} at ${taskTime}`);
// });
// ------------------------------------


// ------------------------------------
//  FUNCTION saveScheduleList ()
//  Saves ScheduleList to local storage
// ------------------------------------
function saveScheduleList (){
  for (i = startHr; i <= endHr; i++) {
    time = i.toString();
    indx = i - startHr;
    localStorage.setItem(time, scheduleList[indx].task);
        
    }
  console.log("List Saved");
}

// ------------------------------------
//  FUNCTION loadScheduleList ()
//  Load ScheduleList from local storage
// ------------------------------------
function loadScheduleList (){
  for (i = startHr; i <= endHr; i++) {
    time = i.toString();
    indx = i - startHr;
    console.log(`time = ${time} which is a ${typeof (time)}`);
    // scheduleList[indx].task = JSON.parse(localStorage.getItem(time));
    scheduleList[indx].task = localStorage.getItem(time);

    if (!scheduleList[indx].task) {
      scheduleList[indx].time = time;
      scheduleList[indx].task = 'Hi, Mom';
    }
    console.log(`I need to do ${scheduleList[indx].task} at ${scheduleList[indx].time}`);
  }
}

loadScheduleList();
updateSchedule();