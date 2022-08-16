import React from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

function SignUpForm({ handleForm }) {
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
            }}
        >
            <fieldset className='flex flex-col' >
                <label className='w-full text-left'>
                    Name
                </label>
                <input required type="text" placeholder='John Doe' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Email
                </label>
                <input required type="email" placeholder='johndoe@example.com' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Telephone
                </label>
                <input required type="tel" placeholder='025 487 6454' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Confirm Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex' >
                <Button style="primary__btn w-full " type="submit" >
                    Sign Up
                </Button>
            </fieldset>
        </motion.form>
    )
}

export default SignUpForm