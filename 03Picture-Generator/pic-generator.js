const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.getElementById("anime-img");
const annimeNameEl = document.getElementById("anime-name");




async function getAnime(){

try {
    animeImgEl.src = "spinning.svg"; 
    setTimeout(()=>{
        const num = Math.floor(Math.random()*200);
    const url = `https://picsum.photos/id/${num}/200/300`;

    animeImgEl.src = url;
    },1000);

     
} catch (error) {
    animeContainerEl.innerHTML=`<h3>Something went wrong, try again later.<h3>`;
    
}



}


btnEl.addEventListener("click", getAnime);
