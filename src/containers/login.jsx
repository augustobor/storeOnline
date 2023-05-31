import React, { useRef } from 'react';
import '../styles/login.scss';

const Login = () => {

    //useRef = crea una referencia del objeto
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }

    return (    
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email addres</label>
                    <input type="text" name="email" placeholder="example@gmail.com" className="input input-email"/>

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password"/>

                    <label htmlFor="new-password" className="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password"/>

                    <a href="/">Forgot my password</a>
                    <input 
                        type="submit" 
                        value="Confirm" 
                        className="primary-button login-button" 
                        onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
}


export default Login;