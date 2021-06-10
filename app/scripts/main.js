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

const select = (elm, block = document) => {
    return block.querySelector(elm)
}

const selectAll = (elm, block = document) => {
    return block.querySelectorAll(elm)
}

// header
const menuToggle = select(".header-toggle");
const menuHeader = select(".header-menu")
const navbarHeader = select(".header-navbar")
const scrollNavbarClass = "header-scroll"
const expandClass = "is-expand"

window.addEventListener("scroll", () => {
    if (scrollY > navbarHeader.clientHeight / 5) {
        navbarHeader.classList.add(scrollNavbarClass)
    }
    else {
        navbarHeader.classList.remove(scrollNavbarClass)
    }
})

menuToggle.addEventListener("click", () => {
    menuHeader.classList.add(expandClass)
})
window.addEventListener("click", (e) => {
    if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
        menuHeader.classList.remove(expandClass)
    }
})

// slider quote
const btnQuoteLeft = select(".quote-arrow-left")
const btnQuoteRight = select(".quote-arrow-right")
const quoteContent = selectAll(".quote-content")
const quoteSlider = select(".quote-slider")
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

// Wedo Click
const wedoItem = selectAll('.wedo-item');
const wedoItemInner = select('.wedo-item-inner');
const wedoItemContent = select('.wedo-item-content');
const wedoActive = 'wedo-active';

wedoItem.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle(wedoActive)
    })
})

