const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];
const url = "https://emoji-api.com/emojis?access_key=a3b1aa184e2a88fe8b2a35494b6a9861d453b8e9"; 


async function getEmoji(){

    try {
        
        const response = await fetch(url);
        const data = await response.json();
      
        for (let i = 0; i < 1500; i++) {
           emoji.push({
        emojiImg: data[i].character,
        emojiName: data[i].unicodeName
    
           })

        }

        const randomNumber = Math.floor(Math.random() * emoji.length ) ;
        btnEl.innerText = emoji[randomNumber].emojiImg;
        emojiNameEl.innerText = emoji[randomNumber].emojiName;
       

    } catch (error) {
        
    }


}


btnEl.addEventListener("click", getEmoji);
