import React from 'react'
import Search from "../components/Search"

const Header = () => {



    return (
        <header id="header" className="d-flex flex-column justify-content-center align-items-center    ">
            <h1 className="fs-1 text-white">Book Search</h1>
            <Search/>
        </header>
    )
}

export default Header
