import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [activeTab, setActiveTab] = useState('description')

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
    }
  }

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData()
    }
  }, [productId, products])

  if (!productData) {
    return <div className="text-center p-10 text-gray-500">Loading product details...</div>
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`Thumbnail ${index}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt={`Main view of ${productData.name}`} />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="Star" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} alt="Star dull" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className=' flex flex-col gap-4 my-8' >
            <p>Select Size</p>
            <div className='flex gap-2' >
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item ===size ? 'border-orange-500' : ''} `} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-600  '>Add to Cart</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-grey500 mt-5 flex flex-col gap-1'>
            <p>100% Original Products</p>
            <p>Pay on delivery might be available</p>
            <p>Easy 7 days returns and exchanges</p>
          </div>
        </div>
      </div>

      {/* Description & Review */}
      <div className='mt-20'>
        <div className='flex'>
          <button 
            onClick={() => setActiveTab('description')} 
            className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === 'description' ? 'border-b-2 border-b-black' : ''}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('reviews')} 
            className={`border px-5 py-3 text-sm cursor-pointer ${activeTab === 'reviews' ? 'border-b-2 border-b-black' : ''}`}
          >
            Reviews (122)
          </button>
        </div>
        <div className='flex flex-col g-4 border px-6 py-6 text-sm text-gray-500'>
          {activeTab === 'description' ? (
            <div>
              <p>Product Details 
Beige Tshirt for men
printed
Longline length
Round neck
Short, regular sleeves
Knitted cotton fabric

Size & Fit
Oversized
The model (height 6') is wearing a size M

Material & Care
Cotton
Machine Wash

Specifications
Fabric
Cotton
Fabric 2
Cotton
Fabric 3
Cotton
Fit
Oversized
Length
Regular
Main Trend
Multi or Variegated Stripes
Multipack Set
Single
Neck Round Neck
</p>
            </div>
          ) : (
            <div>
              <p>The top is absolutely amazing. Soft and Comfortable T-shirt I recently bought this t- shirt and I love it. The fabric is very soft and breathable, perfect for all-day wear. The design and ombre colour style is different from the usual male clothing. It fits well and looks great for both casual and slightly dressed-up occasions. The cloth is purely cotton and a comfortable choice for summers.</p>
            </div>
          )}
        </div>
      </div>

      {/* related products */}
      <div className="mt-10">
        <h2 className="text-xl font-medium mb-6">Related Products</h2>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </div>
    </div>
  )
}

export default Product