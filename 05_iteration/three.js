// for of

const arr=[1,2,3,4,5]


for (const num of arr) {           // declare variable and where to declare
    // console.log(num); 
}

const greeting ="hello world"
for (const greet of greeting) {
    // console.log(`each character is ${greet}`);
    
    
}


// MAPS

const map = new Map()
map.set ('IN',"INDIA")
map.set ('USA',"UNITED STAES OF INDIA")
map.set ('FR',"FRANCE")
map.set ('IN',"INDIA")

// // console.log(map);
// // for (const[ key , value] of map) {
// //     console.log(key,value);   
// }

const myObject={
    'game1':'cs',
    'game1': 'batman'
    
}
for (const key of myObject) {
    console.log(`${key} standard ranking ${myObject[key]}`);
    
    
}