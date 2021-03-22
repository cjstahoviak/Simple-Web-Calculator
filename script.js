const calc = document.querySelector(".calc")
var activeFormula = "";

calc.addEventListener("click", e => {
    if (e.target.matches("button")) {
        // Do something
        const key = e.target
        const action = key.dataset.action

        if (!action) {
            console.log('number key!')
        } else {
            switch(action) {
                case "add":
                case "subtract":
                case "multiply":
                case "divide":
                    console.log("operator key!")
                    break;
                case "clear":
                    console.log('clear key!')
                    break;
                case "decimal":
                    console.log('decimal key!')
                    break;
                case "calculate": 
                    console.log('calculate key!')
                    break;
                default:
            } 
        }
    }
})

function computeString(equation) {
    // Ex sole "1+2" "1" "1.5-.5
    equation = "1+2"
    
}