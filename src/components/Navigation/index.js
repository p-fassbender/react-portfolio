import React, { useEffect } from "react";

function Navigation(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => { document.title = currentPage.name }, [currentPage]);

    return (
        <div className='collapse navbar-collapse justify-content-end' id="navbarSupportedContent">
            <ul className='navbar-nav'>
                {pages.map((page) => (
                    <li key={page.name} className='nav-item mx-3'>
                        <span onClick={() => { setCurrentPage(page) }}>
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation;