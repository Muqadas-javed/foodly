import { useEffect, useState } from "react";
import { TrendingUp, Star } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { getCategoryMeals, getRandomMeal } from "../services/mealApi";

export default function HomePage({ onOpenMeal, favorites, onToggleFavorite }) {
    const [featured, setFeatured] = useState([]);
    const [random, setRandom] = useState([]);
    const [loading, setLoading] = useState(true);

    const [quickEasy, setQuickEasy] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [chicken, setChicken] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [seafood, chicken, dessert, random1, random2, random3, random4, random5, random6] = await Promise.all([
                    getCategoryMeals("Seafood"),
                    getCategoryMeals("Chicken"),
                    getCategoryMeals("Dessert"),
                    getRandomMeal(),
                    getRandomMeal(),
                    getRandomMeal(),
                    getRandomMeal(),
                    getRandomMeal(),
                    getRandomMeal()
                ]);
                setFeatured(seafood.data.meals?.slice(0, 6) || []);
                setChicken(chicken.data.meals?.slice(0, 6) || []);
                setDesserts(dessert.data.meals?.slice(0, 6) || []);
                setRandom([random1.data.meals[0], random2.data.meals[0], random3.data.meals[0]]);
                setQuickEasy([random4.data.meals[0], random5.data.meals[0], random6.data.meals[0]]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading delicious recipes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            <style jsx>{`
                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }
                
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>

            {/* Animated Hero Banner */}
            <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 md:p-16 overflow-hidden min-h-[500px] flex items-center">
                {/* Animated floating elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                    <div className="absolute top-1/4 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }} />

                    {/* Gradient orbs */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-30 animate-pulse" />
                    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-400 to-red-400 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
                    {/* Left Content */}
                    <div>
                        <div className="flex items-center gap-2 text-white font-semibold mb-4 animate-fade-in">
                            <TrendingUp className="w-6 h-6" />
                            <span className="text-lg">Discover & Cook</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
                            Explore World's Best Recipes
                        </h1>
                        <p className="text-white text-xl mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            From traditional favorites to exotic dishes, find your next culinary adventure and master the art of cooking
                        </p>
                        <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white border-opacity-30">
                                <span className="font-bold text-white text-xl">1000+</span>
                                <span className="text-white ml-2">Recipes</span>
                            </div>
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white border-opacity-30">
                                <span className="font-bold text-white text-xl">50+</span>
                                <span className="text-white ml-2">Categories</span>
                            </div>
                            <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white border-opacity-30">
                                <span className="font-bold text-white text-xl">100%</span>
                                <span className="text-white ml-2">Free</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative hidden md:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative">
                            {/* Main food images in a collage style */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
                                            alt="Delicious food"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
                                            alt="Tasty dish"
                                            className="w-full h-56 object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
                                            alt="Gourmet meal"
                                            className="w-full h-56 object-cover"
                                        />
                                    </div>
                                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
                                            alt="Fresh ingredients"
                                            className="w-full h-48 object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="flex items-center gap-2">
                                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    <div>
                                        <div className="font-bold text-gray-900">Top Rated</div>
                                        <div className="text-sm text-gray-600">4.9★ Average</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-8 py-8">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Easy to Follow</h3>
                    <p className="text-gray-600">Step-by-step instructions that make cooking simple and fun for everyone</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Cuisines</h3>
                    <p className="text-gray-600">Discover authentic recipes from every corner of the world in one place</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                        <Star className="w-8 h-8 text-white fill-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Save Favorites</h3>
                    <p className="text-gray-600">Bookmark your favorite recipes and build your personal cookbook collection</p>
                </div>
            </section>

            {/* Surprise Me Section */}
            <section className="py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <Star className="w-10 h-10 text-orange-500 fill-orange-500" />
                            Surprise Me
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">Random picks just for you</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {random.map((meal, index) => (
                        <div
                            key={meal.idMeal}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </section>

            {/* Trending Section */}
            <section className="py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <TrendingUp className="w-10 h-10 text-red-500" />
                            Trending Seafood
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">Fresh from the ocean to your plate</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((meal, index) => (
                        <div
                            key={meal.idMeal}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </section>

            {/* Quick & Easy Section */}
            <section className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Quick & Easy
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">Ready in 30 minutes or less</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quickEasy.map((meal, index) => (
                        <div
                            key={meal.idMeal}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </section>

            {/* Chicken Recipes Section */}
            <section className="py-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
                            </svg>
                            Chicken Delights
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">Popular chicken recipes from around the world</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chicken.map((meal, index) => (
                        <div
                            key={meal.idMeal}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </section>

            {/* Desserts Section */}
            <section className="py-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                            </svg>
                            Sweet Treats
                        </h2>
                        <p className="text-gray-600 mt-2 text-lg">Indulge in delicious desserts</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {desserts.map((meal, index) => (
                        <div
                            key={meal.idMeal}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12 md:p-16 overflow-hidden my-12">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Cooking?
                    </h2>
                    <p className="text-white text-xl mb-8 opacity-90">
                        Join thousands of home cooks discovering new recipes every day. Your next favorite dish is just a click away!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-full">
                            <span className="text-white text-lg">🍳 Easy Recipes</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-full">
                            <span className="text-white text-lg">🌍 Global Flavors</span>
                        </div>
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-8 py-4 rounded-full">
                            <span className="text-white text-lg">❤️ Save Favorites</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}