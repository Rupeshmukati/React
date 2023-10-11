import React from 'react'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Emplist from './Emp/Emplist';
import EmpAdd from './Emp/EmpAdd';
import Productadd from './Product/Productadd';
import ProductList from './Product/ProductList';
import Customeradd from './Customer/Customeradd';
import Customerlist from './Customer/Customerlist';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();  
  const logout = () => {
    localStorage.clear();
    alert("logout");
    navigate('/')

  }

  return (
   <div>
      <div className="navbar">
        <div className="dropdown">
            <button className="dropbtn">Emp 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to='/crm/empadd'>Add EMP</Link>
            <Link to='/crm/emplist'>EMP List</Link>
            </div>
        </div> 
        <div className="dropdown">
            <button className="dropbtn">Product 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to='/crm/productadd'>Add Product</Link>
            <Link to='/crm/productlist'>List Product</Link>
            </div>
        </div> 
        <div className="dropdown">
            <button className="dropbtn">Customer 
            <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
            <Link to='/crm/customeradd'>Add Customer</Link>
            <Link to='/crm/customerList'>List Customer</Link>
            </div>
        </div>
        <a onClick={logout}>Logout</a>
      </div>
      <Routes>
          <Route path="/empadd" element={<EmpAdd/>}></Route>          
          <Route path="/emplist" element={<Emplist/>}></Route>
          <Route path="/productadd" element={<Productadd/>}></Route>          
          <Route path="/productlist" element={<ProductList/>}></Route>
          <Route path="/customeradd" element={<Customeradd/>}></Route>          
          <Route path="/customerList" element={<Customerlist/>}></Route>
      </Routes>
    </div>
  )
}
