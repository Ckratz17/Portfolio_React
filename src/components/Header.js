import React from "react";
import '../styles/Header.css'

const styles = {
    header: {
        height: '150px',
        display: 'flex',
        alignItems: 'center'
    },
    link: {
        fontFamily: 'Courier New',
        fontSize: '20px',
        color: 'beige'
    }
}

function Nav({ currentPage, handlePageChange }) {
    return (

        <header className="header" style={styles.header}>  

            <div className="name">Christopher Kratz</div>

            <ul className="nav justify-content-end align-items-center">
                <li className="nav-item">
                    <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active': 'nav-link'}
                    style={styles.link}>
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active': 'nav-link'}
                    style={styles.link}>
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}
                    style={styles.link}>
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active': 'nav-link'}
                    style={styles.link}>
                        Resume
                    </a>
                </li>
            </ul>
        </header>      
    )
}

export default Nav