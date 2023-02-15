var form=document.getElementById('signIn-form')
form.addEventListener('submit',dosignIn)
var details=document.getElementById('details')
 details.addEventListener('click',removeDetails)


function dosignIn(event) {

    event.preventDefault();
   var inputName=document.getElementById('name').value
   var inputemail=document.getElementById('email').value
   var phoneInput=document.getElementById('phone1').value
   var timeInput=document.getElementById('time1').value
   var dateInput=document.getElementById('date1').value
   var li=document.createElement('li')
   li.className='list-group-item'
   const nameChild=document.createTextNode(inputName+" ")
   const emailChild=document.createTextNode("  "+inputemail)
   const phchild=document.createTextNode("  "+phoneInput+" ")
   const tmchild=document.createTextNode("  "+timeInput)
   const dtchild=document.createTextNode("  "+dateInput)

     li.appendChild(nameChild)
     li.appendChild(emailChild)
     li.appendChild(phchild)
     li.appendChild(dtchild)
     li.appendChild(tmchild)
     var btndel=document.createElement('button')
     btndel.className="btn btn-danger btn-sm  float-right delete"
     btndel.id='DelDetails'
     var btnChild=document.createTextNode('Delete')
     btndel.appendChild(btnChild)
     li.appendChild(btndel)

     var itemList=document.getElementById('details')
     itemList.appendChild(li)
     let storageObj={name:inputName,
                    email:inputemail,
                    phone:phoneInput,
                    time:timeInput,
                    date:dateInput
     }
     let storageObj_serialized=JSON.stringify(storageObj)
     //storing values considering email as unique id
     localStorage.setItem(inputemail,storageObj_serialized)
     let storage_values=JSON.parse(localStorage.getItem(inputemail))
   
     sessionStorage.setItem(inputName,inputemail)
  }
  function removeDetails(e){
    var inputemail=document.getElementById('email').value;
    if(e.target.classList.contains('delete')){     
      if(confirm('Are you sure to delete this user details?')){
          var li=e.target.parentElement;
          details.removeChild(li)
          localStorage.removeItem(inputemail)
          
      }

  }

  }