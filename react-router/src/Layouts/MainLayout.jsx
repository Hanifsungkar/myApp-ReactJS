import React from "react";
import { Outlet, Link } from 'react-router-dom'

function MainLayout () {
    return (
        <div>
            <nav style={{ display: 'flex', gap: '16px' }}>
                {/* <a href="/">Home</a>
                <a href="/About">About</a> */}
                
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout