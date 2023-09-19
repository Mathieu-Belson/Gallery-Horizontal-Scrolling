let scrollContainer = document.querySelector(".gallery");
let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY; /* event.deltaY is the amount of pixels the user scrolled vertically */
});

nextButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900; /* because the width of the gallery is 900px an + because we want to go forward */  
    console.log('next');
});

backButton.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900; /* minus because we want to go back */
    console.log('back');
});     