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
            if(num1 == null){ //collect num1 from collector
                console.log("first collection");
                num1 = parseInt(collector);
                collectRule(value);
                collector = "";
                console.log(num1 + " " + operation + " " + value);
            }
            else if(num1 != null){
                console.log("second collection");
                performOps(operation);
                num1 = answer;
                num2 = null;
                evaluateAnswer();
                collectRule(value);
            }
        }

        else if(value == "clear"){
            reset();
        }
        else if(value == "delete"){
            if (collector != ""){
                console.log("deletion performed");
                let temp = collector.slice(0, -1);
                collector = temp;
                mainScreen.innerText = collector;
            }else return console.log("collector is empty");
        }
        else if(value == "equal"){
            performOps(operation);
            evaluateAnswer();
        }
    }
})

function collectRule(value){
    let temp = parseInt(value);
    let checkScreen = parseInt(mainScreen.innerText);

    if (!isNaN(value) && num1 == null && collector.length < 10){
        collector += value;
        mainScreen.innerText = collector;
    }
    else if(!isNaN(value) && num1 != null && collector.length < 10){
        mainScreen.innerText = "";
        collector += value;
        mainScreen.innerText = collector;
    }
    else if(isNaN(value) && num1 != null && num2 == null){
        console.log("second cond");
        operation = value;
    }
}

function performOps(operation){
    // edge case here
    // ---------------
    console.log("perform operation");
    if(collector != "" && num1 != null){
        console.log(operation);
        num2 = parseInt(collector);
    }
    else if(num2 == null && num1 != null){
        collector = num1;
        operation = null;
    }

    switch(operation){
        case "add":
            answer = num1 + num2;
            operation = null;
            collector = "";
            break;
        case "minus":
            answer = num1 - num2;
            operation = null;
            collector = "";
            break;   
        case "divide":
            answer = num1/num2;
            operation = null;
            collector = "";
            break;
        case "multiply":
            answer = num1*num2;
            operation = null;
            collector = "";
            break;
        case null:
            answer = parseInt(collector);
            num2 = null;
            break;
    }
}

function evaluateAnswer(){
    if (answer === Infinity || answer === -Infinity || answer === undefined){
        // code here
        console.log(num1 + " " + num2 + " " + answer);
        mainScreen.innerText = "NUTS!";
        console.log(num1 + " " + num2 + " " + operation + " " + answer);
        answer = null;
    }
    else if(isNaN(answer)){
        console.log("Nan is good");
    }
    else{
        // code here
        mainScreen.innerText = answer.toFixed(2);
        console.log(num1 + " " + num2 + " " + operation + " " + answer);
        answer = null;
    }
}

function reset(){
    mainScreen.innerText = "";
    num1 = null;
    num2 = null;
    operation = null;
    answer = null;
    collector = "";
}
