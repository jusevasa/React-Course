import React from 'react';
import './login.css';

import { Link } from 'react-router-dom';

const Login = (props) =>(
    <React.Fragment>
        <h1>Login</h1>
        <Link to='/register'>Register</Link>
        <Link to='/home'>Login</Link>
    </React.Fragment>
);

export default Login;