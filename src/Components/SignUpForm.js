import React from 'react'
import Button from './Button'

function SignUpForm({ handleForm }) {
    return (
        <form onSubmit={handleForm} >
            <fieldset className='flex flex-col' >
                <label>
                    Name
                </label>
                <input required type="text" placeholder='John Doe' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label>
                    Email
                </label>
                <input required type="email" placeholder='johndoe@example.com' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label>
                    Telephone
                </label>
                <input required type="tel" placeholder='025 487 6454' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label>
                    Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label>
                    Confirm Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex' >
                <Button style="primary__btn w-full " type="submit" >
                    Sign Up
                </Button>
            </fieldset>
        </form>
    )
}

export default SignUpForm