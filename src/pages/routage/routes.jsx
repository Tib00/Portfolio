import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../../components/header/header'
import Home from '../home/home'
import Portfolio from '../portfolio/portfolio'
import Skills from '../skills/skills'
import About from '../about/about'

const Routage = () => {
    return(
        <Router>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </Router>
    )
}

export default Routage