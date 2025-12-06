function hello() {
    console.log("hello moto ");
}
hello();
// Named function
function add(x, y) {
    return x + y;
}
var result = add(10, 20);
console.log(result);
// Anonymous function
var resultofAnamous = function (x, y) {
    return x + y;
};
var endResult = resultofAnamous(10, 20);
console.log("sum is = " + endResult);
//Optional parameter
var learnOptinal = function (fName, lName) {
    return fName + " " + lName;
};
console.log(learnOptinal("hamid", "raza"));
console.log(learnOptinal("Typscript"));
var wish = function (fName, lName) {
    if (lName === void 0) { lName = "hi"; }
    return fName + " " + lName;
};
console.log(wish("hamid", "raza"));
console.log(wish("Typscript"));
