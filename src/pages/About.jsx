function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 mb-8">
                <ChefHat className="w-16 h-16 text-orange-500 mb-6" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Foodly</h2>
                <p className="text-xl text-gray-700">
                    Your personal recipe discovery platform, bringing the world's flavors to your kitchen
                </p>
            </div>

            <div className="space-y-8">
                <section className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Foodly is dedicated to making cooking accessible and enjoyable for everyone. We believe that great food brings people together, and our mission is to help you discover, save, and prepare delicious meals from around the world.
                    </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: Search, title: "Smart Search", desc: "Find recipes by name, ingredient, or cuisine" },
                            { icon: BookOpen, title: "Browse Categories", desc: "Explore organized recipe collections" },
                            { icon: Heart, title: "Save Favorites", desc: "Keep track of your favorite recipes" },
                            { icon: TrendingUp, title: "Trending Recipes", desc: "Discover popular dishes" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <feature.icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Powered By</h3>
                    <p className="text-gray-700">
                        Recipe data provided by <a href="https://www.themealdb.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-medium hover:underline">TheMealDB</a>, a free recipe API.
                    </p>
                </section>
            </div>
        </div>
    );
}
