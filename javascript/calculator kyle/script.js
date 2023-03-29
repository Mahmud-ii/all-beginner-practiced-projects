class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

// clear the display as the calculator class is called;
    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined 
    }
// delete "one" from last, single last one;
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
// append the numbers to display, with just single dot, as string from num;
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
// choose operation
    chooseOperation(operation){
        if(this.currentOperand === "") return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand =  this.currentOperand
        this.currentOperand = ""
    }
// compute the number from string;
    compute(){
        let computedVal
        console.log(this.currentOperand - this.previousOperand);
        const prev =  parseFloat(this.previousOperand);
        const cur = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(cur)) return
        switch(this.operation){
            case "+":
                computedVal = prev + cur
                break;
            case "-":
                computedVal = prev - cur
                console.log(computedVal);
                break;
            case "*":
                computedVal = prev * cur
                break;
            case "÷":
                computedVal = prev / cur
                break;
            default:
                return
        }
    this.currentOperand = computedVal
    this.operation = undefined
    this.previousOperand = ""
    }
    getNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay 
        if(isNaN(integerDigits)){
            integerDisplay = ""
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }
// update the display
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getNumber(this.currentOperand) 
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = ""
        }
    }
}

const numberBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalBtn = document.querySelector('[data-equals]')
const deleteBtn = document.querySelector('[data-delete]')
const allClearBtn = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener('click', (button) => {
    calculator.compute()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', (button) => {
    calculator.delete()
    calculator.updateDisplay()
})

allClearBtn.addEventListener('click', (button) => {
    calculator.clear()
    calculator.updateDisplay()
})
