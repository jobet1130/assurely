import { Button } from "./ui/button";
import { ImageWithFallback } from "./imagefallback/ImageWithFallBack";
import { Play, CheckCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-40 bg-gradient-to-br from-blue-50 via-background to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full w-fit border border-blue-200">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="font-medium">Trusted by 500+ companies</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
                Streamline Your QA Testing
                <span className="block">Processes</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
                Accelerate your software delivery with our comprehensive QA
                testing platform. Manage tests, track bugs, and integrate
                automation seamlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-2 hover:bg-gray-50 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Setup in 5 minutes</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Companies
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-600">
                  50M+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Tests Run
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600">
                  99.9%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last mt-8 lg:mt-0">
            <div className="relative">
              {/* Floating elements - hidden on very small screens */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-lg shadow-lg animate-bounce"></div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full shadow-lg animate-bounce delay-500"></div>
              <div className="hidden sm:block absolute top-1/2 -left-6 w-4 h-4 bg-green-500 rounded-full shadow-lg animate-pulse"></div>

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border p-1 lg:p-2">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2NDc2NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="QA Testing Dashboard"
                  className="rounded-lg lg:rounded-xl w-full shadow-lg"
                />

                {/* Floating notification */}
                <div className="absolute top-3 right-3 lg:top-6 lg:right-6 bg-white rounded-lg shadow-lg px-3 py-1 lg:px-4 lg:py-2 border animate-pulse">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs lg:text-sm font-medium">
                      Tests Passing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
