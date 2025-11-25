import axios from "axios";

const API = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = (query) =>
    axios.get(`${API}/search.php?s=${query}`);

export const getMealById = (id) =>
    axios.get(`${API}/lookup.php?i=${id}`);

export const getCategoryMeals = (cat) =>
    axios.get(`${API}/filter.php?c=${cat}`);

export const getCategories = () =>
    axios.get(`${API}/categories.php`);

export const getRandomMeal = () =>
    axios.get(`${API}/random.php`);