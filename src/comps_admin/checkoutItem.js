import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CheckoutItem(props){
  let nav = useNavigate();
  let item = props.item;
  return(
    <tr>
      <td>{props.index+1}</td>
      <td>{item.status}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.total_price}</td>
      <td>{item.products_ar.length}</td>
      <td>
        <button className='badge bg-danger'>del</button>
        <button onClick={() => {
          nav("/admin/checkoutInfo/"+item._id);
        }} to="/" className='badge bg-info'>info</button>
      </td>
    </tr> 
  )
}

export default CheckoutItem;