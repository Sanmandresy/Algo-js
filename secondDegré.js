const input = require("prompt-sync")();
let print = (string) => console.log(string);
//Variable initialisation
var a,b,c;
let delta,bp,deltaPrime,deltaRoot,x1,x2;




a = +input("A value for 'a' : ");
b = +input("A value for 'b' : ");
c = +input("A value for 'c' : ");


if(a == 0 && b == 0){
    print("Not a quadratic equation!");
}
else if(a == 0){
    print(`Not a quadratic equation but a first degree equation with x = ${-c/b}`);
}
else {
    delta = (b**2) - 4*(a*c);
    bp = b/2;
    deltaPrime = (bp**2) - (a*c);
    print(`You have a quadratic equation : (${a})x² + (${b})x + (${c})`);
    var choice = input("Do you want to use delta or delta prime ? : ");
    switch (choice) {
        case "delta":
                if( b%2 == 0) print("Please choose delta prime!");
                else{
                    deltaRoot = Math.sqrt(delta);
                    x1 = (-b + deltaRoot)/(2*a);
                    x2= (-b - deltaRoot)/(2*a);
                    if(delta < 0) print(`delta = ${delta}, so no solution!`);
                    else if(delta == 0) print(`delta = ${delta}, and x1 = x2 = ${x1}`);
                    else print(`delta = ${delta}, with x1 = ${x1} and x2 = ${x2}.`);
                }
            break;
        case "delta prime" || "deltap" || "deltaprime":
            if( b%2 != 0) print("Please choose delta!");
            else{
                deltaRoot = Math.sqrt(deltaPrime);
                x1 = (-1*bp + deltaRoot)/(a);
                x2= (-1*bp - deltaRoot)/(a);
                if(deltaPrime < 0) print(`delta prime = ${deltaPrime}, so no solution!`);
                else if(deltaPrime == 0) print(`delta prime = ${deltaPrime}, and x1 = x2 = ${x1}`);
                else print(`delta prime = ${deltaPrime}, with x1 = ${x1} and x2 = ${x2}.`);
            }
            break;

        default: print("Be serious!");
            break;
    }
}