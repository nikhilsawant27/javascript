

if(true){
  let s =20
 const e = 30
   var f = 40
}

// console.log(s);
// console.log(e);
// console.log(f);         // that why var is avoided

///      nested scope

// function one(){
//     const userName = "hitesh"
//     function two (){
//         const website = "w3schoole.com"
//     //     console.log(userName);
    // }
    // console.log(website);
//     two()
    
// }
// one()

// +++++++++++++++++++++ interesting+++++++++++++++

function addOwo(num){
    return num+4
}
addOwo(3)                                 // two ways function is declare


const addTwo = function(num){
    return num+3
}

addTwo(6) 