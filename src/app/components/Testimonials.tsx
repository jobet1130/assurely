import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      content:
        "TestFlow has revolutionized our QA process. We've reduced testing time by 60% while improving our bug detection rate. The automation features are incredible!",
      author: "Sarah Chen",
      role: "QA Director",
      company: "TechCorp",
      initials: "SC",
      rating: 5,
      metric: "60% faster testing",
    },
    {
      content:
        "The automation integration saved us countless hours. Our CI/CD pipeline is now seamless and reliable. Best investment we've made this year.",
      author: "Michael Rodriguez",
      role: "DevOps Engineer",
      company: "CloudStart",
      initials: "MR",
      rating: 5,
      metric: "50+ hours saved/month",
    },
    {
      content:
        "Finally, a testing platform that our entire team can use efficiently. The collaboration features are outstanding and the UI is intuitive.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "InnovateLabs",
      initials: "EW",
      rating: 5,
      metric: "Team productivity +40%",
    },
  ];

  const clientLogos = [
    { name: "TechCorp", color: "bg-blue-500" },
    { name: "CloudStart", color: "bg-green-500" },
    { name: "InnovateLabs", color: "bg-purple-500" },
    { name: "DevFlow", color: "bg-orange-500" },
    { name: "QualityFirst", color: "bg-pink-500" },
    { name: "TestMasters", color: "bg-cyan-500" },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <span className="font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Leading Teams
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            See what our customers have to say about their experience with
            TestFlow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm relative overflow-hidden group sm:col-span-1 lg:col-span-1"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>

              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {testimonial.metric}
                  </div>
                </div>

                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                <div className="flex items-center space-x-4 pt-4 border-t">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="space-y-12">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Trusted by 500+ companies worldwide
            </p>
            <div className="flex justify-center space-x-8 text-3xl font-bold text-gray-400">
              <span>500+</span>
              <span className="text-gray-300">|</span>
              <span>Companies</span>
              <span className="text-gray-300">|</span>
              <span>50M+ Tests</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-all border group-hover:border-blue-200">
                  <div
                    className={`w-8 h-8 ${logo.color} rounded-lg flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">
                      {logo.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
