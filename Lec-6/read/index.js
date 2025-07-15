const fs=require('fs');

fs.readFile("../demo.txt","utf-8", function(err, data) {
    if(err)
        return console.log(err);
        console.log(data);
    
})

const f=require('fs');

fs.readFile("../demo1.txt","utf-8", function(err, data) {
    if(err)
        return console.log(err);
        console.log(data);
    
})

