import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5 bg-dark text-white h-20'>
            <p sticky="down"><small>copyright@ {year}</small></p>
        </footer>
    );
};

export default Footer;