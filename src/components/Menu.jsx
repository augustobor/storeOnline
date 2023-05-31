import React from 'react';
import '@styles/menu.scss' 

const Menu = () => {

    return (
        <div className='Menu'>
            <ul>
                <li>
                    <a href='/' className='title'>My Orders</a>
                </li>
                <li>
                    <a href='/'>My Account</a>
                </li>
                <li>
                    <a href='/'>Sign out</a>
                </li>
            </ul>
        </div>

    )
}


export default Menu