import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/firebaseConfig'
import { useRouter } from 'next/router'



export const AuthContext = createContext()
export const ScrollContext = createContext()
export const NavContext = createContext()
function Context({ children }) {

    const [showNav, setShowNav] = useState(false)
    const [page, setPage] = useState("Order")
    const [user, setUser] = useState(null)

    const router = useRouter()


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


    // Firebase authentication 
    const signUp = (email, password, cb) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                setUser(userCredential)
                alert("You are authenticated !")
                cb()
                router.push('/orders')
            })
            .catch((error) => {
                console.log(error.code)
                alert(error.code)
                cb()
            })
    }

    const signIn = (email, password, cb) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                alert("You are signed in")
                cb()
                router.push('/orders')
            })
            .catch((error) => {
                alert(error.code)
                cb()
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null)
            router.push('/')
        }).catch((error) => (
            alert(error.message)
        ))
    }



    return (
        <AuthContext.Provider value={{ signUp, signIn, logOut, user }}>
            <NavContext.Provider value={[page, setPage]}>
                <ScrollContext.Provider value={[showNav, setShowNav]}>
                    {children}
                </ScrollContext.Provider>
            </NavContext.Provider>
        </AuthContext.Provider>
    )
}

export default Context