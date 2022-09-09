import React, { useState, useEffect } from 'react'
import Button from '../src/Components/Button'
import Popup from '../src/Components/Popup'
import ProductCard from '../src/Components/ProductCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../src/Firebase/firebaseConfig'
import { products } from '../src/Firebase/products'

function Products() {

  const [tab, setTab] = useState("All")
  const [add, setAdd] = useState(false)

  // useEffect(() => {
  //   console.log('here')
  //   const colRef = collection(db, 'pharmacies')
  //   const docSnap = getDocs(colRef)
  //   docSnap.then((snapshot) => {
  //     snapshot.docs.forEach((doc) => (
  //       console.log(doc.id)
  //     ))
  //   })
  //     .catch((error) => {
  //       console.log(error)
  //     });

  // }, [])


  const handleTab = () => {
    switch (tab) {
      case "All":
        return (
          products?.filter((product) => product?.pharmacy_ids.includes('legonpharmacy12')).map((product, index) => (
            <ProductCard detail={product} key={`${index} ${product?.brand_name}`} />
          ))
        )
      case "Cosmetics":
        return (
          <div>
            Cosmetics
          </div>
        )
      case "Covid":
        return (
          <div>
            Covid-19
          </div>
        )
      case "Baby":
        return (
          <div>
            Baby
          </div>
        )
      default:
        break;
    }
  }

  const handleAddProduct = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <div className='pt-12 w-full min-h-screen relative' >
        <div className='w-full h-fit flex items-center justify-center sticky top-14 z-20 bg-white ' >
          <button
            className={`tab__btn ${tab === "All" ? "tetiary__btn" : null} `}
            onClick={() => setTab("All")}
          >
            All
          </button>
          <button
            className={`tab__btn ${tab === "Categories" ? "tetiary__btn" : null} `}
            onClick={() => setTab("Categories")}>
            Categories
          </button>
          <button
            className="fixed bottom-10 right-10 rounded-full p-5 bg-main-green z-20 "
            onClick={() => setAdd(!add)}>
            Add
          </button>
        </div>
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-3" >
          {handleTab()}
        </div>
      </div>
      <Popup open={add} >
        <form onSubmit={handleAddProduct} >
          <fieldset className='flex flex-col' >
            <label className='w-full text-left'>
              Name
            </label>
            <input required name='' type="text" placeholder='Paracetamol' />
          </fieldset>
          <fieldset className='flex flex-col'>
            <label className='w-full text-left'>
              Manufacturer
            </label>
            <input required name='' type="text" placeholder='Ernest Chemist' />
          </fieldset>
          <fieldset className='flex flex-col'>
            <label className='w-full text-left'>
              Stock
            </label>
            <input required name='' type="tel" placeholder='100' />
          </fieldset>
          <fieldset className='flex flex-col'>
            <label className='w-full text-left'>
              Image
            </label>
            <div>
              <input required className="pb-5" name='' type="file" />
            </div>
          </fieldset>
          <fieldset className='flex flex-col'>
            <label className='w-full text-left'>
              Desciption
            </label>
            <textarea required name='' type="text" placeholder='headache pain cure' />
          </fieldset>
          <fieldset className='flex' >
            <Button style="primary__btn w-full " type="submit" >
              Add
            </Button>
            <Button
              style="cancel__btn w-full "
              type="submit"
              click={() => setAdd(!add)}
            >
              Cancel
            </Button>
          </fieldset>
        </form>
      </Popup>
    </>
  )
}

export default Products