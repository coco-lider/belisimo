import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg: space-y-6 lg:space-y-0">
          {/* Left Section - Logo and Phone */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img className="w-[250px] h-[50px]" src="https://bellissimo.uz/_next/image?url=%2Fimages%2Flogo-footer-new.png&w=640&q=75" alt="" />
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium">RAQAMGA QONGIROQ QILING - 1174</p>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex space-x-16 lg:space-x-20">
            {/* First Column */}
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Biz haqimizda
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Ommaviy oferta
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Maxfiylik siyosati
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Halol sertifikati
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Restoranlar
              </Link>
            </div>

            {/* Second Column */}
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Bizning ish o'rinlarimiz
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Franshiza
              </Link>
            </div>
          </div>

          <div>
            <ul className="flex flex-col items-center">
                <div className="flex gap-4 mb-2">
                    <li>
                        <img
                            className="w-[80px] h-[80px]"
                            src="https://bellissimo.uz/images/payme-footer.svg"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            className="w-[80px] h-[80px]"
                            src="https://bellissimo.uz/images/uzcard-footer.svg"
                            alt=""
                        />
                    </li>
                </div>
                <li>
                    <img
                        className="w-[80px] h-[80px]"
                        src="https://bellissimo.uz/images/click-footer.svg"
                        alt=""
                    />
                </li>
            </ul>
          </div>

          {/* Right Section - Payment Methods and Social */}
          <div className="flex space-y-4">
            {/* Social Media Text and Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Bizni kuzatib boring</span>
              <div className="flex space-x-2">
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">© 2016-2025 Bellissimo Pizza.</p>
        </div>
      </div>
    </footer>
  )
}
