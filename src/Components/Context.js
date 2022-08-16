import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
export const ScrollContext = createContext()
export const NavContext = createContext()
function Context({ children }) {

    const [showNav, setShowNav] = useState(false)
    const [page, setPage] = useState("Order")
    const [auth, setAuth] = useState(false)


    useEffect(() => {

        if (showNav) {
            if (window.innerWidth >= 768) return
            window.document.body.scroll = "no"
            window.document.body.style.overflow = "hidden"
        } else {
            window.document.body.scroll = "yes"
            window.document.body.style.overflow = "scroll"
        }
    }, [showNav])

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            <NavContext.Provider value={[page, setPage]}>
                <ScrollContext.Provider value={[showNav, setShowNav]}>
                    {children}
                </ScrollContext.Provider>
            </NavContext.Provider>
        </AuthContext.Provider>
    )
}

export default Context