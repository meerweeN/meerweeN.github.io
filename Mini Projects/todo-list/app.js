let addButton = document.getElementById("addButton");
let inputText = document.getElementById("inputBox");
let toDoText = document.getElementById("exitText");


addButton.addEventListener("click",function(){
    let addParagraph = document.createElement('p');
    toDoText.appendChild(addParagraph);
    addParagraph.innerText = inputText.value;
    inputText.value = "";

        addParagraph.addEventListener("click",function(){
            addParagraph.style.textDecoration = "line-through";
        })

        addParagraph.addEventListener("dblclick",function(){
            toDoText.removeChild(addParagraph);
        })
});

