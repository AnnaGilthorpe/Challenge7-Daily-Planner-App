// let currentDay = document.querySelector('#currentDay');
// let today = moment();
// console.log(m.toString());
// console.log("hello world");

var today = moment();
let dayWeek = today.format("[Happy] dddd")
$("#currentDay").text(dayWeek);
console.log(dayWeek);