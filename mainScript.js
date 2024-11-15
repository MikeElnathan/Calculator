// -------------------------------------------//
let num1, num2, answer, operation = null;
let collector = "";
const mainScreen = document.querySelector(".screen");
// ------------------------------------------//

const calculator = document.querySelector(".Calculator");

calculator.addEventListener("click", (event) => {
    const target = event.target;

    if(target.classList.contains("button")){
        const action = target.dataset.action; //targetting data-action
        const value = target.dataset.value; //targetting data-value


        if(action == "num"){
            // ouput pressed number
            collectRule(value);
        }

        else if(action == "operation"){
            // return and output operation to mainscreen
            collectRule(value);//change to output symbol
        }

        else if(value == "clear"){
            // handle equal, clear, and delete
            mainScreen.innerText = "";
            num1 = null;
            num2 = null;
            operation = null;
            answer = null;
            collector = "";
        }
    }

})

function collectRule(value){
    let temp = parseInt(value);
    let checkScreen = parseInt(mainScreen.innerText);

    if(!isNaN(temp) && !isNaN(checkScreen)){
        console.log("first condition");
        collector += value;
        mainScreen.innerText += value;
    }
    else if(isNaN(temp) && num2 == null && operation == null){
        console.log("second condition");
        mainScreen.innerText = value;
        num1 = parseInt(collector);
        collector = null;
        operation = value;
        mainScreen.innerText = value;
    }
    else if(!isNaN(temp) && isNaN(checkScreen)){
        console.log("third condition");;
        mainScreen.innerText = "";
        collector += value;
        mainScreen.innerText += value;
    }
}

