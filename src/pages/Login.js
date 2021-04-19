import React from 'react';
import '../scss/Login.scss';
import loginImage from '../images/login/login-image.png';

const login = () => {
    return (
        <div className="main">
           <div className="login-box row w-75">
            <div className="col-8 text-center non-login-section">
                <img className="login-image" src={loginImage} alt=""/>
                <p className="login-text">Proin non tristique quam, nec pharetra velit. Phasellus sed magna mauris. Ut at orci nulla. Maecenas suscipit ex id malesuada molestie. Proin varius congue imperdiet. Phasellus ac urna mollis, venenatis sem non, porttitor sem. Vestibulum id mi sit amet mi condimentum aliquam.</p>
                <button type="button" className="btn btn-green">
                    Know More
                </button>
            </div>
            <div className="col-4 login-section">
                <div className="login_logo">
                    Logo
                </div>

                <form className="login-form mt-5">
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-green text-center">Login</button>
                </div>
                </form>
                <div className="text-center">
                <a className="forgot-password text-center" href="http://google.com" target="_blank" rel="noreferrer">Forgot Password?</a>
                </div>
                

            </div>
           </div>
        </div>
    )
}

export default login
