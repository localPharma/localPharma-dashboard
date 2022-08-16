import React from 'react'

function MessageCard({ message }) {
    return (
        <div className='w-full h-fit flex justify-between items-center' >
            <div className='w-full h-fit flex justify-start items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-red-300' />
                <div>
                    <h5>
                        {message?.name}
                    </h5>
                    <p>
                        {message?.message}
                    </p>
                </div>
            </div>
            {
                message?.read ? null : (
                    <div className='w-2 h-2 bg-red-600 rounded-full' />
                ) 
            }
        </div>
    )
}

export default MessageCard