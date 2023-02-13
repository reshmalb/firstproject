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
// var hdr=document.getElementById("header-title")
// console.log(hdr)
// hdr.textContent='Hello';
// hdr.innerText="Goodbye"
// hdr.innerHTML='<h3>Haai</h3>'


// to change style
// hdr.style.borderBottom='solid 3px black'
// var hdr2=document.getElementById("main-header")
// hdr2.style.borderBottom='solid 3px black';


// var additem=document.getElementById("h2id")
// additem.style.color="Green"
// //Get elements by classname;



// var items=document.getElementsByClassName("list-group-item")
// items[2].style.backgroundColor="green"
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
// var it=document.getElementsByTagName('li')
// it[3].style.backgroundColor="orange"

//nth child
// var seconditem=document.querySelector(".list-group-item:nth-child(2)")
// seconditem.style.backgroundColor="green";
// var thirditem=document.querySelector(".list-group-item:nth-child(3)")
// thirditem.style.display="none"
//1.Using QuerySelectorALL change the font color to green for 2nd item in the item list
//2.Choose all the odd elements and make their backgrougreen using QuerySelectorALL﻿
//  var items=document.querySelectorAll('.list-group-item:nth-child(2)');
//   items.style.color="green;"
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='grey'
}