const starEls = document.querySelectorAll(".fa-star");
const emojiEls = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "yellow", "lightblue", "lightgreen", "green"];


updateRatings(0);
function updateRatings(index){
starEls.forEach((starEl, id)=>{
    if (id < index + 1) {
        starEl.classList.add("active");
        
    } else {
        starEl.classList.remove("active");  
    }

emojiEls.forEach((emojiEl)=>{
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
})

})

}




starEls.forEach((starEl, index)=>{

    starEl.addEventListener("click", ()=>{
        updateRatings(index);
    })
  

})