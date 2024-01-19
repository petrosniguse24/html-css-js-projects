const searchBarContainerElement = document.querySelector(".search-bar-container");
const searchIconEl = document.querySelector(".search-icon");
const inputEl = document.querySelector(".input");




searchIconEl.addEventListener("click", ()=>{

        
        searchBarContainerElement.classList.toggle("active");
  
})