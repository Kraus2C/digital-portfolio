// Handles the "fade-in" when page first loads

// Applies style rules when page has loaded

document.addEventListener('DOMContentLoaded', function(): void{
    // Adds the "loaded" class to the <body> when executed
    document.body.classList.add('loaded');
});

// Handles the "fade-out" when transitioning between pages

// Finds all <a> tags whose attribute starts with the given name
// ensuring only the specified tags receive the effect

// .forEach() loops through every element in query and refers to
// it as "link"

document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="projects"], a[href^="contact"]').forEach((link: Element) => {
    // Function adds an event listener which runs any time the link
    // is clicked.

    // "e" is simply just an event object called e
    link.addEventListener('click', function(e: Event): void {
        // Prevent default event value (opening the page when
        // clicking links)
        e.preventDefault();

        // "this" refers to the link that was clicked
        // Gets value of href attribute (the link itself), so the URL
        // is stored in the TARGET variable
        const TARGET = (this as HTMLAnchorElement).getAttribute('href')
        document.body.classList.remove('loaded');
        setTimeout(function(): void {
            window.location.href = TARGET as string;
        }, 300); // 300ms delay to allow for animation
    })
});