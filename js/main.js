
let now = dayjs();

$("window").ready(function() {

    $("#currentDay").text(now.format("dddd, MMMM D")+ "th");

    


});