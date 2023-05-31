import React, { useContext } from 'react';
import '@styles/orderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = (product) => {
        removeFromCart(product)
    }


	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image[0]}calt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;