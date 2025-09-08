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
        alert("Cannot divide by 0")
    }
    return a/b;
}

export default {
    add,subtract,multiply,divide,
}