import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './Context'
import Navigation from './Navigation'

function Layout({ children }) {

    const {user} = useContext(AuthContext)

    return (
        <>
            {
                user ? (
                    <Navigation />
                ) : null
            }
            {children}
        </>
    )
}

export default Layout

