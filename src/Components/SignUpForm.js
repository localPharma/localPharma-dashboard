import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'
import Image from 'next/image'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'

function SignUpForm({ handleForm }) {
    const [showPassowrd, setShowPassowrd] = useState(false)
    const [showConfirmPassowrd, setShowConfirmPassowrd] = useState(false)
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
                <input required name='' type="text" placeholder='John Doe' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Email
                </label>
                <input required name='email' type="email" placeholder='johndoe@example.com' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Telephone
                </label>
                <input required name='' type="tel" placeholder='025 487 6454' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label className='w-full text-left'>
                    Password
                </label>
                <div className='w-full relative' >
                    <input required name='password' type={`${ showPassowrd ? "text" : "password"}`} placeholder='*********' />
                    {
                        showPassowrd ? (
                            <EyeOffIcon
                                className='icon absolute top-2 right-2 text-gray-400/60'
                                onClick={() => setShowPassowrd(false)}
                            />
                        ) : (
                            <EyeIcon
                                className='icon absolute top-2 right-2 text-gray-400/60'
                                onClick={() => setShowPassowrd(true)}
                            />
                        )
                    }
                </div>
            </fieldset>
            <fieldset className='flex flex-col relative'>
                <label className='w-full text-left'>
                    Confirm Password
                </label>
                <div className='w-full relative' >
                    <input required name='confirmpassword' type={`${ showConfirmPassowrd ? "text" : "password"}`} placeholder='*********' />
                    {
                        showConfirmPassowrd ? (
                            <EyeOffIcon
                                className='icon absolute top-2 right-2 text-gray-400/60'
                                onClick={() => setShowConfirmPassowrd(false)}
                            />
                        ) : (
                            <EyeIcon
                                className='icon absolute top-2 right-2 text-gray-400/60'
                                onClick={() => setShowConfirmPassowrd(true)}
                            />
                        )
                    }
                </div>
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