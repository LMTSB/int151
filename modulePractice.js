function p(...c) {console.log(...c)};
const maxStudent = 60;


function getLength(str) {return str.length};

function echo(val) {return val};

const TAX = 0.7;

class Book {
    constructor(isbn,title) {
        this.isbn = isbn;
        this.title = title;
    }
}

export {getLength,echo ,p,TAX as VAT,Book};

// module.exports = {p,getLength,maxStudent,echo}; // name exports
