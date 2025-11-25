import { useState } from "react";
import { Heart } from "lucide-react";

export default function RecipeCard({ meal, onOpen, isFavorite, onToggleFavorite }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1">
            <div className="relative overflow-hidden aspect-[4/3]">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 animate-pulse" />
                )}
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                />
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(meal);
                    }}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white text-xs">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{meal.strArea}</span>
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">{meal.strCategory}</span>
                    </div>
                </div>
            </div>

            <div className="p-4" onClick={() => onOpen(meal)}>
                <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2">{meal.strMeal}</h3>
                <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    View Recipe
                    <span>→</span>
                </button>
            </div>
        </div>
    );
}