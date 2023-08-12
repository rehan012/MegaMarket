import ProductList from '../components/product-list';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import { addToCartAC, initializeProductsAC,initializeUserAC } from '../action';
import { useEffect } from 'react';


function Home() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const cart = useSelector(state => state.cart.items);

    const addToCart = (product) => {
        dispatch(addToCartAC(product))

    }

    useEffect(()=>{
        dispatch(initializeUserAC())
        dispatch(initializeProductsAC())
        
    },[])

    return (
        <div>
            <Navbar cartCount={cart.length} />
            <Carousel />
            <ProductList products={products} addToCart={addToCart} />
            <Footer />

        </div>
    );
}

export default Home;