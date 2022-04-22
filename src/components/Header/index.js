import React from 'react';
import Navigation from "../Navigation"

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid'>
                <span className='navbar-brand'
                    onClick={() => { props.setCurrentPage(props.pages[0]) }}>
                    Preston Fassbender
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navigation {...props}></Navigation>
            </div>
        </nav>
    )
}

export default Header;