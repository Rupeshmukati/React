import React, { useState } from 'react'
import './Emp.css'

export default function EmpAdd() {
  const [empId, setempId] =useState ('');
  const [name, setName] =useState ('');
  const [emil, setEmail] =useState ('');
  const [contact, setContact] =useState ('');
  const [password, setPassword] =useState ('');  
  const [role, setRole] =useState ('');
  const [isAdd, setAdd] =useState(false);

  const add = async () => {
    const URL = "http://localhost:8090/emp/add-emp";
      setAdd(true);
      if(empId.length> 0 && name.length>0 && emil.length>0 && contact.length>0 && password.length>0 && role.length>0){
        const playload = {
          "emp_id": empId,
          "emp_name": name,
          "emp_email": emil,
          "emp_contact": contact,
          "emp_password": password,
          "emp_role": role
        }
      let res= await fetch(URL, {
              method: "POST",
              body: JSON.stringify(playload),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
          })
          if(res.status == 200) {
              alert("Emp added")
              setempId('');
              setName('');
              setContact('');
              setEmail('');
              setPassword('');
              setRole('');
              setAdd(false)
              
          } else {
            alert("Please Type Unique ID, Email or Contact Number");
          }

      } else {        
        alert("Please enter data");
      }
  }


  return (
    <div className="addemp"> 
    <h1>Register Employee</h1>
      <form className='empAdd'>
          <label>Emp id</label>
          <input placeholder='Enter Emp. Id' value={empId} onChange={e => {setempId(e.target.value)}} type='number' id='empid' />
            {empId?.length == 0 && isAdd ?  <span>Please Enter Emp Id<br/></span> : ''  } <br/>
          
          <label>Emp Name</label>
          <input placeholder='Enter Emp. name' value={name} onChange={e => {setName(e.target.value)}} type='text' id='empName' />
          {name?.length == 0 && isAdd ?  <span>Please Enter Name<br/></span> : ''  } <br/>
          
          <label>Emp Email</label>
          <input placeholder='Enter Emp. Email' value={emil} onChange={e => {setEmail(e.target.value)}} type='text' id='emp_email' />
          {emil?.length == 0 && isAdd ?  <span>Please Enter Email<br/></span> : ''  } <br/>
          
          <label>Emp Contact no</label>
          <input placeholder='Enter Emp. Contact no' value={contact} onChange={e => {setContact(e.target.value)}} type='number' id='emp_contact' />
          {contact?.length == 0 && isAdd ?  <span>Please Enter contact no<br/></span> : ''  } <br/>
          
          <label>Emp Password</label>
          <input placeholder='Enter Emp. Password' value={password} onChange={e => {setPassword(e.target.value)}} type='text' id='password' />
          {password?.length == 0 && isAdd ?  <span>Please Enter password<br/></span> : ''  } <br/>
          
          <label>Emp Role</label>
          <select value={role} onChange={e => {setRole(e.target.value)}}>
            <option value=''>Select Role</option>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
          {role?.length == 0 && isAdd ?  <span>Please Select role<br/></span> : ''  } <br/>         

          <input type='button' value='Add' onClick={add} />
      </form>
    </div>
  )
}
