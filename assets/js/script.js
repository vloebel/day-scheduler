//
//  https://github.com/vloebel/day-scheduler/tree/develop
//

// Display current day at the top of the calendar
let cDay = moment().format("dddd MMMM-DD-YYYY")
$("#currentDay").text(cDay);

//  business day 9-5
const startHr = 9;
const endHr = 17;


//  Initialize Calendar
//  I did not intend to hard code this but I cannot 
//  figure out how to push into this array and 
//  my askBCS helper couldn't figure out how either

var scheduleList = [
  {
    time: '9:00',
    task: 'Stare at javaScript challenge'
  },
  {
    time: '10:00',
    task: 'Finish javaScript challenge'
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
    task: 'rejoice over js challenge'
  }];



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



///////////////////////////////////////
// FUNCTION updateSchedule
// Rewrite the display 
// this was designed to handle a scheduleList
// with the hours in any sequence, but
// the spec changed, so it's a little more
// complicated than it needs to be
//////////////////////////////////////

function updateSchedule() {
  // clear all textblocks
  $("textarea").empty();
  // check the time and formatting]
  styleSchedule(startHr, endHr);
  // append the text items
  for (i = startHr; i <= endHr; i++) {
    indx = i - startHr;
    var nextEl = $(`#${i}`);
      nextEl.text(scheduleList[indx].task);
    }
  }


///////////////////////////////////
// EVENT CLICK saveBtn
// update scheduleList with the new text
// save to local storage
// refresh the display
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


////////////////////////////////////////
// EVENT Textarea
// update textarea in memory
//////////////////////////////////////
$(".time-block").on("click" ,".description", function () {
  var taskTxt = $(this)
    .text()
    .trim(); 
  // debug
    var taskTime = this.id;  
    console.log(`I need to do ${taskTxt} at ${taskTime}`);
});
//////////////////////////////////////////
//  FUNCTION saveScheduleList ()
//  Saves ScheduleList to local storage
/////////////////////////////////////////

function saveScheduleList (){
  for (i = startHr; i <= endHr; i++) {
    time = i.toString();
    indx = i - startHr;
    localStorage.setItem(time, scheduleList[indx].task);
        
    }
  console.log("List Saved");
}

//////////////////////////////////////////
//  FUNCTION loadScheduleList ()
//  Load ScheduleList from local storage
/////////////////////////////////////////

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