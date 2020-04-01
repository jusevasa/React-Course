import React from 'react';
import './home.css';
import Footer from './../footer/footer';
import Header from './../header/header';

import { Link } from 'react-router-dom';

const Home = (props) =>(
    <React.Fragment>
        <Header />
            <h1>Home</h1>
            <Link to='/'>salir</Link>
        <Footer />
    </React.Fragment>
);

export default Home;
