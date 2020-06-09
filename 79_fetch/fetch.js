'use strict'

const uri = {
    typicode : 'https://jsonplaceholder.typicode.com/users',
    reqres   : 'https://reqres.in/api/users'
}
var users = [];


fetch(uri.reqres)
    .then(data => data.json())
    .then(data => listUsers(data.data));

function listUsers(users) {
    let ul = document.querySelector("#users"),
        load = document.querySelector("#loading");
        load.parentNode.removeChild(load);
    users.map((user, i) => {
        let li = document.createElement('li');
        li.innerHTML = `${i}. ${user.last_name}, ${user.first_name}` 
        ul.append(li);
    });
}