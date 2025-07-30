// singleton 

// const tinderUser = new Object()
// console.log(tinderUser);

const regularComp = {
    name:'company',
    fullname:{
        userName:{
            firstName:"nikhil",
            lastName:"sawant"
        }
    }
}
console.log(regularComp.fullname);

const obj1 = {
    id:1,
    class:"nikhil"

}
const obj2 = {
    id:1,
    class:"ramesh"
    
}

const newObj = Object.assign({},obj1,obj2)
const newObj = Object(...obj1,...obj2)

.key
.values
.entrise

// ------------------------------------------------------
// object de structuring

const obj4 = {
    id:1,
    class:"nikhil"

}
const {id:no}=obj4
console.log(id);