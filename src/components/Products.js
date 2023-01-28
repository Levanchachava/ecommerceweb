import React from 'react'
import {useEffect, useState} from 'react'
import EachProduct from './EachProduct'
import products from "./products.css"



function Products() {

    const[product, setProduct] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setProduct(data))
    }, [])
  return (
    <div className='all-product'>
        {product.map(((item) => 
            <EachProduct key={item.id} id={item.id} img={item.image} title={item.title} price={item.price} />
        ))}
    </div>
  )
}



export default Products