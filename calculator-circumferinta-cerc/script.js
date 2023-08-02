const PI = 3.141592653589793238462643383279502884197;
 
let razaIntrodusa;
let addExitText = document.getElementById("exitText")




document.getElementById("submitButton").onclick = function(){

    let razaIntrodusa = document.getElementById("introduceRaza").value;
    let circumerintaFinala = razaIntrodusa *PI*2;
    var paragraph = document.createElement("p");
    paragraph.innerText ="Pentru raza cercului " +razaIntrodusa +", circumferința cercului este de " +circumerintaFinala + " mm.";
    addExitText.appendChild(paragraph);  

}

document.getElementById("stergeButton").onclick = function(){
    addExitText.remove("exitText");


}





