import { useEffect, useState } from "react";
import { Sparkles, ArrowLeft, Search, Filter } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getCategories, getCategoryMeals } from "../services/mealApi";

export default function CategoriesPage({ onOpenMeal, favorites, onToggleFavorite }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res.data.categories || []);
            setLoading(false);
            setTimeout(() => setFadeIn(true), 50);
        });
    }, []);

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        setLoading(true);
        setFadeIn(false);
        const res = await getCategoryMeals(category.strCategory);
        setMeals(res.data.meals || []);
        setLoading(false);
        setTimeout(() => setFadeIn(true), 50);
    };

    const handleBackClick = () => {
        setSelectedCategory(null);
        setSearchTerm("");
        setFadeIn(false);
        setTimeout(() => setFadeIn(true), 50);
    };

    const filteredCategories = categories.filter(cat =>
        cat.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading && !selectedCategory) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="relative">
                    <div className="w-24 h-24 border-4 border-orange-100 rounded-full" />
                    <div className="absolute inset-0 w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
                <p className="text-gray-600 font-semibold text-lg animate-pulse">Loading categories...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <style jsx>{`
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(2rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(1.5rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.5s ease-out forwards;
                }

                .animate-shimmer {
                    animation: shimmer 3s infinite;
                    background: linear-gradient(to right, #f97316 0%, #fb923c 50%, #f97316 100%);
                    background-size: 1000px 100%;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>

            {!selectedCategory ? (
                <>
                    {/* Enhanced Header Section */}
                    <div className={`mb-12 transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-10 md:p-16 overflow-hidden mb-8">
                            {/* Animated Background */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
                                <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles className="w-8 h-8 text-white" />
                                    <span className="text-white font-semibold text-lg">Explore</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                                    Recipe Categories
                                </h1>
                                <p className="text-white/90 text-xl md:text-2xl max-w-2xl">
                                    Discover delicious recipes organized by cuisine type and cooking style
                                </p>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur-xl opacity-30" />
                            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="flex items-center gap-4 p-4">
                                    <Search className="w-6 h-6 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search categories..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="flex-1 outline-none text-lg text-gray-700 placeholder-gray-400"
                                    />
                                    <Filter className="w-6 h-6 text-orange-500" />
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center gap-6 mt-8 flex-wrap">
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 px-6 py-3 rounded-2xl shadow-md">
                                <span className="font-bold text-orange-600 text-xl">{categories.length}</span>
                                <span className="text-gray-700 ml-2">Categories</span>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100 px-6 py-3 rounded-2xl shadow-md">
                                <span className="font-bold text-pink-600 text-xl">1000+</span>
                                <span className="text-gray-700 ml-2">Recipes</span>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 px-6 py-3 rounded-2xl shadow-md">
                                <span className="font-bold text-purple-600 text-xl">50+</span>
                                <span className="text-gray-700 ml-2">Countries</span>
                            </div>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCategories.map((cat, index) => (
                            <div
                                key={cat.idCategory}
                                onClick={() => handleCategoryClick(cat)}
                                style={{
                                    animationDelay: `${index * 50}ms`
                                }}
                                className={`group cursor-pointer bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-orange-300 transform hover:-translate-y-2 ${fadeIn ? 'opacity-100 translate-y-0 animate-slideUp' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    {/* Image with overlay */}
                                    <img
                                        src={cat.strCategoryThumb}
                                        alt={cat.strCategory}
                                        className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full group-hover:scale-110 transition-transform duration-300" />
                                        <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full group-hover:scale-125 transition-transform duration-300 delay-75" />
                                    </div>

                                    {/* Animated shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shimmer" />

                                    {/* Category name */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles className="w-5 h-5 text-orange-400" />
                                            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wide">Explore</span>
                                        </div>
                                        <h3 className="text-white font-black text-2xl mb-2 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                                            {cat.strCategory}
                                        </h3>
                                        <div className="w-16 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-300" />
                                    </div>
                                </div>

                                {/* Description Card */}
                                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 mb-3">
                                        {cat.strCategoryDescription}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">View Recipes</span>
                                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                            <span className="text-orange-500 group-hover:text-white transition-colors duration-300">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-gray-700 mb-2">No categories found</h3>
                            <p className="text-gray-500">Try searching with different keywords</p>
                        </div>
                    )}
                </>
            ) : (
                /* Selected Category View */
                <div>
                    {/* Back Button */}
                    <button
                        onClick={handleBackClick}
                        className="mb-10 group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-6 py-3 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span>Back to Categories</span>
                    </button>

                    {/* Category Header */}
                    <div className={`mb-12 transition-all duration-500 ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-10 md:p-12 overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
                                <div className="absolute bottom-5 left-5 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                            </div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="hidden md:block w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-white/30 flex-shrink-0">
                                    <img
                                        src={selectedCategory.strCategoryThumb}
                                        alt={selectedCategory.strCategory}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Sparkles className="w-6 h-6 text-white" />
                                        <span className="text-white font-semibold">Category</span>
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-black text-white mb-3">
                                        {selectedCategory.strCategory}
                                    </h2>
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <div className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30">
                                            <span className="text-white font-bold text-lg">{meals.length}</span>
                                            <span className="text-white/90 ml-2">Recipes</span>
                                        </div>
                                        <div className="w-20 h-1.5 bg-white rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="relative">
                                <div className="w-20 h-20 border-4 border-orange-100 rounded-full" />
                                <div className="absolute inset-0 w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                            </div>
                            <p className="text-gray-600 font-semibold text-lg animate-pulse">Loading delicious recipes...</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {meals.map((meal, index) => (
                                <div
                                    key={meal.idMeal}
                                    style={{
                                        animationDelay: `${index * 40}ms`
                                    }}
                                    className={`transition-all duration-500 ${fadeIn ? 'opacity-100 translate-y-0 animate-fadeInUp' : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    <RecipeCard
                                        meal={meal}
                                        onOpen={onOpenMeal}
                                        isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}
                                        onToggleFavorite={onToggleFavorite}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}