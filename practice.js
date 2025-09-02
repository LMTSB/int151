function p(...c) {console.log(...c)};

// pratice 1
const studentsScores = [
    {name : 'Alice' ,score : 85},
    {name : 'Bob' ,score : 92},
    {name : 'Charlie' ,score : 68},
    {name : 'David' ,score : 55},
    {name : 'Eve' ,score : 78},
]
//create new array with students name that have score >= 70
function getPassingNames(list) {// gain input and 
    return list
    .filter(students => students.score >= 70) // get output of certain conditions in array form
    .map(students => students.name.toUpperCase()) // create new array of certain conditions in array form
}; 
const passingNames = getPassingNames(studentsScores);
console.log(passingNames);

//make a numeric sort function
const array1 = [-3,1,17,2,3,4,5,10]
p(array1.sort((a ,b) => a - b));

const stds = [ //ascend student name 
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
];

function compare(ar) {
    return ar.sort((a,b) => a.name.localeCompare(b.name)); // add .toReversed() to make array ascending; 
}
p(compare(stds));
