const counterEls = document.querySelectorAll(".counter");


counterEls.forEach((counterEl)=>{
    counterEl.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        
let currentCounter = +counterEl.innerText;
const dataCeil = counterEl.getAttribute("data-ceil");

const increment = dataCeil / 15 ;

const currntNum = Math.floor(currentCounter + increment);



if (currntNum <= dataCeil) {
    counterEl.innerText = currntNum;
   
    setTimeout(incrementCounter, 50);
} else {

    counterEl.innerText = dataCeil;
    
}





    }
})