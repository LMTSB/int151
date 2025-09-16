
//import function
import { p } from "./modulePractice.js"

//class06 Functional Programming
const greet = (name,formatter) => formatter(name) //higher order function
const shout = text => text.toUpperCase() + '!!!'
const bedTime = text => text.toUpperCase().concat(" ", 'GO TO BED!')
p(greet('alice',shout))
p(greet('alice',bedTime));
