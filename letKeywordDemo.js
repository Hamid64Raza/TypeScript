var index = 0;
for (var index_1 = 0; index_1 <= 5; index_1++) {
    console.log("Index value inside for loop==" + index_1);
}
console.log("Index Value Outside for loop==" + index);
console.log("++++++++++++++++++++++++++++++");
function display() {
    var msg = "Welcome to Ashok IT...";
    {
        var msg_1 = "Welcome to Angular";
        console.log("inside block mag value::" + msg_1);
    }
    console.log("Outside Block msg Value::" + msg);
}
display();
