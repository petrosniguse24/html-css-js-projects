const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const conditionEl = document.getElementById("condition");



function calculateBMI(){
    const heightValue = heightEl.value;
    const weightValue = weightEl.value;
    

    const BMI = weightValue/Math.pow((heightValue/100),2)
    resultEl.value = BMI;

    if (BMI < 18.5) {
        conditionEl.innerText = "Under Weight.";
        
    } else if (BMI >= 18.5 && BMI < 24.9){
        
        conditionEl.innerText = "Normal Weight.";
    }else if (BMI >= 25 && BMI < 29.9){
        conditionEl.innerText = "Over Weight.";
    }
 else{
    conditionEl.innerText = "Obesity";
 }
}

btnEl.addEventListener("click", calculateBMI)