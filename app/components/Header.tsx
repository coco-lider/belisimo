"use client"

import { useState } from "react"
import { ChevronDown, MapPin, PhoneCall } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [cartCount] = useState(0)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const router = useRouter()

  const gotoHome = () => router.push('/')

  return (
    <div className="shadow-sm w-full">
      {/* Top Header */}
      <div className="border-b w-full bg-white border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <div className="text-green-600 font-bold flex items-center gap-1">
              <PhoneCall size={16} /> <span>1174</span>
            </div>
            <nav className="hidden md:flex gap-4">
              <a href="#" className="hover:text-gray-800 transition-colors">Biz haqimizda</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Bo'sh ish o‘rinlari</a>
            </nav>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded transition-colors"
            >
              <div className="w-4 h-3 overflow-hidden rounded-sm relative">
                <div className="absolute top-0 w-full h-1 bg-blue-500" />
                <div className="absolute top-1 w-full h-1 bg-white" />
                <div className="absolute bottom-0 w-full h-1 bg-green-500" />
              </div>
              <span className="text-sm">Uz</span>
              <ChevronDown size={12} />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow z-50">
                <button className="block px-3 py-2 text-sm hover:bg-gray-100 w-full text-left">Uz</button>
                <button className="block px-3 py-2 text-sm hover:bg-gray-100 w-full text-left">Ru</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
          {/* Logo va joylashuv */}
          <div className="flex items-center gap-6 flex-wrap">
            <img
              onClick={gotoHome}
              src="https://bellissimo.uz/images/logo_new.svg"
              alt="logo"
              className="h-10 cursor-pointer"
            />

            {/* Location */}
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition"
              >
                <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center">
                  <MapPin className="text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Shahar:</p>
                  <p className="text-sm font-medium">Toshkent</p>
                </div>
                <ChevronDown className="text-gray-400 ml-1" size={16} />
              </button>
              {isLocationOpen && (
                <div className="absolute top-full mt-2 bg-white border rounded shadow z-50 w-40">
                  {["Toshkent", "Samarqand", "Buxoro"].map(city => (
                    <button key={city} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 24/7 Info */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-sm">24/7</div>
              <div className="text-sm">
                <div className="font-medium text-gray-600">Bepul yetkazish endi 24/7</div>
                <div className="text-gray-500 text-xs">mavjud</div>
              </div>
            </div>
          </div>

          {/* Halal, Cart, Kirish */}
          <div className="flex items-center gap-4">
            <a href="https://bellissimo.uz/about/halal" className="w-12 h-12 flex items-center justify-center border rounded-full">
              <img src="https://bellissimo.uz/_next/image?url=%2Fimages%2Fhalal.png&w=128&q=75" alt="halal" className="w-6 h-6" />
            </a>

            <button className="relative flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-50 transition">
                <img className="w-7 h-7" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyNDc1LjQgMjY3Ni44Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZDg2YzAwOwogICAgICAgIG9wYWNpdHk6IC40OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBpc29sYXRpb246IGlzb2xhdGU7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQtMik7CiAgICAgIH0KCiAgICAgIC5jbHMtNSB7CiAgICAgICAgZmlsbDogI2ZmZjc2NDsKICAgICAgfQoKICAgICAgLmNscy02IHsKICAgICAgICBmaWxsOiAjZmZjYjM5OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgb3BhY2l0eTogLjI7CiAgICAgIH0KCiAgICAgIC5jbHMtNyB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6ICNhZjRiMDA7CiAgICAgICAgb3BhY2l0eTogLjY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9Ii0zMy42IiB5MT0iMjU5OSIgeDI9IjE5MjEuOCIgeTI9IjgyNi43IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjgzMy43KSBzY2FsZSgxIC0xKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmMmNhNDQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNCIgc3RvcC1jb2xvcj0iI2YyYzc0MiIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii42IiBzdG9wLWNvbG9yPSIjZjRjMDNkIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjgiIHN0b3AtY29sb3I9IiNmN2IzMzQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuOSIgc3RvcC1jb2xvcj0iI2ZiYTEyNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjkzMWUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMTk3MzYiIHkxPSIzLjUiIHgyPSIyMTMzNC40IiB5Mj0iMy41IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE5NjI2LjIgMTA1MTMuMikgcm90YXRlKC0xNTMuNikgc2NhbGUoMSAtMSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZiZTFkIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjUiIHN0b3AtY29sb3I9IiNmZmJiMWQiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuNyIgc3RvcC1jb2xvcj0iI2ZmYjQxZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii44IiBzdG9wLWNvbG9yPSIjZmZhNzFkIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmOTUxZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjkzMWUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyOC43LjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAxLjIuMCBCdWlsZCAxNjYpICAtLT4KICA8ZyB0cmFuc2Zvcm09InNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTUwKSI+CiAgICA8ZyBpZD0iTGF5ZXJfMSI+CiAgICAgIDxnIGlkPSJfZ29sZCI+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTciIGN4PSIxMjMyLjYiIGN5PSIxMzgyLjQiIHI9IjkxNy4xIi8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIxMjMxLjYiIGN5PSIxMzgzLjIiIHI9IjkxNy4xIi8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSIxMjMyLjYiIGN5PSIxMzgyLjQiIHI9Ijc5OSIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTEyMzIuNiw1ODMuNGM0NDEuMywwLDc5OSwzNTcuNyw3OTksNzk5cy0zNTcuNyw3OTktNzk5LDc5OS03OTktMzU3LjctNzk5LTc5OSwzNTcuNy03OTksNzk5LTc5OU0xMjMyLjYsNTY4LjZjLTEwOS44LDAtMjE2LjQsMjEuNS0zMTYuOCw2NC05Ni45LDQxLTE4My45LDk5LjctMjU4LjcsMTc0LjQtNzQuNyw3NC43LTEzMy40LDE2MS44LTE3NC40LDI1OC43LTQyLjQsMTAwLjMtNjQsMjA2LjktNjQsMzE2LjhzMjEuNSwyMTYuNCw2NCwzMTYuOGM0MSw5Ni45LDk5LjcsMTgzLjksMTc0LjQsMjU4LjdzMTYxLjgsMTMzLjQsMjU4LjcsMTc0LjRjMTAwLjMsNDIuNCwyMDYuOSw2NCwzMTYuOCw2NHMyMTYuNC0yMS41LDMxNi44LTY0Yzk2LjktNDEsMTgzLjktOTkuNywyNTguNy0xNzQuNHMxMzMuNC0xNjEuOCwxNzQuNC0yNTguN2M0Mi40LTEwMC4zLDY0LTIwNi45LDY0LTMxNi44cy0yMS41LTIxNi40LTY0LTMxNi44Yy00MS05Ni45LTk5LjctMTgzLjktMTc0LjQtMjU4LjdzLTE2MS44LTEzMy40LTI1OC43LTE3NC40Yy0xMDAuMy00Mi40LTIwNi45LTY0LTMxNi44LTY0aDBaIi8+CiAgICAgICAgPGNpcmNsZSBjbGFzcz0iY2xzLTYiIGN4PSIxMjI5LjYiIGN5PSIxMzg3LjIiIHI9Ijc0Ni44Ii8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTU1My45LDE0MzEuOWMtMzAuNS0zMy43LTcxLjEtNTYtMTIxLjktNjd2LTQuNWMzNS4zLTE1LjEsNjIuOS0zOC42LDgzLTcwLjcsMjAtMzIsMzAtNjguNiwzMC0xMDkuNnMtNy4zLTY2LjctMjEuOC05My44Yy0xNC41LTI3LjEtMzYuNS00OC44LTY1LjktNjUtMjcuMi0xNS4xLTU2LjMtMjUtODcuNC0yOS43LTE4LjYtMi44LTQyLjYtNC44LTcxLjctNS45di04NS4zYzAtMzguNi0zMS4zLTY5LjktNjkuOS02OS45aC0xMC40Yy0zOC42LDAtNjkuOSwzMS4zLTY5LjksNjkuOXY4NC4xaC0xODEuN3Y4NDEuNmgxODEuN3Y3OS45YzAsMzguNiwzMS4zLDY5LjksNjkuOSw2OS45aDEwLjRjMzguNiwwLDY5LjktMzEuMyw2OS45LTY5Ljl2LTgwLjRjNDUtMS40LDgzLjItNi41LDExNC4xLTE1LjQsMzYuOS0xMC41LDcwLjktMjguMywxMDEuNy01My4xLDI2LjEtMjAuNyw0Ni45LTQ2LjksNjIuMy03OC42LDE1LjQtMzEuNywyMy4yLTY4LjQsMjMuMi0xMTAuMnMtMTUuMy0xMDIuOC00NS44LTEzNi41Wk0xMTQ4LjEsMTEzOC44aDE0LjNjMzYuNywwLDY0LjQuMyw4MywuOCwxOC42LjYsMzQuNiwzLjksNDguMiw5LjksMTQuMyw2LjQsMjQuOSwxNi44LDMxLjcsMzEuMSw2LjgsMTQuMywxMC4yLDI4LjMsMTAuMiw0MS44cy0zLjEsMzQuNy05LjQsNDguNmMtNi4zLDEzLjktMTcuNiwyNC45LTM0LjIsMzIuOC0xNS4xLDcuMi0yOS43LDExLjEtNDMuOCwxMS45LTE0LjEuOC0zOC45LDEuMS03NC4yLDEuMWgtMjUuOXYtMTc4Wk0xMzc0LjUsMTYxOC45Yy04LjYsMTYtMjIuMywyOC4yLTQxLjEsMzYuNS0yMS4zLDkuNC00Mi4zLDE0LjUtNjIuOSwxNS4zLTIwLjYuOC01Ny43LDEuMS0xMTEuNCwxLjFoLTExdi0yMTAuOGgzOGMzNi43LDAsNjYuMS4zLDg3LjkuOCwyMS45LjYsMzksMy4zLDUxLjUsOC4yLDIwLjYsNy41LDM2LDE4LjcsNDYuMywzMy40LDEwLjMsMTQuNywxNS40LDM1LDE1LjQsNjFzLTQuMywzOC41LTEzLDU0LjVaIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJNMTU1My45LDE0MDkuOWMtMzAuNS0zMy43LTcxLjEtNTYtMTIxLjktNjd2LTQuNWMzNS4zLTE1LjEsNjIuOS0zOC42LDgzLTcwLjcsMjAtMzIsMzAtNjguNiwzMC0xMDkuNnMtNy4zLTY2LjctMjEuOC05My44Yy0xNC41LTI3LjEtMzYuNS00OC44LTY1LjktNjUtMjcuMi0xNS4xLTU2LjMtMjUtODcuNC0yOS43LTE4LjYtMi44LTQyLjYtNC44LTcxLjctNS45di04NS4zYzAtMzguNi0zMS4zLTY5LjktNjkuOS02OS45aC0xMC40Yy0zOC42LDAtNjkuOSwzMS4zLTY5LjksNjkuOXY4NC4xaC0xODEuN3Y4NDEuNmgxODEuN3Y3OS45YzAsMzguNiwzMS4zLDY5LjksNjkuOSw2OS45aDEwLjRjMzguNiwwLDY5LjktMzEuMyw2OS45LTY5Ljl2LTgwLjRjNDUtMS40LDgzLjItNi41LDExNC4xLTE1LjQsMzYuOS0xMC41LDcwLjktMjguMywxMDEuNy01My4xLDI2LjEtMjAuNyw0Ni45LTQ2LjksNjIuMy03OC42LDE1LjQtMzEuNywyMy4yLTY4LjQsMjMuMi0xMTAuMnMtMTUuMy0xMDIuOC00NS44LTEzNi41Wk0xMTQ4LjEsMTExNi44aDE0LjNjMzYuNywwLDY0LjQuMyw4MywuOCwxOC42LjYsMzQuNiwzLjksNDguMiw5LjksMTQuMyw2LjQsMjQuOSwxNi44LDMxLjcsMzEuMSw2LjgsMTQuMywxMC4yLDI4LjMsMTAuMiw0MS44cy0zLjEsMzQuNy05LjQsNDguNmMtNi4zLDEzLjktMTcuNiwyNC45LTM0LjIsMzIuOC0xNS4xLDcuMi0yOS43LDExLjEtNDMuOCwxMS45LTE0LjEuOC0zOC45LDEuMS03NC4yLDEuMWgtMjUuOXYtMTc4Wk0xMzc0LjUsMTU5Ni45Yy04LjYsMTYtMjIuMywyOC4yLTQxLjEsMzYuNS0yMS4zLDkuNC00Mi4zLDE0LjUtNjIuOSwxNS4zLTIwLjYuOC01Ny43LDEuMS0xMTEuNCwxLjFoLTExdi0yMTAuOGgzOGMzNi43LDAsNjYuMS4zLDg3LjkuOCwyMS45LjYsMzksMy4zLDUxLjUsOC4yLDIwLjYsNy41LDM2LDE4LjcsNDYuMywzMy40LDEwLjMsMTQuNywxNS40LDM1LDE1LjQsNjFzLTQuMywzOC41LTEzLDU0LjVaIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNTIxLjQsMTk2MS41bDE2MjUuNi02NTAuNWMtMTQuNS0xODguOS04Ni4zLTM2MS44LTE5OC01MDEuM0wzMTguOSwxNDYyYzE2LjIsMTg4LjYsODkuNSwzNjAuOSwyMDIuNSw0OTkuNWgwWiIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNSIgZD0iTTIxNDkuNCwxMzk4di0yOC42aC0xMTkuMWMtMi40LTEzNC44LTM4LjMtMjYxLjYtOTkuOC0zNzIuMmwxMDMuMS01OS41LTE0LjMtMjQuOC0xMDMuMSw1OS41Yy02Ny4zLTExMS41LTE2MS0yMDUuMy0yNzIuNS0yNzIuNmw1OS41LTEwMy4xLTI0LjgtMTQuMy01OS41LDEwMy4xYy0xMTAuOC02MS42LTIzNy42LTk3LjYtMzcyLjUtMTAwdi0xMTkuMWgtMjguNnYxMTkuMWMtMTM0LjgsMi40LTI2MS42LDM4LjMtMzcyLjMsOTkuOWwtNTkuNC0xMDIuOS0yNC44LDE0LjMsNTkuNCwxMDIuOWMtMTExLjYsNjcuMy0yMDUuNCwxNjEuMi0yNzIuNywyNzIuOGwtMTAzLjEtNTkuNS0xNC4zLDI0LjgsMTAzLjEsNTkuNWMtNjEuNSwxMTAuNy05Ny40LDIzNy40LTk5LjgsMzcyLjJoLTExOS4xdjI4LjZoMTE5LjFjMi40LDEzNC45LDM4LjQsMjYxLjcsOTkuOSwzNzIuNGwtMTAzLjUsNTkuNywxNC4zLDI0LjgsMTAzLjUtNTkuOGM2Ny4zLDExMS40LDE2MC45LDIwNS4xLDI3Mi4zLDI3Mi40bC01OS41LDEwMy4xLDI0LjgsMTQuMyw1OS41LTEwMy4xYzExMC44LDYxLjYsMjM3LjcsOTcuNywzNzIuNiwxMDB2MTE5LjFoMjguNnYtMTE5LjFjMTM0LjgtMi40LDI2MS42LTM4LjMsMzcyLjItOTkuOGw1OS40LDEwMywyNC44LTE0LjMtNTkuNS0xMDNjMTExLjYtNjcuNCwyMDUuNS0xNjEuMiwyNzIuOC0yNzIuOWwxMDIuOSw1OS40LDE0LjMtMjQuOC0xMDIuOS01OS40YzYxLjUtMTEwLjcsOTcuNC0yMzcuNCw5OS44LTM3Mi4xaDExOS4xLDBaTTEyMzIuMSwyMTUzLjVjLTQyNC41LDAtNzY5LjgtMzQ1LjMtNzY5LjgtNzY5LjhzMzQ1LjMtNzY5LjgsNzY5LjgtNzY5LjgsNzY5LjgsMzQ1LjMsNzY5LjgsNzY5LjgtMzQ1LjMsNzY5LjgtNzY5LjgsNzY5LjhoMFoiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+" alt="" />
              <p className="text-sm font-bold">{cartCount}</p>
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-3xl text-sm font-semibold transition-all">
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
