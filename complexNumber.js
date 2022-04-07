const input = require("prompt-sync")();
let print = (string) => console.log(string);
let a,b,z;

a = +input("Give a value for 'a' : ");
b = +input("Give a value for 'b' : ");
r = (a**2) + (b**2);

if(a == 0 && b == 0) print("Not a complex number");
else if(a == 0){
    print(`You have a complex number : i(${b}), with modulus r = squareroot(${r})`);
}
else if(b == 0){
    print(`You have a complex number : (${a}), with modulus r = squareroot(${r})`);
}
else{
    print(`You have a complex number : ${a} + i(${b}), with modulus r = squareroot(${r})`)
}