import { Search, Heart, ShoppingCart, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useAppContext } from "~/context/appContext";


const Navigation: React.FC = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();

    return (
        <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">BuyWiz</span>
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
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Navigation