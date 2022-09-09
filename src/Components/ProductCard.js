import React from 'react'
import Image from 'next/image'

function ProductCard({ detail }) {

    console.log(detail)

    return (
        <>
            <div className="w-full h-fit flex flex-col justify-start px-2 pb-2 rounded overflow-hidden gap-3 shadow-lg border-2 border-gray-300" >
                <div className='w-full h-52 relative' >
                    <Image src={detail?.imageUrl.medium} alt="medicine" layout="fill" className='object-cover' />
                </div>
                <div className="w-full h-fit flex flex-col gap-1  justify-between">
                    <p> Name : {detail?.brand_name} </p>
                    <p> Manufacturer: {detail?.manufacturer_name
                    } </p>
                    <p> Stock : 10 </p>
                </div>
                <div className="w-full h-fit flex gap-2  justify-between">
                    <button className="primary__btn w-full ">
                        More Details
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard