function hello() {
  console.log("hello moto ");
}

hello();
// Named function
function add(x: number, y: number): number {
  return x + y;
}

let result = add(10, 20);
console.log(result);
// Anonymous function
let resultofAnamous = function (x: number, y: number): number {
  return x + y;
};
let endResult=resultofAnamous(10, 20);
console.log("sum is = "+endResult);

//Optional parameter

let learnOptinal= function (fName:string ,lName?:string){
    return fName+" "+lName;

}

console.log(learnOptinal("hamid","raza"));
console.log(learnOptinal("Typscript"));

let wish= function (fName:string ,lName:string="hi"){
    return fName+" "+lName;

}

console.log(wish("hamid","raza"));
console.log(wish("Typscript"));
