// Scroll links have 'js-scroll-link' class added, 
// or can be selected with querySelectorAll(a[href^="#"])
// Add event listeners to each scroll link
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        handleClickLink(elem.getAttribute('href'), event);
    });
});

function handleClickLink(element, event) {
    scrollToElement(element);
    // prevent automatic scrolling on clicking link
    event.preventDefault();
}

// Pass in a selector element like '#about'
function scrollToElement(element) {
    const headerHeight = document.querySelector('.fixed-top').offsetHeight; // 64
    const scrollTo = document.querySelector(element).offsetTop;
    // if scrollTo position is negative, scroll to 0 instead
    window.scrollTo(0, (scrollTo - headerHeight) > 0 ? scrollTo - headerHeight : 0);
}
