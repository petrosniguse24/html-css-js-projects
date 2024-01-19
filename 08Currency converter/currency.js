const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const inputFirstEl = document.getElementById("input-first");
const inputSecondEl = document.getElementById("input-second");
const exchangerateEl = document.getElementById("exchange-rate");




updateRate();

function updateRate(){
fetch(`https://v6.exchangerate-api.com/v6/127798757718a346d79ac1b7/latest/${currencyFirstEl.value}`)
.then((res)=>res.json())
.then((data)=>{
    const rate = data.conversion_rates[currencySecondEl.value];
exchangerateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
const multplyValue = (inputFirstEl.value * rate).toFixed(3);
inputSecondEl.value = `${multplyValue}`;
})

}


currencyFirstEl.addEventListener("change",updateRate);
currencySecondEl.addEventListener("change", updateRate);
inputFirstEl.addEventListener("input", updateRate);
