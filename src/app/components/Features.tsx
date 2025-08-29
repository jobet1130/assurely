import { Card, CardContent } from "./ui/card";
import { CheckCircle, Bug, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: "Test Management",
      description:
        "Organize and execute your test cases with powerful management tools. Create test suites, track progress, and collaborate with your team in real-time.",
      benefits: [
        "Centralized test repository",
        "Real-time collaboration",
        "Progress tracking",
        "Test execution history",
      ],
      color: "blue",
      bgGradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bug,
      title: "Bug Tracking",
      description:
        "Identify, document, and resolve issues efficiently with our integrated bug tracking system. Never lose track of critical bugs again.",
      benefits: [
        "Issue prioritization",
        "Automatic notifications",
        "Detailed bug reports",
        "Integration with dev tools",
      ],
      color: "purple",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Automation Integration",
      description:
        "Seamlessly integrate with popular automation frameworks and CI/CD pipelines to accelerate your testing workflow.",
      benefits: [
        "CI/CD integration",
        "Multiple framework support",
        "Automated reporting",
        "Parallel test execution",
      ],
      color: "green",
      bgGradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20 relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
            <span className="font-medium">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Everything You Need for
            <span className="block">Quality Assurance</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-[700px] mx-auto leading-relaxed px-4">
            Our comprehensive platform provides all the tools your team needs to
            deliver high-quality software faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group sm:col-span-1 lg:col-span-1"
              >
                <CardContent className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                  <div
                    className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${feature.bgGradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className={`w-5 h-5 text-${feature.color}-500`}
                        />
                        <span className="font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-gray-50 justify-between"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white mx-4 sm:mx-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Transform Your QA Process?
          </h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of teams already using TestFlow to deliver better
            software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
