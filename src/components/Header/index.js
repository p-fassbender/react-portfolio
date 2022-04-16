import React from 'react';
import Navigation from "../Navigation"

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className='container-fluid'>
                <span className='navbar-brand' href="#"
                    onClick={() => { props.setCurrentPage(props.pages[0]) }}>
                    Preston Fassbender
                </span>
                <Navigation {...props}></Navigation>
            </div>
        </nav>
    )
}

export default Header;