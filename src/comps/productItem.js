import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsStar, BsStarFill,BsHeart,BsHeartFill } from "react-icons/bs"
import { AppContext } from "../context/shopContext"

function ProducItem(props) {
  let item = props.item;
  let { favs_ar, addRemoveFav } = useContext(AppContext)

  return (
    <div className='product-item col-md-3 p-2'>
      <div className="shadow">
        <div style={{ backgroundImage: `url(${item.img_url || "/images/cover3.jpeg"})` }} className='product-img'>
          {item.qty === 0 ?
            <div className='sold-out'>Sold out!</div> : ""
          }
        </div>
        <div className='p-2'>

          <h4>{item.name}</h4>
          <div>Price: {item.price} NIS</div>
          <div className='text-center my-2'>
            {favs_ar.includes(item.short_id) ?
              <button onClick={() => {
                addRemoveFav(item.short_id)
              }} className='btn btn-warning'>
                <BsHeart className='mb-1' />
              </button> :
              <button onClick={() => {
                addRemoveFav(item.short_id)
              }} className='btn btn-dark'>
                <BsHeartFill className='mb-1' />
              </button>
            }
            <Link className='btn btn-dark w-50' to={"/productInfo/" + item._id}>More info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProducItem