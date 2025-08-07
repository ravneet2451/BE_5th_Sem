const signupFom = document.querySelector('#user');
const email= document.querySelector('#email');
const password= document.querySelector('#password');


function addUser(email,password){
    let newUser={
        email: email,
        password: password
    }
    fetch('/user', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            if(data.success){
                alert(data.message);
                signupFom.reset();
            } else {
                alert(data.error);
                signupFom.reset();
            }
        })
        .catch(err=> {
            console.error(err);
        });

};
signupFom.addEventListener('submit', function(event){
    event.preventDefault();
    addUser(email.value, password.value);
});
