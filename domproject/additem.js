//console.log(document.getElementById('addForm'))
//console.log(document.getElementById('items').childNodes)


var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
form.addEventListener('submit',addItem)

// delete event for each delete button in the list item
itemList.addEventListener('click',removeItem)
//console.log(document.getElementById('item'))
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value

    //create new element
    var li=document.createElement('li')
    //add class to the list group item
    li.className="list-group-item"
    //console.log(li)
    //add newItem vakue to the li element
    li.appendChild(document.createTextNode(newItem))
    // create del button element 
    var btnDel=document.createElement('button')
    //add class to the delete button
    btnDel.className="btn btn-danger btn-sm float-right delete"
    //append text value for delete button
    btnDel.appendChild(document.createTextNode('X'));
    //create an edit button
    var btnEdit=document.createElement('button')
    btnEdit.className='btn btn-primary btn-sm float-right edit'
    btnEdit.appendChild(document.createTextNode('Edit'))

    //add delete button to the li item
    li.appendChild(btnDel)
    //add edit button to the li item
    li.appendChild(btnEdit)
    //add li element to the listItem
    itemList.appendChild(li)    
    //console.log(1)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        //console.log(1)
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }

    }
}