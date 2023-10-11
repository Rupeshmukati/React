import React, { useState } from 'react';
import './Product.css';

export default function Productadd() {

  const URL = "http://localhost:8090/product/add-product";

  const [proid, setproId] = useState('');
  const [proname, setproName] = useState('');
  const [proprice, setproPrice] = useState('');
  const [prodiscount, setproDiscount] = useState('');
  const [prodesc, setproDesc] = useState('');
  const [isadd, setisAdd] = useState(false);

  const addPro = async () => {

    setisAdd(true);

    if(proid.length> 0 && proname.length>0 && proprice.length>0 && prodiscount.length>0 && prodesc.length>0) {

    let playLoad = {
        p_id: proid,
        p_name: proname,
        p_price: proprice,
        p_disc: prodiscount,
        p_desc: prodesc,
    };
    console.log(playLoad);
    let res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(playLoad),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if(res.status == 200){
      alert("Product added")
      setproId("");
      setproName("");
      setproPrice("");
      setproDiscount("");
      setproDesc("");
      setisAdd(false);
    } else {
      alert("Wait");
    }

  } else {        
    alert("Please enter data");
  }
}
  return (
    <div className="proadd"> 
    <h1>Add Product</h1>
      <form className='proAdd'>
          <label>Product Id</label>
          <input placeholder='Enter Product Id' value={proid} onChange={e => {setproId(e.target.value)}} type='number' id='proid' />
            {proid?.length == 0 && isadd ?  <span>Please Enter Product Id<br/></span> : ''  } <br/>
          
          <label>Product Name</label>
          <input placeholder='Enter Product Name' value={proname} onChange={e => {setproName(e.target.value)}} type='text' id='proname' />
          {proname?.length == 0 && isadd ?  <span>Please Enter Product Name<br/></span> : ''  } <br/>
          
          <label>Product Price</label>
          <input placeholder='Enter Product Price' value={proprice} onChange={e => {setproPrice(e.target.value)}} type='number' id='proprice' />
          {proprice?.length == 0 && isadd ?  <span>Please Enter Product Price<br/></span> : ''  } <br/>
          
          <label>Product Discount</label>
          <input placeholder='Enter Product Discount' value={prodiscount} onChange={e => {setproDiscount(e.target.value)}} type='number' id='prodisc' />
          {prodiscount?.length == 0 && isadd ?  <span>Please Enter Product Discount<br/></span> : ''  } <br/>
          
          <label>Product Description</label>
          <input placeholder='Enter Product Description' value={prodesc} onChange={e => {setproDesc(e.target.value)}} type='text' id='prodesc' />
          {prodesc?.length == 0 && isadd ?  <span>Please Enter Product Description<br/></span> : ''  } <br/>
        

          <input type='button' value='Add' onClick={addPro} />
      </form>
    </div>
  )
}