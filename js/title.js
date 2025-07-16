var ORIGINALTITLE = "Kraus2C";
var AWAYTITLE = "Hey, come back! 😢";
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = AWAYTITLE;
    }
    else {
        document.title = ORIGINALTITLE;
    }
});
