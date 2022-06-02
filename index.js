// Write your solution here!
const cats= ['Milo','Otis','Garfield'];

function destructivelyAppendCat(name){
    return cats.push(name);
}

destructivelyAppendCat("Martin");

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Frank");

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    return cats.shift();
}
destructivelyRemoveFirstCat();
 
function appendCat(name){
    return [...cats,name];
}
appendCat("Brenda");

function prependCat(name){
    return [name,...cats];
}
prependCat("Vincent");

function removeLastCat(){
    return cats.slice(0,2);
}
removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}
removeFirstCat();