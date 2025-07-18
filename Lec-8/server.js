const express = require('express');
const app = express(); 

app.get("/" ,(req, res) => {
    console.log(req);
    
//   res.send('Hello, World!'); //text
// res.send('<h1>Hello, World!</h1>');//html
    res.json({ 
        name:"Siya",
        address:"Delhi",
        isLogin:true
     }); //json    

});



//path param/variable!
//1.params
app.get("/user/:id", (req, res) => {
    console.log(req.params.id); // { id: 'someValue' }
    let id = req.params.id;

    res.send(id); //text
}); 
//2.query parameter;
app.get("/blogs", (req, res) => {
    console.log(req.query); // { search: 'queryValue' } 
    let name= req.query.name;
    let desc= req.query.desc;
    res.send(`Name: ${name}`);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});