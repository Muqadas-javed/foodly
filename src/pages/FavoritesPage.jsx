import { Heart } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage({ favorites, onOpenMeal, onToggleFavorite }) {
    if (favorites.length === 0) {
        return (
            <div className="text-center py-20">
                <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">No Favorites Yet</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Start exploring recipes and save your favorites by clicking the heart icon
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h2>
                <p className="text-gray-600">Your saved recipes ({favorites.length})</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((meal) => (
                    <RecipeCard
                        key={meal.idMeal}
                        meal={meal}
                        onOpen={onOpenMeal}
                        isFavorite={true}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </div>
    );
}