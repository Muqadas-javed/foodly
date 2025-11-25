import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getCategories, getCategoryMeals } from "../services/mealApi";

export default function CategoriesPage({ onOpenMeal, favorites, onToggleFavorite }) {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);

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
        setFadeIn(false);
        setTimeout(() => setFadeIn(true), 50);
    };

    if (loading && !selectedCategory) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-orange-100 rounded-full" />
                    <div className="absolute inset-0 w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
                <p className="text-gray-600 font-medium animate-pulse">Loading categories...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className={`mb-10 transition-all duration-700 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="relative inline-block mb-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 relative z-10">
                        Browse by Category
                    </h2>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-200 opacity-40 -z-0" />
                </div>
                <p className="text-gray-600 text-lg">Explore recipes from different cuisines and styles</p>
            </div>

            {!selectedCategory ? (
                /* Categories Grid */
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.idCategory}
                            onClick={() => handleCategoryClick(cat)}
                            style={{
                                animationDelay: `${index * 50}ms`
                            }}
                            className={`group cursor-pointer bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${fadeIn ? 'opacity-100 translate-y-0 animate-slideUp' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
                                <img
                                    src={cat.strCategoryThumb}
                                    alt={cat.strCategory}
                                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                {/* Decorative circles */}
                                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute top-6 right-6 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-125 transition-transform duration-300 delay-75" />

                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white font-bold text-2xl mb-1 drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                                        {cat.strCategory}
                                    </h3>
                                    <div className="w-12 h-1 bg-orange-400 rounded-full group-hover:w-20 transition-all duration-300" />
                                </div>
                            </div>
                            <div className="p-5 bg-gradient-to-b from-white to-gray-50">
                                <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                    {cat.strCategoryDescription}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Selected Category View */
                <div>
                    <button
                        onClick={handleBackClick}
                        className="mb-8 group flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-orange-50"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform duration-300 text-xl">←</span>
                        <span>Back to Categories</span>
                    </button>

                    <div className={`mb-8 transition-all duration-500 ${fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {selectedCategory.strCategory}
                            </h3>
                            <span className="px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                                {meals.length} recipes
                            </span>
                        </div>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full" />
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-orange-100 rounded-full" />
                                <div className="absolute inset-0 w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                            </div>
                            <p className="text-gray-600 font-medium animate-pulse">Loading recipes...</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

                .animate-slideUp {
                    animation: slideUp 0.6s ease-out forwards;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}