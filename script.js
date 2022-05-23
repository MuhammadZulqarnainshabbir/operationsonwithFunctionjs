function Sum(p1, p2) {
    return p1 + p2;
}
function multiply(value1, value2) {
    return value1 * value2;
}

function Divide(value1, value2) {
    return value1 / value2;
}

function subtract(value1, value2) {
    return value1 - value2;
}
document.getElementById("sumID").innerHTML = Sum(10, 10);
document.getElementById("divID").innerHTML = Divide(10, 10);
document.getElementById("subID").innerHTML = subtract(10, 10);
document.getElementById("mulID").innerHTML = multiply(10, 10);
console.log(myFunction);
