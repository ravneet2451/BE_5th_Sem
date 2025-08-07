// function getUsers(URL){
//     //send a request to the URL to get Users data
//     fetch(URL)
//     .then((res) => {
//         console.log(res);
//         return res.json(); 
//     })
//     .then((data) => {
//         console.log(data); 
        
//         // Display data on the webpage
//         displayUsersOnPage(data);
      
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// }



// getUsers("https://jsonplaceholder.typicode.com/users");

let userContainer = document.querySelector('.user-container');


function getUsers(URL){
//send req to this URL to get users data
fetch(URL)
.then((res)=>{
    console.log(res)
    return res.json()
})
.then((data)=>{
    console.log(data)
    data.forEach((user) => {
        displayUser(user);
    });
})
.catch((err)=>{
    console.log(err);
})

}
getUsers('https://jsonplaceholder.typicode.com/users')
function displayUser(user){
//user
let li = document.createElement('li');
li.innerHTML =`   <div class="user-info">
            <h1>${user.name}</h1>
            <p>${user.username}</p>
        </div>
        <div class="user-btn">
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        </div>`
        userContainer.appendChild(li);
}