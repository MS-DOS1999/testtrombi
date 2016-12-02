var fn_init = function () {

let lignesCdes = [];
let clients = [{name:"client1", code:"cl1"}, {name:"client2", code:"cl2"}];
let TVA = [2, 10, 20.6];

for (let i = 0; i < 1000; i++) {
 let idxTva = Math.round(Math.random()*(TVA.length - 1)); // valeur aleatoire entre 0 et 2 du tableau TVA cad 0 1 et 2
 let myTva = TVA[idxTva];
 let idxclient = Math.round(Math.random()*(clients.length - 1));// -1 car longueur du tableau demarre a 0 et math round inutile car c'est des donnees client
 let myclient = clients[idxclient];

 let montHT = Math.random()*1000;
 lignesCdes.push([myclient, myTva, montHT]);
}
 return lignesCdes;
}
console.log(fn_init());