import { Heart, Clock, Users, X } from "lucide-react";

export default function RecipeModal({ meal, onClose, isFavorite, onToggleFavorite }) {
    if (!meal) return null;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ing && ing.trim()) ingredients.push({ ingredient: ing, measure });
    }

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl my-8 relative max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE BUTTON - Always visible at top */}
                <div className="absolute top-0 right-0 z-50 p-4">
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-200 shadow-2xl font-bold text-2xl"
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto rounded-3xl">
                    {/* Header Image Section */}
                    <div className="relative h-64 md:h-80">
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Title and Tags */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                                {meal.strMeal}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/20">
                                    🌍 {meal.strArea}
                                </span>
                                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/20">
                                    🍽️ {meal.strCategory}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                        {/* Meta Info and Favorite Button */}
                        <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                            <div className="flex gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                                    <Clock className="w-5 h-5 text-orange-500" />
                                    <span className="font-medium">45 mins</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                                    <Users className="w-5 h-5 text-orange-500" />
                                    <span className="font-medium">4 servings</span>
                                </div>
                            </div>
                            <button
                                onClick={() => onToggleFavorite(meal)}
                                className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 px-5 py-2.5 rounded-full hover:from-orange-100 hover:to-red-100 transition-all duration-200 shadow-sm hover:shadow-md group"
                            >
                                <Heart className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${isFavorite ? "fill-current text-red-500" : ""}`} />
                                <span className="font-semibold">{isFavorite ? "Saved" : "Save Recipe"}</span>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Ingredients Section */}
                            <div className="md:col-span-1">
                                <div className="sticky top-4">
                                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                                            <span className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-md">
                                                {ingredients.length}
                                            </span>
                                            Ingredients
                                        </h3>
                                        <p className="text-sm text-gray-600 ml-12">Everything you need</p>
                                    </div>

                                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                                        {ingredients.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-all duration-200 border border-transparent hover:border-orange-200 group"
                                            >
                                                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                                                <div className="flex-1">
                                                    <p className="font-semibold text-gray-900">{item.ingredient}</p>
                                                    <p className="text-sm text-gray-500 mt-0.5">{item.measure}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Instructions Section */}
                            <div className="md:col-span-2">
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                        <span className="text-3xl">👨‍🍳</span>
                                        Cooking Instructions
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">Follow these steps to create your dish</p>
                                </div>

                                <div className="prose prose-orange max-w-none space-y-4">
                                    {meal.strInstructions.split('\n').map((paragraph, idx) => (
                                        paragraph.trim() && (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-gray-700 leading-relaxed flex-1 pt-1">
                                                    {paragraph}
                                                </p>
                                            </div>
                                        )
                                    ))}
                                </div>

                                {/* Video Tutorial Button */}
                                {meal.strYoutube && (
                                    <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-2 border-red-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-lg mb-1">Video Tutorial Available</h4>
                                                <p className="text-sm text-gray-600">Watch step-by-step instructions</p>
                                            </div>
                                            <a
                                                href={meal.strYoutube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-red-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                                            >
                                                <span className="text-xl">▶️</span>
                                                Watch Now
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}