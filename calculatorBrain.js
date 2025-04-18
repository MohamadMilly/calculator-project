const digitButton = document.querySelectorAll(".digitButton");
const plusOperator = document.querySelector(".plus");
const minesOperator = document.querySelector(".mines");
const multiplyOperator = document.querySelector(".multiply");
const divideOperator = document.querySelector(".divide");
const factorialOperator = document.querySelector(".factorial");
const decimal = document.querySelector(".decimal");
const deleteDigitButton = document.querySelector(".deleteDigit");
const output = document.querySelector("#output");
const equalButton = document.querySelector("#equalButton");
output.textContent = "0";
const deleteAllButton = document.querySelector("#deleteAll");
plusOperator.addEventListener("click",addSymbol);
minesOperator.addEventListener("click",addSymbol);
multiplyOperator.addEventListener("click",addSymbol);
divideOperator.addEventListener("click",addSymbol);
factorialOperator.addEventListener("click",addSymbol);

deleteAllButton.addEventListener("click",()=>{
  output.textContent = "";
})


decimal.addEventListener("click", (e) => {
const outputArr = output.textContent.split(/[+\-×÷!]/);
let x = outputArr[outputArr.length-1];



if (!x.includes(".")) {
  output.textContent += e.target.textContent;
  x+=".";
  if (x.at(0) === ".") {
    
    output.textContent = output.textContent.slice(0,-1);
    
  }
 
  }


    else{
  output.textContent += '';
    }
    

  
  
});

deleteDigitButton.addEventListener("click",()=>{
  output.textContent = output.textContent.slice(0,-1);
})
 


digitButton.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    
       if (output.textContent==="0") {
      output.textContent = "";
      output.textContent += e.target.textContent;
    }
    else {
    output.textContent += e.target.textContent;
    }
    

  })
})
 
function addSymbol(e) {
  
  const outputArr = output.textContent.toString().split("");
  
  let x = outputArr[outputArr.length - 1];
   if (e.target.textContent === x  || x === "+" || x==="-" || x==="×" || x==="÷" || output.textContent.at(-1)===".") {
    output.textContent += "";
   }
   
   else {
    output.textContent += e.target.textContent;
    
    
   }
    
  
}



equalButton.addEventListener("click",calculate);

function calculate() {
  let copyOfOutput = output.textContent;
  
  copyOfOutput = copyOfOutput.replaceAll("×", "*").replaceAll("÷", "/");

  const factorialRegex = /(\d+)!/g;
   
  copyOfOutput = copyOfOutput.replace(factorialRegex, (match,num) => {
    return findFactorial(Number(num));
  });

 output.textContent = eval(copyOfOutput);
}



function findFactorial(num) {
  let result = 1;
 for (let i = 1 ; i<=num;i++) {
  result = result * i ;
 }
return result;
  
}
















 

