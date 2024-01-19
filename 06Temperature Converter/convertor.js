const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeChange(event){

  
   const currentScale =  event.target.name;
   const currentValue =  +event.target.value;

    switch (currentScale) {
        case "celcius":
            fahrenheitEl.value = ((9/5 * currentValue) + 32).toFixed(2);
           kelvinEl.value = (currentValue + 273.15).toFixed(2);
            break;
        case "fahrenheit":
            celciusEl.value = (5/9 * (currentValue - 32)).toFixed(2);
            kelvinEl.value = (5/9 * (currentValue - 32) + 273.15).toFixed(2);
            
            break;
        case "kelvin":
            celciusEl.value = (currentValue - 273.15).toFixed(2);
            fahrenheitEl.value = (9/5 * ( currentValue - 273.15) + 32).toFixed(2);
            
            break;

    }
   
}



