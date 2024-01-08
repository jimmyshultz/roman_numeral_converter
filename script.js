const numberForm = document.getElementById("number-form");
const number = document.getElementById("number");
const output = document.getElementById("output");

numberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const intOfInputNumber = Number(number.value)

    if (number.value === "") {
        output.innerText = "Please enter a valid number."
    } else {
        if (number.value % 1 === 0) {
            if (number.value < 1) {
                output.innerText = "Please enter a number greater than or equal to 1"
            } else if (number.value > 3999) {
                output.innerText = "Please enter a number less than or equal to 3999"
            } else {
                output.innerText = convertToRomanNumeral(intOfInputNumber, "");
            }
        } else {
            output.innerText = "Please enter a whole number."
        }
    }
    
})

function convertToRomanNumeral (number, romanNumeralString) {
    let finalString;
    if (number >= 1000) {
        romanNumeralString += "M"
        number -= 1000
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 900) {
        romanNumeralString += "CM"
        number -= 900
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 500) {
        romanNumeralString += "D"
        number -= 500
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 400) {
        romanNumeralString += "CD"
        number -= 400
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 100) {
        romanNumeralString += "C";
        number -= 100;
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 90) {
        romanNumeralString += "XC"
        number -= 90
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 50) {
        romanNumeralString += "L";
        number -= 50;
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 40) {
        romanNumeralString += "XL"
        number -= 40
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 10) {
        romanNumeralString += "X";
        number -= 10;
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 9) {
        romanNumeralString += "IX"
        number -= 9
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 5) {
        romanNumeralString += "V";
        number -= 5;
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 4) {
        romanNumeralString += "IV"
        number -= 4
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number >= 1) {
        romanNumeralString += "I";
        number -= 1;
        finalString = convertToRomanNumeral(number, romanNumeralString);
    } else if (number == 0) {
        finalString = romanNumeralString;
    }
    return finalString;
}