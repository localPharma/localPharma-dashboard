import React from 'react'
import Image from 'next/image'

function ProductCard() {
    return (
        <div className="w-full h-fit flex flex-col justify-start px-2 pb-2 rounded overflow-hidden" >
            <div className='w-full h-52 relative' >
                <Image src="/medicine.webp" alt="medicine" layout="fill" className='object-cover' />
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <p> Name :Paracetamol </p>
                <p> Manufacturer: Enest Chemist</p>
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <p> Stock : 10 </p>
                <p> View Details </p>
            </div>
            <div className="w-full h-fit flex gap-2  justify-between">
                <button className="cancel__btn shadow-none" >
                    Delete
                </button>
                <button className="primary__btn">
                    <p> Edit </p>
                </button>
            </div>
        </div>
    )
}

export default ProductCard