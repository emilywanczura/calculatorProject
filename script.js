function calculation(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operand = document.getElementById("operand").value;
    let result;
    let valid = true;
    if (isNaN(num1) || isNaN(num2)){
        result = "Please enter two valid numbers.";
        valid = false;
    } else{
        switch (operand){
            case "NA":
                result = "Select a valid operand."
                valid = false;
                break;
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 == 0){
                    result = "Division by zero is not allowed.";
                }
                else{
                    result = num1 / num2;
                } break;
            default:
                result = "Invalid computation."
        }
    }

        if (valid == true){
            document.getElementById("display").textContent = num1 + " " + operand + " " + num2 + " = " + result;
        } else{
            document.getElementById("display").textContent = result;
        }

            
}

function reset(){
    document.getElementById("display").textContent = "";
    document.getElementById("operand").value = "NA";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}