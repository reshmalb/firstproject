//to  examin the objects
//console.log(document)
//console.log(document.domain)
// console.log(document)
// console.log(document.title)
// console.log(document.head)
// console.log(document.doctype)
//console.log(document.body)
//console.log(document.all)
// console.log(document.all[3])


//GET Element by id
var hdr=document.getElementById("header-title")
console.log(hdr)
hdr.textContent='Hello';
hdr.innerText="Goodbye"
hdr.innerHTML='<h3>Haai</h3>'


// to change style
// hdr.style.borderBottom='solid 3px black'
var hdr2=document.getElementById("main-header")
hdr2.style.borderBottom='solid 3px black';

var additem=document.getElementById("h2id")
additem.style.color="Green"
//Get elements by classname;
var items=document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor="green"
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
var it=document.getElementsByTagName('li')
it[3].style.backgroundColor="orange"