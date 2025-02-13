// const mathLib=require("./mathLib.cjs");
// let somme=mathLib.SOMME(4,12);
// console.log(mathLib.SOMME(4, 12));
// let produit=mathLib.PRODUIT(4,12);
// console.log(produit);
// console.log("introduction a nodeJs");

// const nbr1=215;
// const nbr2=2215;
// console.log(`${nbr1}+ ${nbr2}=${mathLib.SOMME(nbr1,nbr2)}`);
// console.log(`${nbr1}* ${nbr2}=${mathLib.PRODUIT(nbr1,nbr2)}`);

let{SOMME, PRODUIT}=require("./mathLib.cjs")
// console.log(somme(1, 5))
// console.log(produit(10, 5))


const nbr1=215;
const nbr2=2215;
console.log(`${nbr1}+ ${nbr2}=${SOMME(nbr1,nbr2)}`);
console.log(`${nbr1}* ${nbr2}=${PRODUIT(nbr1,nbr2)}`);