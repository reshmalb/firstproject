//console.log(document.getElementById('addForm'))
//console.log(document.getElementById('items').childNodes)


var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')
//var addDetail=document.getElementById('description')
//add event for submit button
form.addEventListener('submit',addItem)
// delete event for each delete button in the list item
itemList.addEventListener('click',removeItem)
//fiter event for search item
filter.addEventListener('keyup',filterItems)
//add event for description
//addDetail.addEventListener('submit',addDescription)

//console.log(document.getElementById('item'))
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value
    var description=document.getElementById('description').value;
    console.log(newItem,description)
  
    //create new element
     var li=document.createElement('li')
         //add class to the list group item
     li.className="list-group-item"                
      
      //add newItem value to the li element
      const newChild=document.createTextNode(newItem)
      const descriptionNode=document.createTextNode(description)
      li.appendChild(newChild)
      li.appendChild(descriptionNode)       

   var items = itemList.getElementsByTagName('li');
    // create del button element 
    var btnDel=document.createElement('button')
    //add class to the delete button
    btnDel.className="btn btn-danger btn-sm  float-right delete"
    //append text value for delete button
    btnDel.appendChild(document.createTextNode('X'));
    //create an edit button
    var btnEdit=document.createElement('button')
    btnEdit.className='btn btn-primary btn-sm  float-right edit'
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
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    var description=document.getElementById('description').value;
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var descriptionText=item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ||
      descriptionText.toLowerCase().indexOf(text) != -1){ 
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
//   function addDescription(e){

//   }
