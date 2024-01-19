const imgContainerEl = document.querySelector(".img-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;


prevEl.addEventListener("click", ()=>{
    clearTimeout(timer);
    x = x + 45;
    updateGallery();

})

nextEl.addEventListener("click", ()=>{
    clearTimeout(timer);
    x = x - 45;
    updateGallery();
    

})

updateGallery();



function updateGallery(){
    imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

    timer = setTimeout(()=>{
        x = x - 45;
        updateGallery();
    },3000);
}