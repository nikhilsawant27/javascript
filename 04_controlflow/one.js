 //if
//  const isUserloggedIn=true
//  const Temperature=41
//  if(Temperature<50){
//     console.log("temperature is less than 50");
//  }else{
//     console.log("temperature is greater than 50");
    
//  }

 // <,>,<=,>=,==,!=,===,!=  


//  const Score=200
//  if(Score>200){
//     const power="fly"
//     console.log(`user power${power}`);
    
//  }

// const balance=1000
// //  if(balance>500) console.log("test");      // implicite scope 
 

// if(balance<500){
//     console.log("less than");
    
// } else if (balance<750){
//     console.log("less than 750");
//                                              // multiple condition
// } 
// else if(balance<900){
//     console.log("less than 900");
    
// } else{
//     console.log("less than 1200");
    
// }



const userLoggedIn = true
const debitCart=true
const userLoggedInGoggle=false
const UserLoggedInFlipcard=true

if(userLoggedIn && debitCart){
    console.log("allow shopping");
    
}
if(userLoggedInGoggle||UserLoggedInFlipcard){      // or condition
    console.log("user log in");
    
}


