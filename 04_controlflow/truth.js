const userEmail="nikhil.@gmail.com"

if(userEmail){
    console.log("got useremail");
    
}else{
    console.log("dont have email");
}

// false values
// false , 0 ,-0,BigIn 0n,"",null,undefined,NAN,

// truthy values
// "0", 'false'," ",[],{},function(){}

// NULLISH COALESCING OPERATOR
   // made for null and undefined
let val1;
// val1=55?? 10
val1=null??10
console.log(val1);

// Terniary operator

// condition ? true:false

const icetea=100
icetea<=80?console.log("less than 80"):console.log("less than 100");


