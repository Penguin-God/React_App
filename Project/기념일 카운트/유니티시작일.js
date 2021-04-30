// github.com/funnycom/js-basic-book

const unityStartDay = new Date("2020-4-16");
let today = new Date();

let passedTime = today.getTime() - unityStartDay.getTime();
let passedDay = Math.ceil(passedTime / (1000 * 60 * 60 * 24));

