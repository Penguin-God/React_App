const unityStartDay = new Date("2020-4-16");
let today = new Date();

let passedTime = today.getTime() - unityStartDay.getTime();
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// github.com/funnycom/js-basic-book
