/*
function displayUser(user: {firstName: string, lastName: string}) {
    console.log(user.firstName + ' ' + user.lastName);
}

let myUser = {firstName: 'John', lastName: 'Doe'};

displayUser(myUser);
*/
console.log('----------------------------------------------------------');
function displayUser(user) {
    if (user.email)
        console.log(user.firstName + ' ' + user.lastName + '-' + user.email);
    else
        console.log(user.firstName + ' ' + user.lastName);
    if (user.type) {
        console.log(user.firstName + ' has a ' + user.type + ' membership');
    }
}
var myUser = { firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    type: 'Gold' };
displayUser(myUser);
console.log('----------------------------------------------------------');
console.log('----------------------------------------------------------');
var getUser;
// getUser = (name: string, age: number): string => - don't need define parameter and function types
getUser = function (myname, myage) {
    return myname + ' is ' + myage + ' years old';
};
console.log(getUser('John', 30));
