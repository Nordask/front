var a = 55;
// var a = 45; // Cannot redeclare block-scoped variable 'a'
// let a  = 44; // Cannot redeclare block-scoped variable 'a'
/* One of the difference between let and var, that:
 * You will get thrown error, if you try redeclare let variable
 */
console.log(a);
console.log('----------------------------------------------------------');
function showVar() {
    var b = 33;
    if (true) {
        var b = 44;
        console.log(b);
    }
    console.log(b);
}
showVar();
console.log('----------------------------------------------------------');
function showLet() {
    var b = 33;
    if (true) {
        var b_1 = 44;
        console.log(b_1);
    }
    console.log(b);
}
showLet();
console.log('----------------------------------------------------------');
for (var i = 0; i < 5; i++) {
    console.log('Number ' + i);
}
console.log(i);
for (var j = 0; j < 5; j++) {
    console.log('Number ' + j);
}
console.log(j);
console.log('----------------------------------------------------------');
var colors = [];
colors.push('red');
colors.push('blue');
//colors = []; // Cannot assign to 'colors' because it is a constant or a read-only property.
//const colors = []; // Cannot redeclare block-scoped variable 'colors'.
console.log(colors);
