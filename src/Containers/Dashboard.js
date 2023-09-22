import React from 'react'
import ProductList from '../Data/ProductList'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='card'>
      {ProductList.map(product => 
         <div>
        <img src={product.thumbnail} height={150} width={180} />
        <h5>{product.title}</h5>
        <h6>Price: {`$${product.price}`}</h6>
        {product.stock > 0 ? <button className='available' onClick={() => navigate(`/product/${product.id}`)}>Available</button>:<button className='ofs'>Out of stock</button>}
        </div>
      )}
    </div>
  )
}
export default Dashboard