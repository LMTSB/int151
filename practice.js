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

