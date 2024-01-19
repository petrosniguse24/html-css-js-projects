const ratingEls = document.querySelectorAll(".rating");
const containerEl = document.getElementById("container");
const btnEl = document.getElementById("btn");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {

 
ratingEl.addEventListener("click", (event)=>{
    removeClass();
selectedRating = event.target.innerText || event.target.parentNode.innerText;
event.target.classList.add("active");
event.target.parentNode.classList.add("active");
})
    
});

function removeClass(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}

btnEl.addEventListener("click", ()=>{
    if(selectedRating !==""){
        containerEl.innerHTML = `
    <strong class="heading">Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong> 
        <p>We will improve our services based on your suggestion.</p>`;
    }
})