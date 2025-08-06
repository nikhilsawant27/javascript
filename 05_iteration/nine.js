// reduce js
const myNums=[1,2,3,4,]

// const myTotal=myNums.reduce( ( acc,curval)=>{
//     console.log(` acc${acc} and curval:${curval}`);
    
//      return acc+curval
// },0)


// const myTotal=myNums.reduce( (acc,curval) => acc+curval,4)
// console.log(myTotal);


const course=[
    {
        itemname:"js course",
        price:2999

    },
    {
        itemname:"java course",
        price:5999

    },
    {
        itemname:"data science course",
        price:12999

    }
]



const shoppingCart=course.reduce( (acc,item)=>acc+item.price,0)
console.log(shoppingCart);
