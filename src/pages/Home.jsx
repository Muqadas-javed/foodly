import { useEffect, useState } from "react";
import { TrendingUp, Star, Sparkles, ChefHat, Award, Heart } from "lucide-react";

function RecipeCard({ meal, onOpen, isFavorite, onToggleFavorite }) {
    return (
        <div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => onOpen(meal)}
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(meal);
                    }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                    {meal.strMeal}
                </h3>
                {meal.strCategory && (
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                        {meal.strCategory}
                    </span>
                )}
            </div>
        </div>
    );
}

function HomePage({ onOpenMeal, favorites, onToggleFavorite }) {
    const [featured, setFeatured] = useState([]);
    const [random, setRandom] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Simulating API calls with dummy data
                const dummyMeals = [
                    { idMeal: "1", strMeal: "Grilled Salmon with Herbs", strMealThumb: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", strCategory: "Seafood" },
                    { idMeal: "2", strMeal: "Mediterranean Pasta", strMealThumb: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", strCategory: "Pasta" },
                    { idMeal: "3", strMeal: "Asian Stir Fry", strMealThumb: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400", strCategory: "Asian" },
                    { idMeal: "4", strMeal: "Fresh Garden Salad", strMealThumb: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400", strCategory: "Salad" },
                    { idMeal: "5", strMeal: "Gourmet Burger", strMealThumb: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400", strCategory: "American" },
                    { idMeal: "6", strMeal: "Sushi Platter", strMealThumb: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400", strCategory: "Japanese" },
                ];
                setFeatured(dummyMeals);
                setRandom(dummyMeals.slice(0, 3));
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
                    <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 border-4 border-orange-200 rounded-full animate-ping" />
                        <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <p className="text-gray-600 text-lg font-medium">Loading delicious recipes...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-20 px-4 md:px-8 pb-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse" />
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full animate-pulse delay-75" />
                    <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full animate-pulse delay-150" />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-2 text-white/90 font-semibold mb-6 animate-fade-in">
                        <Sparkles className="w-6 h-6 animate-pulse" />
                        <span className="text-lg">Discover & Cook Amazing Meals</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                        Explore World's
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-200">
                            Best Recipes
                        </span>
                    </h1>
                    <p className="text-white/90 text-xl mb-8 max-w-2xl leading-relaxed">
                        From traditional favorites to exotic dishes, find your next culinary adventure and cook like a pro
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all shadow-lg">
                            <div className="flex items-center gap-2">
                                <ChefHat className="w-6 h-6 text-white" />
                                <div>
                                    <span className="font-bold text-2xl text-white block">1000+</span>
                                    <span className="text-white/80 text-sm">Recipes</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all shadow-lg">
                            <div className="flex items-center gap-2">
                                <Award className="w-6 h-6 text-white" />
                                <div>
                                    <span className="font-bold text-2xl text-white block">50+</span>
                                    <span className="text-white/80 text-sm">Categories</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-32 -top-32 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />
            </section>

            {/* Surprise Me Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-3 rounded-2xl shadow-lg">
                                <Star className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
                                Surprise Me
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg ml-14">Random picks curated just for you</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {random.map((meal) => (
                        <RecipeCard
                            key={meal.idMeal}
                            meal={meal}
                            onOpen={onOpenMeal}
                            isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            </section>

            {/* Trending Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-2xl shadow-lg">
                                <TrendingUp className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                                Trending Now
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg ml-14">Popular choices this week</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((meal) => (
                        <RecipeCard
                            key={meal.idMeal}
                            meal={meal}
                            onOpen={onOpenMeal}
                            isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;