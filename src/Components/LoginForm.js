import React from 'react'
import Button from './Button'

function LoginForm({ handleForm }) {
    return (
        <form onSubmit={handleForm} >
            <fieldset className='flex flex-col'>
                <label>
                    Email
                </label>
                <input required type="email" placeholder='johndoe@example.com' />
            </fieldset>
            <fieldset className='flex flex-col'>
                <label>
                    Password
                </label>
                <input required type="password" placeholder='*********' />
            </fieldset>
            <fieldset className='flex' >
                <Button style="primary__btn w-full" >
                    Sign In
                </Button>
            </fieldset>
        </form>
    )
}

export default LoginForm