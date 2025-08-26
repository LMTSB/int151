function p(...t) {console.log(...t)};
const words = ['apple','banana','sugar apple','grape fruit'];
const filter = words.filter( word => word.length > 6); // anonymous function is "word" which indicate word that have length > 6 

const map1 = words.map( word => word.toUpperCase()); // example of map method

const students = [
  { id: 1, name: "Somchai Jaidee" },
  { id: 2, name: "Suda Deejai" },
  { id: 3, name: "John Smith" },
]
const pick = students.map(student => student.id).filter(id => id % 2 === 0); // example of map method with object

p(pick);
p(map1);
p(filter);

const mangos = ['Mango','Apple','mangosteen','orange','mangoes'];

const choose = mangos.filter(mango => mango.toLowerCase().includes('mango'))
p(choose);

const words2 = ['Apple','sugar apple','mangosteen','green apple','banana'];

const choose2 = words2.filter(apple => apple.toLowerCase().includes('apple')? "have apple":"don't contain apple");
choose2;

const cart = [
    {productId: 1001, price: 500, quantity: 2},
    {productId: 1002, price: 10, quantity: 3},
    {productId: 1003, price: 5, quantity: 10},
]
// find total price of the cart
const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity ,0) // (sum,product)
p(`totalPrice: ${totalPrice}`);


// cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
//cart.unshift({ productId: 5555, price: 1, quantity: 4 })
//console.log(cart)
//p(cart.length);
//p(cart.shift());
//p(cart.length);
//p(cart.unshift({ productId: 5555, price: 1, quantity: 4 }));

const words3 = ["mango","apple","mangosteen","orange","mangoes"]
//words3.splice(2 ,1 ,"banana");
//p(words3);
//words3.splice(3 ,2);
//p(words3);
//words3.splice(2 ,1 ,"melon" ,"cherry");
// p(words3);

p(words3.slice(2));
p(words3.slice(0,2));
words3.fill(null);
p(words3);