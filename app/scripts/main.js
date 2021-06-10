// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu")
const expandClass = "is-expand"

menuToggle.addEventListener("click", () => {
    menuHeader.classList.add(expandClass)
})
window.addEventListener("click", (e) => {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
        menuHeader.classList.remove(expandClass)
    }
})

const btnQuoteLeft = document.querySelector(".quote-arrow-left")
const btnQuoteRight = document.querySelector(".quote-arrow-right")
const quoteContent = document.querySelectorAll(".quote-content")
const quoteSlider = document.querySelector(".quote-slider")
let counter = 1;
quoteSlider.style.transform = ("translateX(" + (-counter * 20) + "%)");

btnQuoteRight.addEventListener("click", () => {
    if (quoteContent.length - 1 <= counter) return;
    counter++;
    quoteSlider.style.transform = ("translateX(" + (-counter * 20) + "%)");
    quoteSlider.style.transition = "transform 0.5s cubic-bezier(.55,.11,.49,.95)";
})

btnQuoteLeft.addEventListener("click", () => {
    if (counter <= 0) return;
    --counter;
    quoteSlider.style.transform = ("translateX(" + (-counter * 20) + "%)");
    quoteSlider.style.transition = "transform 0.5s cubic-bezier(.55,.11,.49,.95)";
})

quoteSlider.addEventListener("transitionend", () => {
    if (quoteContent[counter].id == "lastClone") {
        counter = quoteContent.length - 2
        quoteSlider.style.transform = ("translateX(" + (-counter * 20) + "%)");
        quoteSlider.style.transition = "none";
    }
    if (quoteContent[counter].id == "firstClone") {
        counter = quoteContent.length - 4
        quoteSlider.style.transform = ("translateX(" + (-counter * 20) + "%)");
        quoteSlider.style.transition = "none";
    }
})
