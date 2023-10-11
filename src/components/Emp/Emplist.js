import React, { useEffect, useState } from 'react';
import './Emp.css';

export default function Emplist() {

  const [empList, setlist] = useState([]);
  const URL = 'http://localhost:8090/emp/get-emp'

  useEffect(()=>{
    getEmpList();
  }, []);

  const getEmpList = async () => {
    let res = await fetch(URL);
    let data =await res.json();
    setlist(data);
   // console.log(data.length);
  }

  return (
<div className="container">
<h1>Employee List</h1>
  <table className="rwd-table">
    <thead>
      <tr>
        <th>Emp. Id</th>
        <th>Emp. Name</th>
        <th>Emp. Email</th>
        <th>Emp. No.</th>
        <th>Emp. Role</th>
      </tr>
      </thead>
      <tbody>
      {
        empList?.map((emp)=>{
        return (
          <tr  key={emp.emp_id}>
            <td data-th="Emp. Id">{emp.emp_id}</td>
            <td data-th="Emp. Name">{emp.emp_name}</td>
            <td data-th="Emp. Email">{emp.emp_email}</td>
            <td data-th="Emp. No.">{emp.emp_contact}</td>
            <td data-th="Emp. Role">{emp.emp_role}</td>
          </tr>)
          })
        }
    </tbody>
  </table>
</div>
  )
}
