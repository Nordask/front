/*
function displayUser(user: {firstName: string, lastName: string}) {
    console.log(user.firstName + ' ' + user.lastName);
}

let myUser = {firstName: 'John', lastName: 'Doe'};

displayUser(myUser);
*/

console.log('----------------------------------------------------------');

// Interface

interface User extends Membership{
    firstName: string;
    lastName: string;
    email?: string; // not required
}

function displayUser(user: User) {
    if(user.email) 
        console.log(user.firstName + ' ' + user.lastName + '-' + user.email);
    else
        console.log(user.firstName + ' ' + user.lastName);
    
    if(user.type) {
        console.log(user.firstName + ' has a ' + user.type + ' membership')
    }
}

let myUser = {firstName: 'John',
              lastName: 'Doe', 
              email:'john@gmail.com',
              type: 'Gold'};

displayUser(myUser);

console.log('----------------------------------------------------------');

// Interfaces can be extended

interface Membership {
    type?: string;
}

console.log('----------------------------------------------------------');

// Use interface with functions

interface userFunc {
    (name: string, age: number): string;
}

let getUser: userFunc;

// getUser = (name: string, age: number): string => - don't need define parameter and function types
getUser = (myname, myage) => {
    return myname + ' is ' + myage + ' years old';
}

console.log(getUser('John', 30))