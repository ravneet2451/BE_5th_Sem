let products=[
    {
        name:"samsung",
        amount:"70000",
        quatity:"10"
    },
    {
        name:"Iphone 16",
        amount:"100000",
        quatity:1
    },
]
// function buyProduct(product_name,cb){
    //some asynchronous operation
    //1.get product detaile from db
    //2.write order detail in user db
//     setTimeout(()=>{
//         console.log("order complete");
//         cb();
//     })
// }
let account_balance=200000;
buyProduct("Iphone 16",function(err,amount){
    // console.log("Product is purchased")
    if(err) return console.log(err)
        console.log(amount)
    deductAmount(amount,function(err,message){
        if(err) return console.log(err);
        console.log(message);
    });

});
// console.log("product is purchased")
function buyProduct(product_name,cb){
    let isproduct=null;
    for(let i=0;i<products.length;i++){
       // console.log(products[i].name==product_name)
        if(products[i].name==product_name){
            isproduct=products[i];
            break;
        }
    }
    if(!isproduct){
        cb("product is not available",null);
    }else{
        cb(null,isproduct.amount);
    }
 
}


function deductAmount(amount,cb){
    if(amount>account_balance){
    cb("your account balance is low",null)
    }
    else{
        account_balance-=amount;
        cb("Your product is purchased")

    }

}

//problem is callback
//callback hell