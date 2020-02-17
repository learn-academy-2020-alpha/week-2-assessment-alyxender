// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.
/*
var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


//Creating a function that will take in a number and attempt to divide it by three and return a pleasant little string along with it. 
const divisibleBy = (num) =>{
    if(num / 3){
        return `${num} is divisible by three!`
    } else { return `${num} is not divisible by three  :( `
    }
}

//Logging the function call three times, with the set variables above as arguments. I know there is a better way of doing this, but just wanted to do the long way
console.log(divisibleBy(num1))
console.log(divisibleBy(num2))
console.log(divisibleBy(num3))
*/





// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

/*
var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

//Creating a function that will take in the array and spit out the array with only the first letter capitalized. 
const capitalizedNouns = (nouns) => {
    for (const nouns of randomNouns ){
        console.log(nouns[0].toUpperCase() + nouns.substr(1))
    }
}

//Calling the function to execute
capitalizedNouns()


*/




// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.


/*

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]


//Creation of filter and sorting function
const numbersOnly = (arr) => {
    return arr.filter(value => typeof value === "number").sort(function(a,b){return a-b})
}

// Calling the function to filter the array  and sort

console.log(numbersOnly(mixedDataArray))

*/




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

/*

var vowelTester1 = "learn"
// Expected output: 1

//Pretty sure you meant to have this be vowelTester2. Let me know if I am wrong here. 
var vowelTester2 = "throw"
// Expected output: 3


//Creation of function that will sort out the vowels.
const vowelsOnly = (string) => {
    let vowels = ["a", "e", "i", "o", "u", "y"] //but only sometimes with that Y, lets not be crazy about it. 
    string.split("")
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            return i
        }
    }
}


//Logging the call of the function with the strings provided above
console.log(vowelsOnly(vowelTester1))
console.log(vowelsOnly(vowelTester2))



*/


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

/*

//Creating the function, Calculator that will take in 2 numbers and a operator string and spit out the correct calculations along with an error message if no numbers are put in correctly. 
const calculator = (num1, operator, num2) => {
    if (num2  === 0) {
        return "Can't divide by 0 broski, brotini, bromondo, brosteph, bro-guy-dude-man-lady-gal-lad-lass-gender-neutral-human-or-not-idk-person-meatpopsicle!"
    }
    
    if(operator === "*"){
        return num1 * num2
    } else if(operator === "+"){
        return num1 + num2
    } else if(operator === "/"){
        return num1 / num2
    } else if ( operator === "-"){
        return num1 - num2
    } else { return "Ayyy bud, next time try puttin' a number all up in there OK? thaaaaanks"
 }
}




// Uncomment and use the following console logs to test your function

//I also think you meant to have some commas in these logs after the operator string, so, here you go!

console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"

*/