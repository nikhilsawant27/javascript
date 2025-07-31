// const user={
//     username:"nikhil",
//     price:999,
//                                                              //// this in current state
//     welcomeMessage:function(){
//         console.log(`this is my ${this.username},welcome to website`)

//     }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     console.log(this)
// }                 /// this is not working in arrow function
// coffee()

// const chai = () => {
//     let userNmae = "nikhil"
//     console.log(this.userNmae);
// }                 /// this is not working in arrow function
// chai()

 const addTwo = (num1,num2) => {
    return num1+num2
 }

 console.log(addTwo(2,4));

 const addTwo = (num1,num2) => num1+num2
 

 console.log(addTwo(2,4));

 const addTwo = (num1,num2) => ({num1+num2})  // object to write in arrow function