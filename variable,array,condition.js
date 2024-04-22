var bottlecolor = "yellow";
var waterquantity = 1;
var isfull = false;

// array 
var items = ["bottle" , "mug" , "paper" , "pen"];
items.indexOf('logens'); //-1

items.push('envelope');
items.push('watch');
items.pop();

// conditionals

if(items.length >= 4){
    console.log('you have too many stuff on you desk.');
}
else if (items.length == 4){
    console.log('you only have one hali items');
}
else{
    console.log('wow!you have a clean desk')
}