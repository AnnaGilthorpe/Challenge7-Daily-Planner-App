// let currentDay = document.querySelector('#currentDay');
// let today = moment();
// console.log(m.toString());
// console.log("hello world");

var today = moment();
let dayWeek = today.format("[Happy] dddd[!]")
$("#currentDay").text(dayWeek);
console.log(dayWeek);

let currentHour = today.format("H")
console.log(currentHour)

// let nine = document.querySelector("#9")

// //9am
function nineam () {
if (currentHour > 9) {
$("textarea").addClass("past")
}
if (currentHour < 9) {
    $("textarea").addClass("future")
}
if (currentHour === 9) {
    $("textarea").addClass("present")
}
localStorage.setItem("9am", "something")
$("textarea").text(localStorage.getItem("9am"))
}

$("button").on("click", function(event){
    $("saveBtn").setClass("fas fa-sync fa-spin")
    console.log($(event.target).siblings("textarea").val());
    console.log($(event.target).attr("data-time"));

})
//10am



//11am




//12pm



//1pm


//2pm



//3pm


//4pm


//5pm