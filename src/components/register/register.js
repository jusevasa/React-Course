import React from 'react';
import './register.css';

import { Link } from 'react-router-dom';

const Register = (props) =>(
    <React.Fragment>
        <h1>Register</h1>
        <Link to='/'>Login</Link>
    </React.Fragment>
);
export default Register;