import React from 'react'
import Image from 'next/image'

function OrderCard() {
    return (
        <div className="w-full h-fit flex flex-col justify-start px-2 pb-2 rounded overflow-hidden" >
            <div className='w-full h-52 relative' >
                <Image src="/medicine.webp" alt="medicine" layout="fill" className='object-cover' />
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <p> Paracetamol </p>
                <p> Quantity: 5</p>
                <p> Delivery - Yes</p>
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <p> Gates Vert </p>
                <p> Dansoma </p>
                <p> 050 7823 987</p>
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <button className="cancel__btn" >
                    Cancel Order
                </button>
                <button className="primary__btn">
                    <p> Confirm Order </p>
                </button>
            </div>
        </div>
    )
}

export default OrderCard