
function performCalculation() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if(operation === '+'){
        if(Math.random() < 0.1){
            result = `Faulty result: ${num1 - num2}`;
        }else{
            result = `Correct result: ${num1 + num2}`;
        }
    }
    else if(operation === '*'){
        if(Math.random() < 0.1){
            result = `Faulty result: ${num1 + num2}`;
        }else{
            result = `Correct result: ${num1 * num2}`;
        }
    }
    else if(operation === '-'){
        if(Math.random() < 0.1){
            result = `Faulty result: ${num1 / num2}`;
        }else{
            result = `Correct result: ${num1 - num2}`;
        }
    }
    else if(operation === '/'){
        if(Math.random() < 0.1){
            result = `Faulty result: ${num1 ** num2}`;
        }else{
            result = `Correct result: ${num1 / num2}`;
        }
    }

    document.getElementById("result").innerText = result;
}
