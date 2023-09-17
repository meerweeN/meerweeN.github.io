const PI = 3.141592653589793238462643383279502884197;

let razaIntrodusa;
let addExitText = document.getElementById("exitText");

let stergeButton = document.getElementById("stergeButton");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  let razaIntrodusa = document.getElementById("introduceRaza").value;
  let circumerintaFinala = razaIntrodusa * PI * 2;
  var paragraph = document.createElement("p");
  paragraph.innerText =
    "Pentru raza cercului " +
    razaIntrodusa +
    ", circumferința cercului este de " +
    circumerintaFinala +
    " mm.";
  addExitText.appendChild(paragraph);

  stergeButton.addEventListener("click", function () {
    addExitText.removeChild(paragraph);
  });
});





