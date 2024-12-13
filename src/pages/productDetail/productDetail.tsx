import React, { useState } from 'react'
import { ShoppingCart, Heart, Search, ChevronDown, ChevronLeft, Star, Truck, RotateCcw, Shield, ChevronRight } from 'lucide-react'
import Footer from '~/components/footer'

export interface ProductDetailProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice: number
    image: string
    discount: number
    colors: string[]
    description?: string
    features?: string[]
  }
}

const ProductDetail: React.FC = () => {
  const product = 
    {
      id: 1,
      name: "3D™ wireless headset",
      price: 400,
      originalPrice: 500,
      image: "headPhone.jpg",
      discount: 20,
      description: "Headset from Cambodia",
      colors: ['bg-white', 'bg-black', 'bg-gray-500'],
      features: ["3D™ wireless headset", "PS2 DualShock 2 Wireless Controller", "Wired Keyboard & Mouse Combo Pack"] 
    }
  
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Header (same as in App.tsx) */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">eTrade</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6">
              {['Home', 'Shop', 'Pages', 'About', 'Blog', 'Contact'].map((item) => (
                <a key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium hover:text-blue-600">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  className="w-[200px] pl-8 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What are you looking for?"
                  type="search"
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="/shop" className="text-gray-600 hover:text-blue-600">Shop</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-800 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
            />
            {product.discount && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(64 reviews)</span>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${color} ${selectedColor === color ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity:</h3>
              <div className="flex items-center space-x-2">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart and Wishlist */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                Add to Cart
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RotateCcw className="w-6 h-6 text-blue-600" />
                  <span className="text-sm">30 Days Return</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <span className="text-sm">2 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-600">{feature}</li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer (same as in App.tsx) */}
      <Footer/>
    </div>
  )
}

export default ProductDetail

