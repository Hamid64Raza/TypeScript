var petName = "Dog";
function setPetName() {
    var petName = "Cat";
    console.log("Inside function ==" + petName);
}
setPetName();
console.log("Outside function==" + petName);
var index = 10;
for (var index = 0; index <= 5; index++) {
    console.log("Index inside for loop==" + index);
}
console.log("Index value outside for loop" + index);
