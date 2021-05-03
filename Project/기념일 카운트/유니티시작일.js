// github.com/funnycom/js-basic-book

const unityStartDay = new Date("2020-4-16");
let today = new Date();

const unity_StartTime = unityStartDay.getTime();
let passedTime = today.getTime() - unity_StartTime;
let passedDay = Math.ceil(passedTime / (1000 * 60 * 60 * 24));
document.querySelector("#accent").innerHTML = passedDay + "일";

function GetFutureDay(passDay){
    let futureTime = unityStartDay.getTime() + passDay * (1000 * 60 * 60 * 24);
    const futureDate = new Date(futureTime);
    
    const futureYeer = futureDate.getFullYear();
    const futureMonth = futureDate.getMonth();
    const futureDay = futureDate.getDate();
    let dayId = "#date" + passDay;
    document.querySelector(dayId).innerHTML = futureYeer + "년 " +  futureMonth + "월 " + futureDay + "일";    
}

GetFutureDay(500);
GetFutureDay(1000);
GetFutureDay(2000);

