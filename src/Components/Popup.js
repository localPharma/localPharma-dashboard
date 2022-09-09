import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

function Popup({ open, children }) {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        className=" fixed w-full h-full bg-black/60 top-0 z-20 p-10 left-0 flex flex-col justify-center items-center"
                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.9
                        }}
                    >
                        <div className="w-fit h-fit p-5 bg-white rounded shadow-md shadow-white/60" >
                            {children}
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default Popup