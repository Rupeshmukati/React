import React, { useEffect, useState } from 'react';
import './Product.css';

export default function ProductList() {

  const [proList, setlist] = useState([]);
  const URL = 'http://localhost:8090/product/get-product'

  useEffect(()=>{
    getProList();
  }, []);

  const getProList = async () => {
    let res = await fetch(URL);
    let data =await res.json();
    setlist(data);
  }

  return (
<div className="container">
<h1>Product List</h1>
  <table className="rwd-table">
    <thead>
      <tr>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Disc.</th>
        <th>Product Desc.</th>
      </tr>
      </thead>
      <tbody>
      {
        proList?.map((product)=>{
        return (
          <tr  key={product.emp_id}>
            <td data-th="Product Id">{product.p_id}</td>
            <td data-th="Product Name">{product.p_name}</td>
            <td data-th="Product Price">{product.p_price}</td>
            <td data-th="Product Disc.">{product.p_disc}</td>
            <td data-th="Product Desc.">{product.p_desc}</td>
          </tr>)
          })
        }
    </tbody>
  </table>
</div>
  )
}

