import React from 'react'
import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar(p_objProps) {
    const amount = useSelector(state => state.amount);

    return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${p_objProps.darkMode ? 'dark' : 'light'} bg-${p_objProps.darkMode ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{p_objProps.name}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{p_objProps.aboutName}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-success" disabled >Balance: {amount}</button>
                    </form>
                </div>
            </div>
        </nav>

        {/* <Outlet /> */}
    </>
    )
}

//Define Prop type & is required or not
Navbar.propTypes = {
    name: PropTypes.string.isRequired,
    aboutName: PropTypes.string.isRequired,
}

//Default props value
Navbar.defaultProps = {
    aboutName: "About"
}