function p(...a) {console.log(...a)};
let cars = ["lotus" ,21 ,false ,7.1]; // arr
function FirstLast() {
    let n = cars.length
    p(cars[0] + " " + cars[n-1])
    for (let i = 0 ; i < n ; i++) {
        p(i + " " + cars[i]);
    }
};
FirstLast()

cars.push("toyota");
cars.push(null);
p(cars);
p(cars.length);

cars.splice(cars.length - 1);
p(cars);

// A
let AofO = [ 
    {name: "John" ,surname: "Doe"} , 
    {name: "Nick" ,surname: "Fury"}
    ];
    
let AofA = [
    ["one" ,"two" ,"three" ,"four"] ,
    [1 ,2 ,3 ,4] ,
    [1.0 ,2.0 ,3.0 ,4.0]
    ];
    
p(AofA);
p(AofO);

const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts[0].email[1]);
 
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]

for (x of groups) {
    p(x[x.length - 1]);
}

let text = "hello world"
let spread = [...text]
p(spread);

let ar = new Array()
let ar1 = new Array(10)
let ar2 = new Array(1 ,2 ,3 ,4)
p(ar)
p(ar1)
p(ar2)

let ar3 =Array.of(7)
p(ar3)

let ar4 = ['let' ,'the' ,'world' ,'burns']
let ar5 = Array.from(ar4)
p(ar5)