
let now = dayjs();

console.log(now)

$("window").ready(function() {
$("#currentDay").text(now.format("dddd, MMMM D"));
});