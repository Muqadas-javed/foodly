import { useEffect, useState } from "react";
import { Search, Home, BookOpen, Heart, Info, ChefHat } from "lucide-react";

export default function Header({ query, setQuery, onSearch, currentPage, setCurrentPage }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-gradient-to-r from-orange-500 to-red-500"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage("home")}>
                        <ChefHat className={`w-8 h-8 ${scrolled ? "text-orange-500" : "text-white"}`} />
                        <h1 className={`text-2xl font-bold ${scrolled ? "text-gray-900" : "text-white"}`}>Foodly</h1>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-xl mx-6">
                        <div className="relative w-full">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && onSearch()}
                                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-transparent focus:border-orange-400 focus:outline-none shadow-sm"
                                placeholder="Search for delicious recipes..."
                            />
                            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <button
                                onClick={onSearch}
                                className="absolute right-2 top-2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <nav className="flex gap-1">
                        {[
                            { id: "home", icon: Home, label: "Home" },
                            { id: "categories", icon: BookOpen, label: "Categories" },
                            { id: "favorites", icon: Heart, label: "Favorites" },
                            { id: "about", icon: Info, label: "About" }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${currentPage === item.id
                                    ? scrolled ? "bg-orange-100 text-orange-600" : "bg-white/20 text-white"
                                    : scrolled ? "text-gray-600 hover:bg-gray-100" : "text-white/80 hover:bg-white/10"
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="hidden lg:inline font-medium">{item.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="md:hidden mt-4">
                    <div className="relative">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && onSearch()}
                            className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Search recipes..."
                        />
                        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div>
        </header>
    );
}