"use strict";var select=function(e,t){return(1<arguments.length&&void 0!==t?t:document).querySelector(e)},selectAll=function(e,t){return(1<arguments.length&&void 0!==t?t:document).querySelectorAll(e)},menuToggle=select(".header-toggle"),menuHeader=select(".header-menu"),navbarHeader=select(".header-navbar"),scrollNavbarClass="header-scroll",expandClass="is-expand";window.addEventListener("scroll",function(){scrollY>navbarHeader.clientHeight/5?navbarHeader.classList.add(scrollNavbarClass):navbarHeader.classList.remove(scrollNavbarClass)}),menuToggle.addEventListener("click",function(){menuHeader.classList.add(expandClass)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)});var btnQuoteLeft=select(".quote-arrow-left"),btnQuoteRight=select(".quote-arrow-right"),quoteContent=selectAll(".quote-content"),quoteSlider=select(".quote-slider"),counter=1;quoteSlider.style.transform="translateX("+20*-counter+"%)",btnQuoteRight.addEventListener("click",function(){quoteContent.length-1<=counter||(counter++,quoteSlider.style.transform="translateX("+20*-counter+"%)",quoteSlider.style.transition="transform 0.5s cubic-bezier(.55,.11,.49,.95)")}),btnQuoteLeft.addEventListener("click",function(){counter<=0||(--counter,quoteSlider.style.transform="translateX("+20*-counter+"%)",quoteSlider.style.transition="transform 0.5s cubic-bezier(.55,.11,.49,.95)")}),quoteSlider.addEventListener("transitionend",function(){"lastClone"==quoteContent[counter].id&&(counter=quoteContent.length-2,quoteSlider.style.transform="translateX("+20*-counter+"%)",quoteSlider.style.transition="none"),"firstClone"==quoteContent[counter].id&&(counter=quoteContent.length-4,quoteSlider.style.transform="translateX("+20*-counter+"%)",quoteSlider.style.transition="none")});var wedoItem=selectAll(".wedo-item"),wedoItemInner=select(".wedo-item-inner"),wedoItemContent=select(".wedo-item-content"),wedoActive="wedo-active";wedoItem.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle(wedoActive)})});