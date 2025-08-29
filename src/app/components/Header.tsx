import { Button } from "@/app/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm sm:text-lg">QA</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TestFlow
          </span>
        </div>

        {/* Navigation and Auth Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-6">
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-blue-600 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-blue-600 transition-colors font-medium relative group"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-blue-600 transition-colors font-medium relative group"
            >
              Pricing
            </a>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="ghost"
              className="hidden sm:flex hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              Login
            </Button>
            <Button className="text-sm sm:text-base px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <span className="hidden sm:inline">Get Started Free</span>
              <span className="sm:hidden">Start Free</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
