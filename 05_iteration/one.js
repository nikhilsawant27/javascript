//for loop
for (let i= 0; i<= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is best number");
        
        
    }
    // console.log(element  );
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let a = 1; a <=10; a++) {
        // console.log(`inner loop ${a} and outer loop ${i}`);
        
        // console.log(i + '*' + a +'=' + i*a);
        
        
    }
}

// let myArray =["flash","batamn","superman"]
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element); 
// }

// break & continue
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log("detected 5");
//         break   
//     }
//     console.log(`value of i is${index}`);
    
    
// }
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("detected 5");
        continue   
    }
    console.log(`value of i is${index}`);
    
    
}