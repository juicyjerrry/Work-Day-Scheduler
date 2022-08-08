var currentDate = moment().subtract(10, 'days').calendar();
var timeBlock = document.getElementsByClassName('time-block');

var eventInput9 = document.querySelector("#eventInput9");
var eventInput10 = document.querySelector("#eventInput10");
var eventInput11 = document.querySelector("#eventInput11");
var eventInput12 = document.querySelector("#eventInput12");
var eventInput13 = document.querySelector("#eventInput13");
var eventInput14 = document.querySelector("#eventInput14");
var eventInput15 = document.querySelector("#eventInput15");
var eventInput16 = document.querySelector("#eventInput16");
var eventInput17 = document.querySelector("#eventInput17");

var saveBtn9 = document.querySelector("#saveBtn9");
var saveBtn10 = document.querySelector("#saveBtn10");
var saveBtn11 = document.querySelector("#saveBtn11");
var saveBtn12 = document.querySelector("#saveBtn12");
var saveBtn13 = document.querySelector("#saveBtn13");
var saveBtn14 = document.querySelector("#saveBtn14");
var saveBtn15 = document.querySelector("#saveBtn15");
var saveBtn16 = document.querySelector("#saveBtn16");
var saveBtn17 = document.querySelector("#saveBtn17");


// "#currentDay".textcontent = currentDate

var today = moment()
$("#currentDay").text(today.format("dddd, MMM Do, h:mm:ss a"));



//💾 function for save to local storage
function saveTimeBlocks() {
    localStorage.setItem("9am", eventInput9.value);
    localStorage.setItem("10am", eventInput10.value);
    localStorage.setItem("11am", eventInput11.value);
    localStorage.setItem("12am", eventInput12.value);
    localStorage.setItem("1pm", eventInput13.value);
    localStorage.setItem("2pm", eventInput14.value);
    localStorage.setItem("3pm", eventInput15.value);
    localStorage.setItem("4pm", eventInput16.value);
    localStorage.setItem("5pm", eventInput17.value);

}
//💾 enacting save to local storage
saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();
    saveTimeBlocks()
});

//😎 insert local storage events
function populateEvents() {
    
}
populateEvents()