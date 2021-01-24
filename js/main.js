
let now = dayjs();
let currentTime = now.format("H");
const $9 = $("#nine");
const $10 = $("#ten");
const $11 = $("#eleven");
const $12 = $("#twelve");
const $13 = $("#thirteen");
const $14 = $("#fourteen");
const $15 = $("#fifteen");
const $16 = $("#sixteen");
const $17 = $("#seventeen");
const timeArr = [$9, $10, $11, $12, $13, $14, $15, $16, $17];
const $saveEl = $(".save");

$("window").ready(function () {

    $("#currentDay").text(now.format("dddd, MMMM D") + "th");

    for (let i = 0; i < timeArr.length; i++) {
        if (parseInt(currentTime) > i + 9) {
            timeArr[i].addClass('past')
        } else if (parseInt(currentTime) == i + 9) {
            timeArr[i].addClass('present')
        } else {
            timeArr[i].addClass('future')
        }
    }


});