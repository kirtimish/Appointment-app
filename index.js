function storedatainLocalstorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phnNumber = event.target.phnNumber.value;
    
    const user = {
        name,
        email,
        phnNumber
    }

    var userString = JSON.stringify(user);

    localStorage.setItem(user.name, userString);

    var userParsed = JSON.parse(userString);

    name.value = '';
    email.value = "";
    phnNumber.value = "";

    var li = document.createElement('li');
    var listofUsers = document.getElementById('listofUsers');

    li.className = "user-details";

    var litextNode = document.createTextNode(userParsed.name + "  " + userParsed.email + "  " + userParsed.phnNumber);
    li.appendChild(litextNode);
    listofUsers.appendChild(li);
    
}
