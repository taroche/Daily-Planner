
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
const $deleteEl = $(".delete");
const $deleteAllEl = $("#deleteAll");

$("window").ready(function () {

    $("#currentDay").text(now.format("dddd, MMMM D") + "th");

    for (let i = 0; i < timeArr.length; i++) {
        if (parseInt(currentTime) > i + 9) {
            timeArr[i].find("textarea").addClass('past').attr("disabled", "disabled")
            timeArr[i].find($saveEl).prop("disabled", true)
        } else if (parseInt(currentTime) == i + 9) {
            timeArr[i].find("textarea").addClass('present')
        } else {
            timeArr[i].find("textarea").addClass('future')
        }
    }

    $saveEl.on("click", function (e) {
        e.preventDefault()
        let value = $(this).prev().val()
        let key = $(this).prev().prev().text()
        localStorage.setItem(key, value)
    });

    $deleteEl.on("click", function (e) {
        e.preventDefault()
        $(this).prev().prev().val("")
        let key = $(this).prev().prev().prev().text()
        localStorage.removeItem(key)
    });

    for (let i = 0; i < localStorage.length; i++) {
        for (let j = 0; j < timeArr.length; j++) {
            if (localStorage.key(i) === timeArr[j].children().children().text()) {
                timeArr[j].children().children().val(localStorage.getItem(JSON.parse(j + 9) + ":00"));
            }
        }
    }

    $deleteAllEl.on("click", function (e) {
        e.preventDefault()
        for (let i = 0; i < timeArr.length; i++) {
            timeArr[i].children().children().val("")
            let key = timeArr[i].children().children().text()
            localStorage.removeItem(key)
        }
    });

});