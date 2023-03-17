const btn = document.querySelectorAll("button");
const display_input = document.querySelector(".input");
const display_output = document.querySelector(".output");

let input = "";

btn.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.value == "=") {
            let result = eval(input);
            display_output.innerHTML = result;
        } else if (item.value == "AC") {
            input = "0";
            display_input.innerHTML = input;
            display_output.innerHTML = input;
            input = "";
        } else if (item.value == "back") {
            input = input.slice(0, -1);
            display_input.innerHTML = input;
        } else {
            if (validInput(item.value)) {
                input += item.value;
                display_input.innerHTML = input;
            }
        }
    })
})

function validInput(value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/"];
    if (value == "." && last_input == ".") return false;
    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false;
        } else {
            return true;
        }
    }
    return true;
}