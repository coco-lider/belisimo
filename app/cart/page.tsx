"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Router from "next/router"

interface CartItem {
  id: string
  name: string
  description?: string
  price: number
  quantity: number
  image: string
}

interface RecommendedProduct {
  id: string
  name: string
  price: number
  image: string
  category: string
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Pepperoni rollar 12 ta",
    price: 35000,
    quantity: 1,
    image: "/placeholder.svg?height=60&width=60&text=Pepperoni",
  },
  {
    id: "2",
    name: "Kartoshka fri",
    price: 19000,
    quantity: 1,
    image: "/placeholder.svg?height=60&width=60&text=Fri",
  },
  {
    id: "3",
    name: "10 yil! Dostlar 2",
    description: "Tovuqli stripslar 5 ta, Barbekyuq tovuq kichkina, Sinnamonchalari 8 ta 😋, Tarxun, Quyma Sprite",
    price: 105000,
    quantity: 1,
    image: "/placeholder.svg?height=60&width=60&text=Dostlar",
  },
]

const recommendedProducts: RecommendedProduct[] = [
  {
    id: "rec1",
    name: "SOUSLAR",
    price: 0,
    image: "/placeholder.svg?height=80&width=80&text=Sous",
    category: "5 tur",
  },
  {
    id: "rec2",
    name: "Jaydari kartoshka",
    price: 19000,
    image: "/placeholder.svg?height=80&width=80&text=Kartoshka",
    category: "",
  },
  {
    id: "rec3",
    name: "Tovuqli bellisster",
    price: 27000,
    image: "/placeholder.svg?height=80&width=80&text=Bellisster",
    category: "",
  },
  {
    id: "rec4",
    name: "Go'shtli bellisster",
    price: 29000,
    image: "/placeholder.svg?height=80&width=80&text=Gosht",
    category: "",
  },
  {
    id: "rec5",
    name: "Shef'da bellisster",
    price: 27000,
    image: "/placeholder.svg?height=80&width=80&text=Shef",
    category: "",
  },
]

export default function CartWithRecommendations() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const router = useRouter()

  const goToMenu = () => {
    router.push('/')
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const addRecommendedProduct = (product: RecommendedProduct) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1)
    } else {
      const newCartItem: CartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      }
      setCartItems((prev) => [...prev, newCartItem])
    }
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-4">
      {cartItems.length === 0 ? (
        // Empty cart state
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-400"
            >
              <path
                d="M25 25L30 25L35 75L85 75L90 45L40 45"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="40" cy="85" r="5" fill="currentColor" />
              <circle cx="80" cy="85" r="5" fill="currentColor" />
              <path d="M35 75L85 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 45L90 45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <rect x="88" y="20" width="4" height="30" rx="2" fill="#10B981" />
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Hozircha sizning savatchangiz bo'sh 😔</h2>
          </div>

          <button
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-colors"
            onClick={goToMenu}
          >
            Menyuni ko'rish
          </button>
        </div>
      ) : (
        // Existing cart content
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rest of the existing cart content remains the same */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 4v8M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="font-medium">{(item.price * item.quantity).toLocaleString()} so'm</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendations Section */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Qo'shishni maslahat beramiz</h2>

              <div className="relative">
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  {recommendedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex-shrink-0 w-32 p-3 border rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => addRecommendedProduct(product)}
                    >
                      <div className="text-center">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="mx-auto mb-2 rounded-lg"
                        />
                        <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                        {product.category && <p className="text-xs text-gray-500 mb-1">{product.category}</p>}
                        {product.price > 0 && (
                          <p className="text-sm font-medium">{product.price.toLocaleString()} so'm</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-2 space-x-1">
                  <div className="w-8 h-1 bg-gray-300 rounded"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Cart summary */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-transparent hover:bg-gray-50 transition-colors">
                Promokodni kiritish
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors">
                Qo'llash
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Bellkoinlar</span>
                <span className="text-sm text-blue-600">1 so'm = 1 B</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">B</span>
                </div>
                <span className="text-gray-500">Sizda mavjud</span>
                <span className="font-bold">0</span>
              </div>

              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-gray-400 cursor-not-allowed">
                Qo'llash
              </button>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-xs">!</span>
                  </div>
                  <p className="text-sm text-yellow-800">
                    Afsuski kombo mahsulotlari bilan Bellcoin ishlatish imkoni yo'q
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span>Yetkazib berish</span>
                <span>Bepul</span>
              </div>

              <div className="flex justify-between items-center text-lg font-bold">
                <span>Umumiy narx</span>
                <span>{totalPrice.toLocaleString()} so'm</span>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition-colors">
                Keyingisi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
