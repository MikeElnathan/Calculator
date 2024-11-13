const mainScreen = document.getElementById("bottomScreen");
mainScreen.style.cssText = 
"font-family: calibri, serif; color: black; font-weight: 800; padding-left: 10px; padding-top: 5px; font-size: 32px;";

let num1 = 0, num2 = 0;

document.querySelector(".operations").addEventListener("click", (a) => 
{
    if(a.target.classList.contains("button"))
    {
        const action1 = a.target.getAttribute("id");

        switch (action1)
        {
            case "add":
                // function here
                mainScreen.innerText = "+"; 
                const add = document.getElementById("add");
                add.style.outline = "2px solid red";
                setTimeout(() => {
                    add.style.outline = "";
                }, 500);
                break;
            case "minus":
                // function here
                mainScreen.innerText = "-"; 
                const minus = document.getElementById("minus");
                minus.style.outline = "2px solid red";
                setTimeout(() => {
                    minus.style.outline = "";
                }, 500);
                break;
            case "divide":
                // function here
                mainScreen.innerText = "/"; 
                const divide = document.getElementById("divide");
                divide.style.outline = "2px solid red";
                setTimeout(() => {
                    divide.style.outline = "";
                }, 500);
                break;
            case "multiply":
                // function here
                mainScreen.innerText = "x"; 
                const multiply = document.getElementById("multiply");
                multiply.style.outline = "2px solid red";
                setTimeout(() => {
                    multiply.style.outline = "";
                }, 500);
                break;
            case "clear":
                // function here
                mainScreen.innerText = "";
                const clear = document.getElementById("clear");
                clear.style.outline = "2px solid red";
                setTimeout(() => {
                    clear.style.outline = "";
                }, 500);
                break;
        }
    }
});
