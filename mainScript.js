const mainScreen = document.getElementById("bottomScreen");
mainScreen.style.cssText = 
"font-family: calibri, serif; color: black; font-weight: 800; padding-left: 10px; padding-top: 5px; font-size: 32px;";
const minScreen = document.getElementById("topScreen");
minScreen.style.cssText = 
"font-family: calibri, serif; color: black; font-weight: 800; padding-left: 10px; padding-top: 5px; font-size: 12px;";


let num1 = 0, num2 = 0, answer;
let opsCount = 0;
let operation = "";

function displayButton(a)
{
    let b = document.getElementById(a);
    b.style.outline = "2px solid red";
    setTimeout(() => {
        b.style.outline = ""
    }, 200);
}

function displayManagement(a)
{
    let b = parseInt(document.getElementById(a).innerText);
    
    if (isNaN(b)) //after "operation" button are pushed.
    {
        getNumberInput();
        minToMaxScreen();
        let d = document.getElementById(a).innerText;
        minScreen.innerText += d;
    }else{ 
        mainScreen.innerText += b;
    }
}

function getNumberInput()
{
    if (operation == "")
    {
        num1 = parseInt(mainScreen.innerText);
        opsCount = 1;
    }
    else if (operation != ""){
        num2 = parseInt(mainScreen.innerText);
        opsCount = 3;
    }
}

function limiter()
{
    if (opsCount === 3){
        returnANswer(operation);
        mainScreen.innerText = answer;
        num1 = answer;
        opsCount = 0;
    }else return console.log("E S C A P E");
}

function minToMaxScreen()
{
    minScreen.innerText += mainScreen.innerText;

    if(answer !== undefined){
        mainScreen.innerText = answer;
    }
    else if(answer === undefined){
        mainScreen.innerText = "";
    } 
}

function returnANswer(operation)
{
    // todo
    switch(operation){
        case "add":
            answer = num1 + num2;
            break;
        case "minus":
            answer = num1 - num2;
            break;
        case "divide":
            answer = num1/num2 //REVISIT THIS!!
            break; 
        case "multiply":
            answer = num1*num2;
            break;
    }
}

document.querySelector(".operations").addEventListener("click", (a) => 
{
    if(a.target.classList.contains("button"))
    {
        const action1 = a.target.getAttribute("id");

        switch (action1)
        {
            case "add":
                // function here
                displayManagement("add");
                displayButton("add");
                operation = "add";
                getNumberInput();
                break;
            case "minus":
                // function here
                displayManagement("minus");
                displayButton("minus");
                operation = "minus";
                getNumberInput();
                break;
            case "divide":
                // function here
                displayManagement("divide"); 
                displayButton("divide");
                operation = "divide"
                getNumberInput();
                break;
            case "multiply":
                // function here
                displayManagement("multiply");
                displayButton("multiply");
                operation = "multiply";
                getNumberInput();
                break;
            case "clear":
                // function here
                mainScreen.innerText = "";
                minScreen.innerText = "";
                num1 = 0;
                num2 = 0;
                operation = "";
                answer = undefined;
                displayButton("clear");
                break;
        }
    }
});

document.querySelector("#numbers").addEventListener("click", (a) => 
    {
        if(a.target.classList.contains("button"))
        {
            const action1 = a.target.getAttribute("id");
    
            switch (action1)
            {
                case "num1":
                    // function here
                    
                    displayManagement("num1");
                    displayButton("num1");
                    break;
                case "num2":
                    // function here
                    
                    displayManagement("num2"); 
                    displayButton("num2");
                    break;
                case "num3":
                    // function here
                    
                    displayManagement("num3"); 
                    displayButton("num3");
                    break;
                case "num4":
                    // function here
                    
                    displayManagement("num4"); 
                    displayButton("num4");
                    break;
                case "num5":
                    // function here
                    
                    displayManagement("num5");
                    displayButton("num5");
                    break;
                case "num6":
                    // function here
                    
                    displayManagement("num6");
                    displayButton("num6");
                    break;
                case "num7":
                    // function here
                    
                    displayManagement("num7");
                    displayButton("num7");
                    break;
                case "num8":
                    // function here
                    displayManagement("num8"); 
                    displayButton("num8");
                    break;
                case "num9":
                    displayManagement("num9");
                    displayButton("num9");
                    break;
                case "num0":
                    displayManagement("num0");
                    displayButton("num0");
                    break;
                case "equal":
                    // function here
                    getNumberInput();
                    displayButton("equal");
                    returnANswer(operation);
                    minToMaxScreen();
                    operation = "";
                    answer = undefined;
                    break;
            }
        }
    });


