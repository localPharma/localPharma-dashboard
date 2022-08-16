import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

function LoginForm({ handleForm }) {
    return (
        <motion.form
            onSubmit={handleForm}
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                delay: 0.3
            }}>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left' >
                    Email
                </label>
                <input required type="email" placeholder='johndoe@example.com' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left' >
                    Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex' >
                <Button style="primary__btn w-full" >
                    Sign In
                </Button>
            </fieldset>
        </motion.form>
    )
}

export default LoginForm