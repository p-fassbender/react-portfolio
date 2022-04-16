import React from "react";
import Contact from './components/Contact'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
    return (
        <>
        <Header></Header>
        <Navigation></Navigation>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
        </>
    );
}

export default App;
