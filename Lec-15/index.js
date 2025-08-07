const express= require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/user', (req, res) => {
    try {
         const email=req.body.email;
    const password=req.body.password;
    let newUser = {
        email: email,
        password: password
    };
    console.log(`Email: ${email}, Password: ${password}`);
res.json({
    success: true,
    data:newUser,
    message: 'User added successfully!'
    });
        
    } catch (error) {
        res.json({
            success: false,
            message: 'Error adding user',

        })
    }
})
   

app.listen(3300, () => {  
    console.log('Server is running on port 3300');
}); 