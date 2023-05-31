import React from 'react';
import Header from '../components/Header'
import ProductList from '../containers/productList';

const Home = () => {
    return (
        <div>            
            <Header></Header>
            <ProductList></ProductList>
        </div>
    )
}

export default Home