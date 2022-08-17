import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthContext } from '../src/Components/Context'
import SignUpForm from '../src/Components/SignUpForm'
import LoginForm from '../src/Components/LoginForm'
import { useRouter } from 'next/router'
import Button from '../src/Components/Button'
import Image from 'next/image'


function Authentication() {

    const [tab, setTab] = useState("Sign Up")
    const [loading, setLoading] = useState(false)

    const { signUp, signIn } = useContext(AuthContext)

    const router = useRouter()


    const handleSignIn = (e) => {
        e.preventDefault()
        setLoading(true)
        const { email, password } = e.target.elements

        signIn(email.value, password.value, () => setLoading(false))

    }

    const handleSignUp = (e) => {
        e.preventDefault()
        setLoading(true)
        let { email, password, confirmpassword } = e.target.elements

        if (password.value === confirmpassword.value) {
            signUp(email.value, password.value, () => setLoading(false))
        } else {
            alert("Both Passwords must macth")
            confirmpassword.value = ""
            password.value = ''
        }

    }

    const handleTab = () => {
        switch (tab) {
            case "Sign Up":
                return (
                    <AnimatePresence>
                        {
                            tab === "Sign Up" && (
                                <SignUpForm handleForm={handleSignUp} />
                            )
                        }
                    </AnimatePresence>
                )
            case "Sign In":
                return (
                    <AnimatePresence>
                        {
                            tab === "Sign In" && (
                                <LoginForm handleForm={handleSignIn} />
                            )
                        }
                    </AnimatePresence>

                )
            default:
                break;
        }
    }

    return (
        <div className='w-full h-screen  bg-slate-500/50 pt-28 p-10' >
            <Head>
                <title>Auth</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main
                layout
                data-isOpen={tab === "Sign Up"}
                className='p-10 flex flex-col items-center gap-5 w-full h-fit bg-white relative rounded-md'  >
                <h2>
                    {tab === "Sign In" ? "Sign In" : "Sign Up"}
                </h2>
                {handleTab()}
                <fieldset className='flex flex-col' >
                    <label className='w-full text-center text-sm'>
                        {tab === "Sign In" ? "Sign In" : "Sign Up"} with These options Instead
                    </label>
                    <div className='w-full flex justify-around items-center ' >
                        <Button style="w-10 h-10 flex flex-col justify-center items-center">
                            <div className="icon relative">
                                <Image src="/google.png" layout='fill' className='object-contain' />
                            </div>
                        </Button>
                        <Button style="w-10 h-10 flex flex-col justify-center items-center" >
                            <div className="icon relative">
                                <Image src="/fb.png" layout='fill' className='object-contain' />
                            </div>
                        </Button>
                        <Button style="w-10 h-10 flex flex-col justify-center items-center" >
                            <div className="icon relative">
                                <Image src="/twitter.png" layout='fill' className='object-contain' />
                            </div>
                        </Button>
                    </div>
                </fieldset>
                <div>
                    {
                        tab === "Sign Up" ? (
                            <p className='flex gap-2' onClick={() => setTab("Sign In")} >
                                Signed up already ?
                                <span>
                                    Sign In
                                </span>
                            </p>
                        ) : (
                            <p className='flex gap-2' onClick={() => setTab("Sign Up")} >
                                Not a customer yet ?
                                <span >
                                    Sign Up
                                </span>
                            </p>
                        )
                    }
                </div>
                <AnimatePresence>
                    {
                        loading && (
                            <motion.div
                                className='w-full h-full flex flex-col justify-center items-center text-center bg-white/80 rounded-md absolute top-0 left-0'
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1
                                }}
                                exit={{
                                    opacity: 0
                                }}
                            >
                                <h6 className='font-semibold text-gray-500' >
                                    Please Wait
                                </h6>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </motion.main >
        </div >
    )
}

export default Authentication
