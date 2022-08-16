import React from 'react'
import Navigation from './Navigation'


// This file is going to contain the layouts of the page. 
// That is the navigation and the footer
function Layout({ children }) {

    return (
        <>
            <Navigation />
            {children}
        </>
    )
}

export default Layout

