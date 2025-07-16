const ORIGINALTITLE: string = "Kraus2C";
const AWAYTITLE: string = "Hey, come back! 😢";

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = AWAYTITLE;
    } else {
        document.title = ORIGINALTITLE;
    }
});