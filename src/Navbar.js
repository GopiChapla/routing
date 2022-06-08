import React from "react";
import './App.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <a href="/" className="link">Home</a>
            <a href="/about" className="link">About</a>
            <a href="/contact" className="link">Contact</a>
        </div>
    )
}

export default Navbar;