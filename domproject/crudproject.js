var form=document.getElementById('signIn-form')
form.addEventListener('submit',dosignIn)

window.addEventListener("DOMContentLoaded",()=>
axios.get("https://crudcrud.com/api/2c6adfba735a47f0adb8a96dde7a7ac1/AppointmnetData")
.then(res=>{
 console.log(res)
 for(let i=0;i<res.data.length;i++){
       showOutputOnScreen(res.data[i])
 }

})
.catch(err=>{
 console.log(err)
}))



function dosignIn(event) {

    event.preventDefault();
   var name=document.getElementById('name').value
   var email=document.getElementById('email').value
   var phone=document.getElementById('phone1').value
   var time=document.getElementById('time1').value
   var date=document.getElementById('date1').value

     let storageObj={name,
                    email,
                    phone,                  
                    date,
                    time
                    }

     axios.post("https://crudcrud.com/api/2c6adfba735a47f0adb8a96dde7a7ac1/AppointmnetData",storageObj)
     .then(respose=>console.log(respose))
      .catch(err=>console.log(err))
}
      

function showOutputOnScreen(data){
  const parentNode=document.getElementById('details');
  console.log(data._id)
  const childHtml=`<li  id=${data._id}>${data.name}-${data.email}-
                     ${data.phone}-${data.date}
                     
                     <button  className="btn btn-danger btn-sm  float-right delete" onClick= removeDetails('${data._id}')> Delete</button>
                     <button className="btn btn-primary btn-sm  float-right edit" onClick= editDetails('${data._id}')> Edit</button>
                     </li>`
                     parentNode.innerHTML=parentNode.innerHTML+childHtml;
}






  
  function removeDetails(id){  
             // var id=data._id;
            axios.delete(`https://crudcrud.com/api/2c6adfba735a47f0adb8a96dde7a7ac1/AppointmnetData/${id}`)
            .then(res=>{console.log(res)
              removeUserDetailsFromScreen(id)})
            .catch(err=>console.log(err))
          
         }
            

    function removeUserDetailsFromScreen(id){
      var parentNode=document.getElementById('details')
      var childTobeDeleted=document.getElementById(id)
      if(childTobeDeleted){
        parentNode.removeChild(childTobeDeleted)
      }
    }
  function editDetails(id){  
    axios.get(`https://crudcrud.com/api/2c6adfba735a47f0adb8a96dde7a7ac1/AppointmnetData/${id}`)
.then(res=>{
 console.log(res)
 document.getElementById('name').value=res.data.name; 
 document.getElementById('email').value=res.data.email
  document.getElementById('phone1').value=res.data.phone
   document.getElementById('time1').value=res.data.time
   document.getElementById('date1').value  =res.data.date    
   removeDetails(id);
 
})
.catch(err=>{
 console.log(err)
})
     

 }