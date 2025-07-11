let p =  new Promise((resolve , reject)=>{

})
p.then((data)=>{
    console.log(data);
    console.log("promise completed");
})
.catch((err)=>{
    console.log(err)
})
let users=[
    {
        id:1,
        age:16,
        name:"yashu2"
    },
    {
        id:2,
        age:18,
        name:"vanshika"
    }
]
function isEligible(id){
    return new Promise((resolve , reject)=>{
        let user = users.filter((user)=> user.id==id);
if(!user) return reject("no user found");
if(user.age>=18){
    return resolve("eligible for vote")
}
else{
    return reject("not eligible")
}
    })
}
isEligible(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})


let product=[
      {
        name :"IPhone",
        amount:70000,
        quantity:1
    },
    {
        name :"samsung",
        amount:7000,
        quantity:10
    },
]

// function buyProduct(product_name , cb){

//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }


let account_balance = 200000;
buyProduct("IPhone" , function(err , amount) {  
// console.log("product is purchased");
if(err) return console.log(err)
    console.log(amount);
deductAmount(amount , function(err , message){
    if(err) return console.log(err);
    console.log(message);
})
});



