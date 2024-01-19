
const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const alertContainerEl = document.querySelector(".alert-container");
const copyIconEl = document.querySelector(".fa-copy");


const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLKMNOPQRSTUVWXYZ0123456789*-+@#";
let timeout;


btnEl.addEventListener("click", ()=>{
   createPassword();
})



function createPassword() {

    const passwordLength = 8;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
       
  const randNum = Math.floor(Math.random()*chars.length);

  password += chars.substring(randNum, randNum + 1);

        
    }

    inputEl.value = password;

 copyIconEl.addEventListener("click", ()=>{
        copyPassword();
        clearTimeout(timeout);
        alertContainerEl.classList.remove("active");

        alertContainerEl.innerText = password + " copied!";

      timeout =  setTimeout(()=>{
            alertContainerEl.classList.add("active");
        },2000)
        
      
    })
    




    
}

function copyPassword() {
    inputEl.select();//for pcs
    inputEl.setSelectionRange(0, 9999);//for mobiles

    navigator.clipboard.writeText(inputEl.value);

   
}