// function to clear all values
function clearScreen() {
    document.getElementById("result").value = "";
}
// function to display the values
function display(value) {
    document.getElementById("result").value += value;
}
// function to evaluate expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}