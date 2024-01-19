const btnEl = document.getElementById("btn");
const noteappEl = document.getElementById("note-app");



getNotes().forEach((note) => {
  
        const noteEl = createNoteEl(note.id, note.content);
        noteappEl.insertBefore(noteEl, btnEl);
    
});

function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

element.addEventListener("dblclick", ()=>{
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
        deleteNote(id, element);
    }
})


element.addEventListener("input",()=>{
    updateNote(id, element.value);
})



    
   return element; 
}





function updateNote(id, content){

    const notes = getNotes();
    const target = notes.filter((note)=>note.id==id)[0];
    target.content = content;
    saveNote(notes);

}





function deleteNote(id, element){
    const notes = getNotes().filter((note)=>note.id != id);
    saveNote(notes);
    noteappEl.removeChild(element);

}




function addNote(){

const notes = getNotes();
const noteObj = {
    id: Math.floor(Math.random()*100000),
    content: ""
}

const noteEl = createNoteEl(noteObj.id, noteObj.content);
noteappEl.insertBefore( noteEl,btnEl);


notes.push(noteObj);

saveNote(notes);
}


function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
}



function getNotes() {
    const notesString = localStorage.getItem("note-app");
    if (notesString) {
        return JSON.parse(notesString);
    } else {
        return [];
    }
}
// function getNotes(){
//     return JSON.parse(localStorage.getItem("note-app")  || "[]");
// } This function is exposed to error, b/c "undefined" can not be parsed by JSON.

btnEl.addEventListener("click", addNote);