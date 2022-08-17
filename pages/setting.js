import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Button from '../src/Components/Button'
import { AuthContext } from '../src/Components/Context'

function Setting() {
    const { user } = useContext(AuthContext)

    const router = useRouter()
    useEffect(() => {
        if (user === null) {
            router.push('/')
        }
    }, [])
    return (
        <div>
            <main className='h-50vh bg-pharmacy main__bg  '  >

            </main>
            <section className='grid grid-cols-1 gap-5' >
                <div className='w-full flex justify-between items-center' >
                    <h3>
                        Pharmacy Details
                    </h3>
                    <Button style="tetiary__btn" >
                        Edit
                    </Button>
                </div>
                <div className='w-full h-fit' >
                    <form>
                        <fieldset>
                            <label>
                                Name:
                            </label>
                            <input readOnly type="text" placeholder='Legon Medical Pharmacy' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Email:
                            </label>
                            <input readOnly type="email" placeholder='legonmed@gmail.com' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Tel:
                            </label>
                            <input readOnly type="tel" placeholder='024 5847 896' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Location:
                            </label>
                            <input readOnly type="text" placeholder='University Of Ghana' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Opening Time
                            </label>
                            <input readOnly type="text" placeholder='7:30 AM' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Closing Time
                            </label>
                            <input readOnly type="time" placeholder='8:30 PM' value="08:30" />
                        </fieldset>
                        <fieldset>
                            <label>
                                Working Days
                            </label>
                            <input readOnly type="text" placeholder='Monday - Sunday' />
                        </fieldset>
                        <fieldset>
                            <label>
                                Holidays
                            </label>
                            <input readOnly type="text" placeholder='Depends' />
                        </fieldset>
                    </form>
                </div>
            </section>
            <section className='grid grid-cols-1 gap-5'>
                <div className='w-full text-left' >
                    <h3>
                        Preferences
                    </h3>
                </div>
                <div className='w-full grid grid-cols-1 gap-5' >
                    <Button style="secondary__btn w-full">
                        Privacy Policy
                    </Button>
                    <Button style="secondary__btn w-full">
                        User Agreement
                    </Button>
                    <Button style="secondary__btn w-full">
                        Accesibilty
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default Setting