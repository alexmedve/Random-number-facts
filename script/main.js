let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");
let selecter = document.querySelector("#numberSelect");

numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
  let xhr = new XMLHttpRequest();
  let number = numberInput.value;
  let numberType = "";
    switch(selecter.value){
      case "1":
        numberType = "";
        break;
      case "2":
        numberType = "/year";
        break;
      case "3":
        numberType = "/math";
    }
    xhr.open("GET", "http://numbersapi.com/"+ number + numberType);
    xhr.onload = function() {
        if(this.status == 200 && number != ""){
           fact.style.display = "block";
           factText.innerHTML = this.responseText;
           }
    };
    xhr.send();
};



// numberInput.addEventListener("input", getFactAjax);
//
// function getFactAjax() {
//     let number = numberInput.value;
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://numbersapi.com/"+number);
//     xhr.onload = function() {
//         if(this.status == 200 && number != ""){
//            fact.style.display = "block";
//            factText.innerHTML = this.responseText;
//            }
//     }
//     xhr.send();
// };
