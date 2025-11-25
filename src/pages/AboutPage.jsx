import { ChefHat, Search, BookOpen, Heart, TrendingUp, Sparkles, Zap, Globe, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }

                @keyframes gradient-x {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }

                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.4); }
                    50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 5s ease infinite;
                }

                .animate-glow {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>

            {/* Hero Section with 3D Effect */}
            <div className="relative mb-12 perspective-1000">
                <div className="absolute inset-0 animate-gradient-x bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 rounded-3xl blur-2xl opacity-50" />
                <div className="relative animate-gradient-x bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-3xl p-10 md:p-16 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                    {/* Floating Background Elements */}
                    <div className="absolute top-5 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
                    <div className="absolute bottom-10 left-5 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-50 animate-glow" />
                                <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/40 transform hover:rotate-12 transition-transform duration-300">
                                    <ChefHat className="w-12 h-12 text-white drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full border border-white/30">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-yellow-300" />
                                    <span className="text-white font-bold">About Us</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
                            About
                            <span className="block bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                                Foodly
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/95 max-w-3xl drop-shadow-lg font-medium">
                            Your personal recipe discovery platform, bringing the world's flavors to your kitchen 🌍✨
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                    { icon: Globe, value: "50+", label: "Countries" },
                    { icon: BookOpen, value: "1K+", label: "Recipes" },
                    { icon: Heart, value: "500K+", label: "Favorites" },
                    { icon: Award, value: "4.9★", label: "Rating" }
                ].map((stat, idx) => (
                    <div key={idx} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                        <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-300 transform hover:-translate-y-2">
                            <stat.icon className="w-8 h-8 text-orange-500 mb-3 group-hover:scale-110 transition-transform" />
                            <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="space-y-8">
                {/* Mission Section with Glass Effect */}
                <section className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-10 border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-300">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                Our Mission
                            </h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                            Foodly is dedicated to making cooking accessible and enjoyable for everyone. We believe that great food brings people together, and our mission is to help you discover, save, and prepare delicious meals from around the world. 🍳❤️
                        </p>
                    </div>
                </section>

                {/* Features Section with Hover Effects */}
                <section className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-gray-100 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-20" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Features
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: Search, title: "Smart Search", desc: "Find recipes by name, ingredient, or cuisine", gradient: "from-blue-500 to-cyan-500" },
                                { icon: BookOpen, title: "Browse Categories", desc: "Explore organized recipe collections", gradient: "from-orange-500 to-red-500" },
                                { icon: Heart, title: "Save Favorites", desc: "Keep track of your favorite recipes", gradient: "from-pink-500 to-rose-500" },
                                { icon: TrendingUp, title: "Trending Recipes", desc: "Discover popular dishes", gradient: "from-green-500 to-emerald-500" }
                            ].map((feature, idx) => (
                                <div key={idx} className="group relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                                    <div className="relative flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transform hover:-translate-y-1">
                                        <div className="flex-shrink-0">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                                <feature.icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 mb-2 text-xl group-hover:text-orange-600 transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Powered By Section with Modern Card */}
                <section className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative bg-white rounded-3xl p-10 shadow-xl border-2 border-gray-100 hover:border-green-300 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                Powered By
                            </h3>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Recipe data provided by{' '}
                                <a
                                    href="https://www.themealdb.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-black text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text hover:from-orange-700 hover:to-red-700 underline decoration-2 underline-offset-4 decoration-orange-500 hover:decoration-red-500 transition-all"
                                >
                                    TheMealDB
                                    <span className="text-orange-600">↗</span>
                                </a>
                                , a free recipe API trusted by developers worldwide 🌟
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative overflow-hidden rounded-3xl">
                    <div className="absolute inset-0 animate-gradient-x bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-600" />
                    <div className="relative p-12 text-center">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-float" />
                            <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                                Ready to Cook? 👨‍🍳
                            </h3>
                            <p className="text-2xl text-white/95 mb-8 max-w-2xl mx-auto font-medium">
                                Start your culinary adventure today and discover amazing recipes!
                            </p>
                            <div className="inline-flex gap-4">
                                <div className="group bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border-2 border-white/40 hover:bg-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <span className="text-white font-bold text-lg flex items-center gap-2">
                                        🚀 Get Started
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}