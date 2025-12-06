var index=0;
for(let index=0;index<=5; index++){
    console.log("Index value inside for loop=="+index);
}

console.log("Index Value Outside for loop=="+index);


console.log("++++++++++++++++++++++++++++++");

function display(){
    let msg:string="Welcome to Ashok IT...";
    {
        let msg:String="Welcome to Angular";
        console.log("inside block mag value::"+msg);
    }
    console.log("Outside Block msg Value::"+msg);
}

display();