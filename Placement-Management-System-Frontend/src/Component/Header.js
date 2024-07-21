import React from 'react';

export default function Header() {
    const addClass = () => {
        document.body.className = 'menu-is-open';
    }
    return (
        <div>
            <header>
                <div className="header-logo">
                    <a href="index.html">T&P Cell</a>
                </div>
                <a id="header-menu-trigger" href="#0" onClick={addClass}>
                    <span className="header-menu-text">Menu</span>
                    <span className="header-menu-icon"></span>
                </a>
                <nav id="menu-nav-wrap">
                    <a href="#0" className="close-button" title="close">
                        <span>Close</span>
                    </a>
                    <h3>T&P Cell</h3>
                    <ul className="nav-list">
                        <li>
                            <a className="smoothscroll" href="/" title="Go to home">Home</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about" title="">About</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#services" title="">Why recruit at CUTM?</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#placement" title="">Placement Statistics</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#recruiters" title="">Our Recruiters</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact" title="">Contact Us</a>
                        </li>
                        <li className='login-control'>
                            <a className='btn-login' href='/login' style={{ "color": "black" }}>Login</a>
                            <a className='btn-register' href="/register" style={{ "color": "black" }}>Register</a>
                        </li>
                    </ul>
                    <ul className="header-social-list">
                        <li className="animate-intro" title="+91-7008407928">
                            <a href="tel:+917008407928">
                                <i className="fa fa-phone-square"></i>
                            </a>
                        </li>
                        <li className="animate-intro">
                            <a href="mailto:placement@cutm.ac.in">
                                <i className="fa fa-envelope"></i>
                            </a>
                        </li>
                        <li className="animate-intro">
                            <a href="https://www.linkedin.com/school/centurion-university-of-technology-and-management/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CUTMIndia">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
