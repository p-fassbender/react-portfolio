import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact"
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
    const [pages] = useState([
        {
            name: 'About Me'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Resume'
        }
    ])
    const [currentPage, setCurrentPage] = useState(pages[0])

    return (
        <div className="container d-flex" style={{ minHeight: "100vh", flexDirection: "column"}}>
            <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            ></Header>
            <main style={{ flex: "1"}}>
                {(() => {
                    switch (currentPage.name) {
                        case 'Contact':
                            return <Contact />
                        case 'Portfolio':
                            return <Portfolio />
                        case 'Resume':
                            return <Resume />
                        default:
                            return <About />
                    }
                })()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;