const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialMediaListsEl = document.querySelector(".social-media-lists");
const socialMediaListsliEl = document.querySelectorAll(".social-media-lists li")

menuEl.addEventListener("click", ()=>{
    socialMediaListsEl.classList.toggle("active");
    menuEl.classList.toggle("rotate")
})

socialMediaListsliEl.forEach((socialMediaListsli)=>{
    socialMediaListsli.addEventListener("click", ()=>{
 menuTextEl.innerHTML = socialMediaListsli.innerHTML;
 socialMediaListsEl.classList.toggle("active");
 menuEl.classList.toggle("rotate")
    
    })
})