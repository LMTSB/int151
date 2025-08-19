function p(...c) {console.log(...c)}; // function declaration
const q = (...c) => {console.log(...c)}; // function expression (using arrow function) 
const r = function(...c) {console.log(...c)} // function function expression (using function declaration)

function type(f) {
    typeof(f) === undefined ? p(true) : p(false)
    typeof(f) === Object ? p(true) : p(false)
    typeof(f) === Number ? p(true) : p(false)
}

function first(a,b) {
    return a*b // return the solution using sent paramiter value
}

function second(o) {
    return o(1,2); // return value as a function through paramiter
}

let one = first; // assign function to a variable
let two = second; // assign function to a variable
console.log(second(first)); //pass function to another function
p(two(one)); //pass function to another function


function goodbye() {
    return "good bye"
}

function say() {
    return goodbye
}

let think = say()
p(think()); // output = 'goodbye'
p(say()()); // output = 'goodbye' (first bracket to invoke say function then second bracket invoke good bye function)


const plus = (i,u) => i + u + 100 // arrow function
p(plus(1,2));

function myFunc(theObject) {
    theObject.model = "A9999"
}
const product = {model: "A1001", price : 199}

console.log(product.model)
 
myFunc(product);
console.log(product.model)

function myFunc(side) {
    return side* side
}
let theSide = 2;
console.log(theSide)
console.log(myFunc(theSide))

function sum(x,y ,...z) { // arguments object
    for (ar of arguments){
        p(ar)
    }
    p(arguments.length)
    p(z)
}
sum(1,2,3,)

//find sum which sum could contain none one or many paramiter 
function summation(...p) {
    let s = 0
    for (x of arguments) {
        s += x
    }
    console.log(s)
}
summation();

function sum1(num1, num2, num3) {
    return num1 + num2 + num3
}
let nums = [5,6,7]
p(sum1(...nums))

//practices
//
//
//const ar = trimmed.split(); 
function getFreqOfWords(sentence) {
    if (typeof(sentence) !== String) {return undefined} // input validation 
    const low = sentence.toLowerCase(); //change sentence into lowercase
    const trimmed = low.trim(); // trim lowercased sentence
    const text = trimmed.split(); // split trimmed sentence into text
    for (x of arguments) {
        text[x]
    }

}
p(getFreqOfWords('Today is present and present is your gift'))
p(getFreqOfWords('Do your best just do it'))
p(getFreqOfWords(null))
p(getFreqOfWords(undefined))