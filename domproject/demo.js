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

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='grey'
// }
//TRAVERSING NODE
// var itemList=document.querySelector('#items');
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='grey'

// console.log(itemList.parentNode.parentNode.parentNode)
//parentElement
// var itemList=document.querySelector('#items');
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='green'

//  console.log(itemList.parentElement.parentElement.parentElement)

//childNode
// var itemList=document.querySelector('#items');
 //console.log(itemList.childNodes)
//  console.log(itemList.children)
//  itemList.children[0].style.backgroundColor='red'
//FirstChild
//console.log(itemList.firstChild)
//lastchild
//console.log(itemList.lastChild)
//firstElementChild
//console.log(itemList.firstElementChild)
//lastElementChild
//console.log(itemList.lastElementChild)
//nextsiblings
var itemList=document.querySelector('#items');
//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSibling)
//previoussibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)


//CREATE ELEMENT
//Now go head and add HEllo word before Item Lister
var prntnode=document.getElementsByClassName('container')
console.log(prntnode)
prntnode[0].innerHTML='<h6>Hello world</h6>'+prntnode[0].innerHTML


// var newDiv=document.createElement('div')

// newDiv.className='hello'//add class
// newDiv.id='hello'//addid
// newDiv.setAttribute('title','Hello Div')

// var newDivText=document.createTextNode('Hello World')
// newDiv.appendChild(newDivText);
// //console.log(newDiv)
// //place newDiv
// var container=document.querySelector('header .container')
// var h1=document.querySelector('header .h1')
// container.insertBefore(newDiv,h1)
// //newDiv.fontSize='30px'

//Now go head and add HEllo word before Item 1


{/* <h2 class="title">Items</h2>
<ul id="items" class="list-group">
    <li class="list-group-item">Item1</li>
    <li class="list-group-item">Item2</li>
    <li class="list-group-item">Item3</li>
    
</ul> */}


var parentnode=document.getElementById('items');
parentnode.innerHTML='<li>Hello World</li>'+parentnode.innerHTML
