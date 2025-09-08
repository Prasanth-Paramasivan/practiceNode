const { error } = require("jquery");

const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    if(b===0){
        throw new error("Cannot divide by 0")
    }
    return a/b;
}

module.exports = {
    add,subtract,multiply,divide,
}