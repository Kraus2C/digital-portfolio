// Handles the "fade-in" when page first loads
document.addEventListener('DOMContentLoaded', function(): void{
    // Adds the "loaded" class to the <body> when executed
    document.body.classList.add('loaded');
});

// Handles the "fade-in" when page is restored from bfcache
window.addEventListener('pageshow', function(event: PageTransitionEvent): void {
    // Returns true if page was restored from bfcache
    if (event.persisted) {
        document.body.style.transition = 'none';
        document.body.classList.add('loaded');
        // Wait for a brief moment before allowing transitions again
        setTimeout(() => {
            document.body.style.transition = '';
        });
    }
});

// Handles the "fade-out" when transitioning between pages
document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="projects"]').forEach((link: Element) => {
    // Listens for the "click" event we call "e"
    link.addEventListener('click', function(e: Event): void {
        // Prevent default event behavior
        e.preventDefault();
        // TARGET = URL of clicked link
        const TARGET = (this as HTMLAnchorElement).getAttribute('href')
        document.body.classList.remove('loaded');
        setTimeout(function(): void {
            window.location.href = TARGET as string;
        }, 300); // 300ms delay to allow for animation
    })
});