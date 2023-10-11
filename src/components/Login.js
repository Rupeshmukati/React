import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [username, setuserName] =useState ();
    const [password, setPassword] =useState ();
    const LOGINURL = 'http://localhost:8090/emp/emp-login';
    const navigate = useNavigate();    

    const checkUserLogin = async() => {
        let playload = {
            email: username,
            password: password
        }
        let res = await fetch(LOGINURL, {
            method: "POST",
            body: JSON.stringify(playload),
            headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
        })
        if(res.status == 200) {
            let user = await res.json();
            console.log(user[0]._id)
            localStorage.setItem('_id', user[0]._id);
            localStorage.setItem('emp_id', user[0].emp_id);
            localStorage.setItem('emp_name', user[0].emp_name);
            alert("login");            
            navigate('/crm');
        } else {
            alert("Please check user name and password");
        }
    }


  return (
        <div className='login'>
        <h2>Login Form</h2>
            <form className="login-form" >
                <label className="label">Email id</label>
                <input type="text" value={username} onChange={e => {setuserName(e.target.value)}} id="uname" name="uname" placeholder="Your Email id.."/>

                <label className="label">password</label>
                <input type="text" value={password} id="pass" onChange={e=> {setPassword(e.target.value)}} name="pass" placeholder="Your password.."/>
                <input type="button" value="Submit" onClick={checkUserLogin} />
            </form>
    </div>
  )
}
