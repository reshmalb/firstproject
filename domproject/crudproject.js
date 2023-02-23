var form=document.getElementById('signIn-form')
form.addEventListener('submit',dosignIn)
var details=document.getElementById('details')
details.addEventListener('click',removeDetails)
details.addEventListener('click',editDetails)


function dosignIn(event) {


    event.preventDefault();
   var name=document.getElementById('name').value
   var email=document.getElementById('email').value
   var phone=document.getElementById('phone1').value
   var time=document.getElementById('time1').value
   var date=document.getElementById('date1').value
//    var li=document.createElement('li')
//    li.className='list-group-item'
//    const nameChild=document.createTextNode(inputName+" ")
//    const emailChild=document.createTextNode("  "+inputemail)
//    const phchild=document.createTextNode("  "+phoneInput+" ")
//    const tmchild=document.createTextNode("  "+timeInput)
//    const dtchild=document.createTextNode("  "+dateInput)

//      li.appendChild(nameChild)
//      li.appendChild(emailChild)
//      li.appendChild(phchild)
//      li.appendChild(dtchild)
//      li.appendChild(tmchild)
//      var btndel=document.createElement('button')
//      btndel.className="btn btn-danger btn-sm  float-right delete"
//      btndel.id='DelDetails'
//      var btnChild=document.createTextNode('Delete')
//      btndel.appendChild(btnChild)
//      li.appendChild(btndel)
//       var btnEdit=document.createElement('button')
//       btnEdit.className="btn btn-primary btn-sm float-right edit"
//       var editChild=document.createTextNode('Edit')
//       btnEdit.appendChild(editChild)
//       li.appendChild(btnEdit)
//      var itemList=document.getElementById('details')
//      itemList.appendChild(li)
     let storageObj={name,
                    email,
                    phone,                  
                    date,
                    time
                    }

     axios.post("https://crudcrud.com/api/b700b36ad7b7452b99174ae1ae647e97/AppointmnetData",storageObj)
     .then(respose=>console.log(respose))
      .catch(err=>console.log(err))
}
       window.addEventListener("DOMContentLoaded",()=>
       axios.get("https://crudcrud.com/api/b700b36ad7b7452b99174ae1ae647e97/AppointmnetData")
       .then(res=>{
        console.log(res)
        for(let i=0;i<res.data.length;i++){
           showOutput(res.data[i])
        }

       })
       .catch(err=>{
        console.log(err)
       }))

function showOutput(data){
    var li=document.createElement('li')
   li.className='list-group-item'
 li.appendChild(document.createTextNode(data._id))

   li.appendChild(document.createTextNode(data.name))
   li.appendChild(document.createTextNode(data.email))
   li.appendChild(document.createTextNode(data.phone))
   li.appendChild(document.createTextNode(data.date))
   li.appendChild(document.createTextNode(data.time))
   var btndel=document.createElement('button')
     btndel.className="btn btn-danger btn-sm  float-right delete"
     btndel.id='DelDetails'
     var btnChild=document.createTextNode('Delete')
     btndel.appendChild(btnChild)
     li.appendChild(btndel)
      var btnEdit=document.createElement('button')
      btnEdit.className="btn btn-primary btn-sm float-right edit"
      var editChild=document.createTextNode('Edit')
      btnEdit.appendChild(editChild)
      li.appendChild(btnEdit)
     var itemList=document.getElementById('details')
     itemList.appendChild(li)

  

}





    //  let storageObj_serialized=JSON.stringify(storageObj)
    //  //storing values considering email as unique id
    //  localStorage.setItem(inputemail,storageObj_serialized)
    //  let storage_values=JSON.parse(localStorage.getItem(inputemail))
   
    //  sessionStorage.setItem(inputName,inputemail)
  
  function removeDetails(e){
    if(e.target.classList.contains('delete')){
        //console.log(1)
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
            var id=li.childNodes[0]
            axios.delete("https://crudcrud.com/api/b700b36ad7b7452b99174ae1ae647e97/AppointmnetData"/+id)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }       

    }
    window.addEventListener("DOMContentLoaded",()=>
    axios.get("https://crudcrud.com/api/b700b36ad7b7452b99174ae1ae647e97/AppointmnetData")
    .then(res=>{
     console.log(res)
     for(let i=0;i<res.data.length;i++){
        showOutput(res.data[i])
     }

    })
    .catch(err=>{
     console.log(err)
    }))

  }
  function editDetails(e){
    var inputemail=document.getElementById('email').value;
    if(e.target.classList.contains('edit')){
          var userDetails= JSON.parse(localStorage.getItem(inputemail))
          //POPULATE THE INPUT BOXES        
          document.getElementById('name').value=userDetails.name; 
          document.getElementById('email').value=userDetails.email
           document.getElementById('phone1').value=userDetails.phone
            document.getElementById('time1').value=userDetails.time
            document.getElementById('date1').value  =userDetails.date       
             var li=e.target.parentElement;
             details.removeChild(li)
             localStorage.removeItem(inputemail)
          
      }


  }