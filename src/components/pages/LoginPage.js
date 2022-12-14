import React from 'react'
import { Link } from 'react-router-dom'

import companyLogo from '../../assets/images/deutsche-bank-logo.png'

import '../../App.css'
export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <div className="logo"><img src={companyLogo} alt="DB logo"/></div>
            {/* <h2>Deutsche Bank</h2> */}
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
                <p><Link to="/" className="backto">Back to Homepage</Link></p>
            </footer>
        </div>
    )
}
