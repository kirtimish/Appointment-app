const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();
       
        const userDetails = {
            Name: nameInput.value,
            Email: emailInput.value
        }

        axios.post('https://crudcrud.com/api/27d198a7847549c1b5b507c063c09ebe/appointmentdata',userDetails)
        .then((res) => {
            showUsersOnScreen(res.data);
            // console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
       nameInput.value = "";
       emailInput.value = ""; 

    //     let seri = JSON.stringify(userDetails);

    //     localStorage.setItem(userDetails.Email , seri);

    //     showUsersOnScreen(userDetails);
}

window.addEventListener("DOMContentLoaded", () => {

axios.get('https://crudcrud.com/api/27d198a7847549c1b5b507c063c09ebe/appointmentdata')
.then((res) => {
    // console.log(res.data);
    for(var i=0;i<res.data.length;i++){
        showUsersOnScreen(res.data[i]);
    }
})
.catch((err) => {
    console.log(err)
})
// Object.keys(localStorage).forEach((key) => {

//     const stringifiedDetails = localStorage.getItem(key);
//     const details = JSON.parse(stringifiedDetails);
//     showUsersOnScreen(details);
// })

})

function showUsersOnScreen(user) {
    if (localStorage.getItem(user.Email) !== null) {
        removeUserFromScreen(user.Email);
    }
const parentNode=document.getElementById("users");
const childHTML=`<li id=${user._id}> ${user.Name} : ${user.Email} 
<button onclick=deleteUser("${user._id}")> Delete User </button> 
<button onclick=editDetails("${user._id}","${user.Name}","${user.Email}")>Edit Details </button>
</li>`;
parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editDetails(userId,name,email) {
    document.getElementById("email").value = email;
    document.getElementById("name").value = name;
    deleteUser(userId);
    
}



function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/27d198a7847549c1b5b507c063c09ebe/appointmentdata/${userId}`)
.then((res) => {
    removeUserFromScreen(userId);
})
.catch((err) => {
    console.log(err)
})
    
}

function removeUserFromScreen(userId) {
    const parentNode = document.getElementById('users');
    const deleteChild = document.getElementById(userId);
        if (deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}

