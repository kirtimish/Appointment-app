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

        axios.post('https://crudcrud.com/api/655763491bef46a3838756764e195b7d/appointmentdata',userDetails)
        .then((res) => {
            showUsersOnScreen(res.data);
            // console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
    //    nameInput.value = "";
    //    emailInput.value = ""; 

    //     let seri = JSON.stringify(userDetails);

    //     localStorage.setItem(userDetails.Email , seri);

    //     showUsersOnScreen(userDetails);
}

window.addEventListener("DOMContentLoaded", () => {

// axios.get('https://crudcrud.com/api/655763491bef46a3838756764e195b7d/appointmentdata')
// .then((res) => {
//     console.log(res.data);
// })
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
const childHTML=`<li id=${user.Email}> ${user.Name} : ${user.Email} 
<button onclick=deleteUser("${user.Email}")> Delete User </button> 
<button onclick=editDetails("${user.Email}","${user.Name}")>Edit Details </button>
</li>`;
parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


function editDetails(email,name) {
    document.getElementById("email").value = email;
    document.getElementById("name").value = name;
    deleteUser(email);
}



function deleteUser(emailId) {
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId) {
    const parentNode = document.getElementById('users');
    const deleteChild = document.getElementById(emailId);
        if (deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}

