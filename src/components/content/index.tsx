import { useSelector } from "react-redux"
import useData from "../../hooks/useData"
import { useEffect, useRef, useState } from "react"
import Product from "../product"
import { Data } from "../../interface/data"

export default function Content() {
  useData()
  const { products, error, loading } = useSelector((state: any) => state.product)
  const [visibleProducts, setVisibleProducts] = useState<Data[]>([])
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)
  const ITEMS_PER_PAGE = 12

  // Initialize visible products
  useEffect(() => {
    if (products && products.length > 0) {
      setVisibleProducts(products.slice(0, ITEMS_PER_PAGE))
    }
  }, [products])

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading && !error) {
          // Load more items when the loader element is visible
          loadMoreItems()
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [loaderRef, loading, products, page])

  const loadMoreItems = () => {
    if (products && visibleProducts.length < products.length) {
      const nextPage = page + 1
      const nextItems = products.slice(0, nextPage * ITEMS_PER_PAGE)
      
      setVisibleProducts(nextItems)
      setPage(nextPage)
    }
  }
  return (
    <>
      {loading && visibleProducts.length === 0 ? (
        // Show skeletons on initial load
        'Loading...'
      ) : !error ? (
        <>
          {visibleProducts.map((value: Data) => (
            <Product 
              key={value.id} 
              title={value.title} 
              imagePath={value.imagePath} 
              creator={value.creator} 
              price={value.price} 
              pricingOption={value.pricingOption} 
            />
          ))}
          {/* Loader reference element */}
          {visibleProducts.length < (products?.length || 0) && (
            <div ref={loaderRef} className="loader">
              {loading ?? 'Loading'} {/* Show a few skeletons while loading more */}
            </div>
          )}
        </>
      ) : (
        <div className="error-message">Error loading products</div>
      )}
    </>
  )
}