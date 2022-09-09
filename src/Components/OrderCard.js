import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Popup from './Popup'
import Button from './Button'
import { products } from '../Firebase/products'

function OrderCard({ detail }) {

    const [open, setOpen] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [product, setProduct] = useState(null)

    // console.log(detail)

    useEffect(() => {
        const productArr = products.filter((element) => element.product_id === detail.product_id)

        setProduct({
            ...productArr[0],
            ...detail
        })

    }, [])

    // console.log(product)

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
            <div className="w-full h-fit flex flex-col justify-start px-2 pb-2 rounded overflow-hidden shadow-lg border-2 border-gray-300 gap-2" >
                <div className='w-full h-52 relative' >
                    <Image src={product?.imageUrl.medium} alt="medicine" layout="fill" className='object-cover' />
                </div>
                <div>
                    <div className="w-full h-fit flex gap-2  justify-between">
                        <p> {product?.brand_name} </p>
                        <p> Quantity: {detail?.quantity}</p>
                        <p> Delivery - {`${product?.isDelivery ? "Yes" : "No"}`}</p>
                    </div>
                    <div className="w-full h-fit flex gap-2  justify-between">
                        <p> {product?.user_details?.name} </p>
                        <p> {product?.user_details?.location} </p>
                        <p> {product?.user_details?.tel}</p>
                    </div>
                </div>
                <div className="w-full h-fit flex gap-2  justify-between">
                    <button
                        className="cancel__btn"
                        onClick={() => setCancel(!open)}
                    >
                        Cancel Order
                    </button>
                    <button
                        className="primary__btn"
                        onClick={() => setOpen(!open)}
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
            <Popup open={open} >
                <div className="w-full h-full grid grid-cols-1 text-center gap-5" >
                    <div>
                        <h2>
                            Order Details
                        </h2>
                        <div className="w-full " >
                            <h4>
                                Product details
                            </h4>
                            <Card head="Name" tail={product?.brand_name} />
                            <Card head="Manufacturer" tail={product?.manufacturer_name} />
                            <Card head="Quantity" tail={detail?.quantity} />
                            <Card head="Price" tail={product?.price} />
                        </div>
                        <div>
                            <h4>
                                Customer details
                            </h4>
                            <Card head="Name" tail={product?.brand_name} />
                            <Card head="Telephone" tail={product?.user_details?.tel} />
                            <Card head="Location" tail={product?.user_details?.location} />
                        </div>
                    </div>
                    <Button
                        style="primary__btn w-full"
                        click={() => setOpen(!open)}
                    >
                        Confirm
                    </Button>
                </div>
            </Popup>
            <Popup open={cancel} >
                <div className="w-full h-full grid grid-cols-1 text-center gap-5" >
                    <h5>
                        Are you sure you want to Cancel This Order
                    </h5>
                    <Button
                        style="primary__btn w-full"
                        click={() => setCancel(!cancel)}
                    >
                        Cancel
                    </Button>
                </div>
            </Popup>
        </>
    )
}

export default OrderCard