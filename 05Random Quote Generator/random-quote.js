const btnEl = document.getElementById("btn");
const  quoteEl = document.getElementById("quote");
const  authorEl = document.getElementById("author");


async function fetchQuote()
{

try {
   
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating...";
    btnEl.innerText = "Loading..."
const apiURL = "https://api.quotable.io/random";
const response = await fetch(apiURL);
const data = await response.json();


quoteEl.innerText = data.content;
authorEl.innerText = "~ " + data.author; 
btnEl.innerText= "Get A quote";
} catch (error) {
    quoteEl.innerText = "Error occured, try again later.";
authorEl.innerText = "Try again later.";
}

}



btnEl.addEventListener("click", ()=>{
    fetchQuote();
})

fetchQuote();