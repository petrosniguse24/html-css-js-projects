const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");


leftEl.addEventListener("mouseenter", ()=>{
     containerEl.classList.add("activate-left");
})
leftEl.addEventListener("mouseleave", ()=>{
     containerEl.classList.remove("activate-left");
})


rightEl.addEventListener("mouseenter",()=>{
     containerEl.classList.add("activate-right");
})
rightEl.addEventListener("mouseleave", ()=>{
     containerEl.classList.remove("activate-right");
})