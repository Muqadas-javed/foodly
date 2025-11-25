import { ChefHat } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <ChefHat className="w-6 h-6 text-orange-500" />
                        <span className="font-bold text-gray-900">Foodly</span>
                        <span className="text-gray-500 text-sm">© 2024</span>
                    </div>
                    <p className="text-gray-600 text-sm text-center">
                        Made with ❤️ for food lovers everywhere
                    </p>
                </div>
            </div>
        </footer>
    );
}