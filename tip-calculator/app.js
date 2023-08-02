let bill = document.getElementById("bill");
let tipAmount = document.getElementById("tip");
let exitText = document.getElementById("exitText");
let calculateBtn = document.getElementById("tipBtn");

calculateBtn.addEventListener("click", function(){

    let billTotal = (+tipAmount.value/100) * bill.value + +bill.value;

   
        if(oneBox.checked) {
        exitText.innerHTML = ("Total is " + billTotal + "$");
    }

        else if (twoBox.checked) {  
        exitText.innerHTML = ("Total is " +billTotal/2 + "$");
    }

        else if (threeBox.checked) {  
        exitText.innerHTML = ("Total is " +billTotal/3 + "$");
     }

        else if (fourBox.checked) {  
        exitText.innerHTML = ("Total is " +billTotal/4 + "$");
     }
        else if (fiveBox.checked) {  
        exitText.innerHTML = ("Total is " +billTotal/5 + "$");
     }
       else if (sixBox.checked) {
        exitText.innerHTML = ("Total is " +billTotal/6 + "$");
       }
       else {
        exitText.innerHTML = ("Please select the number of persons to split between!");
       }

});

 