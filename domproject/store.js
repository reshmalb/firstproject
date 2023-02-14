var form=document.getElementById('signIn-form')
form.addEventListener('submit',dosignIn)

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

     var itemList=document.getElementById('details')
     itemList.appendChild(li)
     localStorage.setItem(inputName,inputemail,phoneInput,dateInput,timeInput)
     sessionStorage.setItem(inputName,inputemail)



  }