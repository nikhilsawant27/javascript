// Immediately Invoked Function Expression

function chai(){
    console.log(`DB connected`);
    
}                                       // to run function immediatelly global scope popution or declaration avoid so we use
chai()


(function chai(){
    // named iife
    console.log(`DB connected`);
    
})()
chai();             // we have to end first code
(function chai(){
    console.log(`DB connected`);
    
})()
chai();

( ()=>{
    console.log(`DB connected`);
})()

