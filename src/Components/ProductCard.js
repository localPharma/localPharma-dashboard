import React, { useState } from 'react'
import Image from 'next/image'
import Popup from './Popup'
import Button from './Button'

function ProductCard({ detail }) {

    const [open, setOpen] = useState(false)

    const Card = ({ head, tail }) => (
        <div className="w-full flex justify-start items-center gap-3 " >
            <h6>
                {head}
            </h6>
            <p>{tail}</p>
        </div>
    )

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
                    <button
                        className="primary__btn w-full "
                        onClick={() => setOpen(!open)}
                    >
                        More Details
                    </button>
                </div>
            </div>
            <Popup open={open} >
                <div className="w-full h-full grid grid-cols-1 text-center gap-5" >
                    <div>
                        <h2>
                            Product Details
                        </h2>
                        <div className="w-full " >
                            <Card head="Name" tail={detail?.brand_name} />
                            <Card head="Manufacturer" tail={detail?.manufacturer_name} />
                            <Card head="Quantity" tail={detail?.quantity} />
                            <Card head="Price" tail={detail?.price} />
                            <Card head="Category" tail={detail?.category} />
                            <div>
                                <h6>
                                    Usage
                                </h6>
                                {
                                    detail?.usage.map((use, index) => (
                                        <p key={index} >{use}</p>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className="w-full grid grid-cols-2" >
                        <button
                            className="cancel__btn"
                            onClick={() => setOpen(!open)}
                        >
                            Delete
                        </button>
                        <Button
                            style="primary__btn w-full"
                            click={() => setOpen(!open)}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </Popup>
        </>
    )
}

export default ProductCard