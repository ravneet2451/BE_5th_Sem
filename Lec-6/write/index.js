const fs=require("fs");


fs.writeFile("../demo.txt","Hello World!",function(err){
    if(err)
        return console.error(err);
        console.log("sucesss!!")
    
    
})
const f=require("fs");
fs.writeFile("../final.txt","../demo.txt,../demo1.txt",function(err){
    if(err)
        return console.error(err);
        console.log("sucesss!!")
    
    
})