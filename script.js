const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById("passwordGeneratorForm")

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

Form.addEventListener("sumbit", event => {
    event.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUpperCase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    String.fromCharCode(65)
}

funtion arrayFromLowToHigh(low, high) {
    const array = []
}

function syncCharacterAmount(event) {
    const value = event.target.value
    characterAmountRange.value = value
    characterAmountNumber.value = value
}

