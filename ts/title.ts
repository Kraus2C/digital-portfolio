const ORIGINAL_TITLE: string = "Kraus2C";
const HIDDEN_TITLE: string = "Hey, come back! 😢";

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = HIDDEN_TITLE;
    } else {
        document.title = ORIGINAL_TITLE;
    }
});