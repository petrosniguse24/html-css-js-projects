 const inputEl = document.getElementById("input");
 const errorEl = document.getElementById("error");
 const resultEl = document.getElementById("kg");


 let errorTime;
 let resultTime;

 function updateResult() {


    if (inputEl.value <= 0 || isNaN(inputEl.value) ) {

        errorEl.innerText = "Please enter a valid number."
        
    

    clearTimeout(errorTime);

   errorTime =  setTimeout(()=>{
        errorEl.innerText = "";
        inputEl.value = "";
    },2000)
    
 } else{
    result = (inputEl.value / 2.2).toFixed(2);
    resultEl.innerText = result;

    clearTimeout(resultTime);
   resultTime =  setTimeout(()=>{
        resultEl.innerText = "";
        inputEl.value = "";

    },5000);

 }
}


 inputEl.addEventListener("change", updateResult);