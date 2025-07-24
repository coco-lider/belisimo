"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface Pizza {
  id: string
  name: string
  price: number
  image: string
  badge?: "NEW!" | "HIT!"
}

interface CartItem {
  id: string
  name: string
  price: number
  type: "selected" | "free"
  image?: string
}

const pizzaOptions: Pizza[] = [
  {
    id: "1",
    name: "Dabl chizburger kichkina",
    price: 69000,
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "2",
    name: "Chedder Donar kichkina",
    price: 69000,
    image: "/placeholder.svg?height=120&width=120",
    badge: "NEW!",
  },
  {
    id: "3",
    name: "Margarita kichkina",
    price: 69000,
    image: "/placeholder.svg?height=120&width=120",
    badge: "HIT!",
  },
  {
    id: "4",
    name: "Pepperoni kichkina",
    price: 69000,
    image: "/placeholder.svg?height=120&width=120",
    badge: "HIT!",
  },
]

export default function PizzaMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentSelection, setCurrentSelection] = useState<"pizza1" | "pizza2" | "pizza3">("pizza1")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const modalRef = useRef<HTMLDivElement>(null)

  const handleSelectClick = (type: "pizza1" | "pizza2" | "pizza3") => {
    setCurrentSelection(type)
    setIsModalOpen(true)
  }

  const handlePizzaSelect = (pizza: Pizza) => {
    const newItem: CartItem = {
      id: pizza.id,
      name: pizza.name,
      price: currentSelection === "pizza3" ? 0 : pizza.price,
      type: currentSelection === "pizza3" ? "free" : "selected",
      image: pizza.image,
    }

    setCartItems((prev) => {
      const filtered = prev.filter(
        (item) =>
          !(currentSelection === "pizza1" && item.type === "selected" && prev.indexOf(item) === 0) &&
          !(currentSelection === "pizza2" && item.type === "selected" && prev.indexOf(item) === 1) &&
          !(currentSelection === "pizza3" && item.type === "free"),
      )
      return [...filtered, newItem]
    })

    setIsModalOpen(false)
  }

    useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Pizza combo image */}
        <div className="flex justify-center">
          <Image
            src="/images/pizza-combo.png"
            alt="Pizza Combo 2+1"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right side - Menu and cart */}
        <div className="space-y-6">
          {cartItems.length === 3 ? (
            // Show selected pizzas list when all are selected
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg?height=64&width=64"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      {item.type === "free" && (
                        <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
                          FREE
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          + {item.price.toLocaleString()} so'm
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Qalin</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}

              {/* Cart summary */}
              <div className="border-t pt-4 space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Kombo 2+1: O'zingiz tanlang</span>
                    <span className="text-gray-500">0 so'm</span>
                  </div>
                  {cartItems
                    .filter((item) => item.type === "selected")
                    .map((item, index) => (
                      <div key={`selected-${index}`} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-600">+ {item.price.toLocaleString()} so'm</span>
                      </div>
                    ))}
                  {cartItems
                    .filter((item) => item.type === "free")
                    .map((item, index) => (
                      <div key={`free-${index}`} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-600">+ {item.price.toLocaleString()} so'm</span>
                      </div>
                    ))}
                </div>

                <div className="border-t pt-2">
                  <div className="flex justify-between items-center text-sm text-gray-500 line-through">
                    <span></span>
                    <span>177,000 so'm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Umumiy narx:</span>
                    <span className="font-bold text-xl">138,000 so'm</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium rounded-lg transition-colors">
                  Savatga qo'shish
                </button>
              </div>
            </div>
          ) : (
            // Show selection menu when not all pizzas are selected
            <div>
              <div>
                <h1 className="text-2xl font-bold mb-2">Kombo 2+1: O'zingiz tanlang</h1>
                <p className="text-gray-600 text-sm">
                  O'z uchligingizni to'plang va faqat ikkitasi uchun to'lang! O'z mukammal kombongizni yarating:
                  istalgan uchta pitsani (25 sm) tanlang va faqat ikkitasi uchun to'lang. Kombo narxi 119 000 so'mdan
                  boshlandi
                </p>
              </div>

              {/* Pizza selection menu */}
              <div className="space-y-4 mt-6">
                {/* Pizza 1 */}
                <div
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSelectClick("pizza1")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      {cartItems.find((item) => item.type === "selected") ? (
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Selected pizza"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Pizza</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Пицца 1</p>
                      <p className="font-medium">
                        {cartItems.find((item) => item.type === "selected")?.name || "Tanlash"}
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Pizza 2 */}
                <div
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSelectClick("pizza2")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                      {cartItems.filter((item) => item.type === "selected")[1] ? (
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Selected pizza"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Pizza</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Пицца 2</p>
                      <p className="font-medium">
                        {cartItems.filter((item) => item.type === "selected")[1]?.name || "Tanlash"}
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Pizza 3 (Free) */}
                <div
                  className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSelectClick("pizza3")}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 relative">
                      {cartItems.find((item) => item.type === "free") ? (
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Selected pizza"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Pizza</span>
                        </div>
                      )}
                      <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded-full">
                        FREE
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Пицца 3 (бесплатная)</p>
                      <p className="font-medium">{cartItems.find((item) => item.type === "free")?.name || "Tanlash"}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Cart summary */}
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Umumiy narx:</span>
                  <span className="font-bold text-lg">{totalPrice.toLocaleString()} so'm</span>
                </div>
                <button
                  className={`w-full py-3 rounded-lg transition-colors ${
                    cartItems.length < 2
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                  disabled={cartItems.length < 2}
                >
                  Savatga qo'shish
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pizza selection modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
    <div
      ref={modalRef}
      className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {currentSelection === "pizza1" && "Пицца 1"}
            {currentSelection === "pizza2" && "Пицца 2"}
            {currentSelection === "pizza3" && "Пицца 3 (бесплатная)"}
          </h2>
          <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {pizzaOptions.map((pizza) => (
            <div
              key={pizza.id}
              className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handlePizzaSelect(pizza)}
            >
              <div className="relative mb-3">
                <Image
                  src={pizza.image || "/placeholder.svg"}
                  alt={pizza.name}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                {pizza.badge && (
                  <span
                    className={`absolute top-0 right-0 px-2 py-1 text-xs text-white rounded ${
                      pizza.badge === "NEW!" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {pizza.badge}
                  </span>
                )}
              </div>

              <div className="text-center">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    + {pizza.price.toLocaleString()} so'm
                  </span>
                </div>
                <h3 className="font-medium text-sm">{pizza.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  )
}
