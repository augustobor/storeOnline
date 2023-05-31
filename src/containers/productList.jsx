import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/productList.scss';

import useGetProducts from '@hooks/useGetProducts';

const API_original = 'https://api.escuelajs.co/api/v1/products';
const API = 'https://api.escuelajs.co/api/v1/categories';

const ProductList = () => {
	
	const response = useGetProducts(API_original)
	const products = response.filter((product) => product.category.id === 2)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products && products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;

