import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Loader from './Message'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    
    const dispatch = useDispatch()

    const productsTopRated = useSelector(state => state.productsTopRated)
    const {loading, error, products} = productsTopRated

    useEffect(()=>{
        dispatch(listTopProducts())
    },[dispatch])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' className='bg-dark'>
            {products.map((product,index) => (
                <Carousel.Item key='product._id)'>
                    <Link to={`/product._id`}>
                        <Image src={product.image} alt={product.name} fluid />
                        <Carousel.Caption className='carousel-caption'>
                            {product.name}(₹ {product.price})
                        </Carousel.Caption> 
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel
