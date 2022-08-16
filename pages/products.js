import React, { useState } from 'react'
import ProductCard from '../src/Components/ProductCard'

function Products() {

  const [tab, setTab] = useState("All")

  const handleTab = () => {
    switch (tab) {
      case "All":
        return (
          <div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
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

  return (
    <div className='pt-12 w-full min-h-screen relative' >
      <div className='w-full h-fit flex items-center ' >
        <button
          className="tab__btn"
          onClick={() => setTab("All")}
        >
          All
        </button>
        <button
          className="tab__btn"
          onClick={() => setTab("Cosmetics")}>
          Cosmetics
        </button>
        <button
          className="tab__btn"
          onClick={() => setTab("Covid")}>
          Covid
        </button>
        <button
          className="tab__btn"
          onClick={() => setTab("Baby")}>
          Baby
        </button>
      </div>
      <div>
        {handleTab()}
      </div>
    </div>
  )
}

export default Products