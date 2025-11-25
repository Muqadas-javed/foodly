import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import { searchMeals, getMealById } from "./services/mealApi";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("foodly-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    localStorage.setItem("foodly-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setSearching(true);
    setCurrentPage("search");
    const res = await searchMeals(query);
    setSearchResults(res.data.meals || []);
    setSearching(false);
  };

  const openMeal = async (meal) => {
    const full = await getMealById(meal.idMeal);
    setSelectedMeal(full.data.meals[0]);
  };

  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.idMeal === meal.idMeal);
      if (exists) {
        return prev.filter((f) => f.idMeal !== meal.idMeal);
      }
      return [...prev, meal];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {currentPage === "home" && (
          <HomePage
            onOpenMeal={openMeal}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {currentPage === "categories" && (
          <CategoriesPage
            onOpenMeal={openMeal}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {currentPage === "favorites" && (
          <FavoritesPage
            favorites={favorites}
            onOpenMeal={openMeal}
            onToggleFavorite={toggleFavorite}
          />
        )}

        {currentPage === "about" && <AboutPage />}

        {currentPage === "search" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Search Results {query && `for "${query}"`}
            </h2>
            <p className="text-gray-600 mb-6">
              {searchResults.length} recipe{searchResults.length !== 1 ? "s" : ""} found
            </p>
            {searching ? (
              <div className="flex justify-center py-12">
                <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((meal) => (
                  <RecipeCard
                    key={meal.idMeal}
                    meal={meal}
                    onOpen={openMeal}
                    isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try searching for something else</p>
              </div>
            )}
          </div>
        )}
      </main>

      <RecipeModal
        meal={selectedMeal}
        onClose={() => setSelectedMeal(null)}
        isFavorite={favorites.some((f) => f.idMeal === selectedMeal?.idMeal)}
        onToggleFavorite={toggleFavorite}
      />

      <Footer />
    </div>
  );
}