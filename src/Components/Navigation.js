import React, { useContext, useEffect, useState } from 'react'
import { ArchiveIcon, BellIcon, ChatAltIcon, CogIcon, LogoutIcon, MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { AuthContext, NavContext, ScrollContext } from './Context'
import AnchorLink from './AnchorLink'
import Button from './Button'
import messagesArr from '../Firebase/messagesArr'
import MessageCard from './MessageCard'


function Navigation() {

    const [showNav, setShowNav] = useContext(ScrollContext)
    const [page, setPage] = useContext(NavContext)
    const [showMessages, setShowMessages] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [show, handleShow] = useState(false)

    const { logOut } = useContext(AuthContext)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])



    const SideNaveBtn = ({ children, title, number }) => {
        return (
            <AnchorLink route={`/${title}`}>
                <Button
                    style={`dash__btn__primary shadow-none ${page === title ? "primary__btn" : null} `}
                    click={() => setPage(title)}

                >
                    <div className="btn__icon" >
                        {children}
                        <p>
                            {title}
                        </p>
                    </div>
                    {number ? (
                        <div>
                            {number}
                        </div>
                    ) : null}
                </Button>
            </AnchorLink>
        )
    }


    return (
        <>
            <nav className={`w-full h-fit flex justify-between py-3 px-10 fixed top-0 left-0 z-10 ${show ? " bg-white backdrop-blur shadow-md shadow-white" : "bg-transparent"}"`} >
                <div className="flex gap-5" >
                    <div>
                        <AnchorLink route="/">
                            logo
                        </AnchorLink>
                    </div>
                    <div>
                        <SearchIcon
                            className='icon'
                            onClick={() => setShowSearch(!showSearch)} />
                    </div>
                </div>
                <div className="flex justify-end gap-5" >
                    <div>
                        <ChatAltIcon
                            className="icon"
                            onClick={() => setShowMessages(!showMessages)}
                        />
                    </div>
                    <div>
                        <BellIcon className="icon" />
                    </div>
                    <div>
                        <MenuIcon className="icon" onClick={() => setShowNav(!showNav)} />
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {
                    showNav && (
                        <motion.nav className="fixed p-5 top-14 md:hidden right-0 left-0 bottom-0 w-1/2 backdrop-blur z-30 flex flex-col justify-start items-start"
                            initial={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0.9,
                                x: '-100vw'
                            }}
                            animate={{
                                display: 'flex',
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.2
                                },
                                y: 0,
                                x: '0vw'
                            }}
                            exit={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0.9,
                                x: '-100vw'
                            }}
                            onClick={() => setShowNav(!showNav)}
                        >
                            <div>
                                Main Menu
                            </div>
                            <div className="flex flex-col gap-2" >
                                <SideNaveBtn title="orders" number="0" >
                                    <ShoppingCartIcon className='icon' />
                                </SideNaveBtn>
                                <SideNaveBtn title="users" number="0" >
                                    <UserIcon className='icon' />
                                </SideNaveBtn>
                                <SideNaveBtn title="products" number="0" >
                                    <ArchiveIcon className='icon' />
                                </SideNaveBtn>
                                <SideNaveBtn title="setting" >
                                    <CogIcon className='icon' />
                                </SideNaveBtn>
                                <Button
                                    style={`dash__btn__primary shadow-none self-end `}
                                    click={() => logOut()}

                                >
                                    <div className="btn__icon" >
                                        <LogoutIcon className='icon' />
                                        <p>
                                            Log Out
                                        </p>
                                    </div>
                                </Button>
                            </div>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    showSearch && (

                        <motion.nav
                            className='w-80vw h-fit fixed top-14 rounded-md z-30 bg-white left-10 p-1  '
                            initial={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0,
                                y: "-15vh"
                            }}
                            animate={{
                                display: 'flex',
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.2
                                },
                                y: "0vh"
                            }}
                            exit={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0,
                                y: "-15vh"
                            }}
                            tabIndex={1}
                            onBlur={() => setShowSearch(!showSearch)}
                        >
                            <div className='relative w-full h-full flex justify-center ' >
                                <input className='w-full h-full p-5 rounded-md' type="text" placeholder='Search' />
                                <button className='w-16 h-full bg-green-700 flex flex-col justify-center items-center absolute right-0 top-0 rounded-md' >
                                    <SearchIcon className='icon' />
                                </button>
                            </div>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    showMessages && (
                        <motion.nav className={`w-full h-fit fixed top-14 rounded-md flex-col z-30 bg-white p-5 shadow-md`}
                            initial={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0,
                                y: "-15vh"
                            }}
                            animate={{
                                display: 'flex',
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.2
                                },
                                y: "0vh"
                            }}
                            exit={{
                                display: 'hidden',
                                opacity: 0,
                                scale: 0,
                                y: "-15vh"
                            }}
                            tabIndex={0}
                            onBlur={() => setShowMessages(false)}
                        >
                            <div className='w-full flex justify-between items-center' >
                                <h5>
                                    3 new messages
                                </h5>
                                <button>
                                    View All
                                </button>
                            </div>
                            <div className='grid grid-cols-1 gap-2' >
                                {
                                    messagesArr?.map((message, index) => (
                                        <MessageCard key={index} message={message} />
                                    ))
                                }
                            </div>
                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Navigation