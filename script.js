const calc = document.querySelector(".calc")
const display = calc.querySelector('.display')

var readySolve = false;
var activeFormula = "";

calc.addEventListener("click", e => {

    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action

        if (!action) {
            activeFormula += e.target.textContent
            display.textContent = activeFormula
        } else {
            switch(action) {
                case "add":
                case "subtract":
                case "multiply":
                case "divide":
                    console.log("operator key!")
                    if(activeFormula.slice(-1) != ("+" || "-" || "÷" || "*")) {
                        if(readySolve) {
                            computeString()
                            activeFormula += e.target.textContent
                        } else {
                            activeFormula += e.target.textContent
                        }
                        readySolve = true
                    }
                    break;
                case "clear":
                    console.log('clear key!')
                    activeFormula = ""
                    readySolve = false
                    display.textContent = "0"
                    break;
                case "decimal":
                    console.log('decimal key!')
                    activeFormula += e.target.textContent
                    break;
                case "calculate": 
                    console.log('calculate key!')
                    if(readySolve & activeFormula.slice(-1) != ("+" || "-" || "÷" || "*")) computeString()
                    break;
                default:
            } 
        }
        display.textContent = activeFormula
    }
})

function computeString() {
    console.log("Solving: " + activeFormula)

    // The mathematic string into an array
    // Ex: "1.3+2" -> [1.3][+][2]
    var equation = ["","",""]
    counter = 0;
    for (var i = 0; i < activeFormula.length; i++) {
        c = activeFormula[i]
        
        if(c >= '0' && c <= '9'){
            equation[counter] += c
        } else {
            counter += 1
            equation[counter] += c
            counter += 1
        }
    }
    console.log(equation)

    // Solve this array
    answer = 0;
    a = parseInt(equation[0])
    b = parseInt(equation[2])
    switch(equation[1]) {
        case "+":
            console.log("plus")
            answer = a + b
            break;
        case "-":
            console.log("minus")
            answer = a - b
            break;
        case "÷":
            answer = a / b
            break;
        case "*":
            console.log("mult")
            answer = a * b
            break;
        default:
            console.log("default")
            answer = 0;
    }

    display.textContent = answer
    activeFormula = answer
    readySolve = false
}