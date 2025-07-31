function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName() sayMyName is reference and ()is execution

// function addTwoNo(number1,number2){
//     console.log(  number1+number2);
// }

// addTwoNo(3,5)
//  const result= addTwoNo(4,"a")
//  console.log("result:", result);
 

function addTwoNo(number1,number2){
    let result = number1+number2
    return result // after result nothing will print

}
const result = addTwoNo(4,5)
// console.log("result:",result);
function loginUserMessage(username = "sam"){
if(username=== undefined){                   // ! is equal to not equal
    console.log("PLEASE ENTER USERNAME");
    return
    
}

return `${username} just login in`
}
                                               
// console.log(loginUserMessage()); // value not determined undefined

function calculateChartPrice(val1,val2,...num1){   // rest operator
    return num1
}
// console.log(calculateChartPrice(200,300,599));

 // combine of object & function
const user ={
    username : "nikhil",
    price :200
}

function handlePrice(anyObject){                                                      
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
handlePrice(user)

// conbine array to function

let myNewArr =[200,399,499,700]
 
function returnArry(getArry){
    return getArry[0]
}
console.log(returnArry([200,399,499,700]));
