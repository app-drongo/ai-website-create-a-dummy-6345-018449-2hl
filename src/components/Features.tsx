// Features Component
// Generated: 2025-08-29T11:13:37.527Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  Cpu,
  Code2,
  Headphones,
  Brain
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Leverage machine learning algorithms to automate complex workflows and boost productivity.",
      badge: "AI/ML"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance with SOC2, GDPR, and industry standards.",
      badge: "Security"
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Auto-scaling cloud architecture that grows with your business demands seamlessly.",
      badge: "Cloud"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast data processing with microsecond latency for critical applications.",
      badge: "Performance"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep business intelligence with predictive analytics and custom dashboards.",
      badge: "Analytics"
    },
    {
      icon: Code2,
      title: "Developer APIs",
      description: "RESTful APIs and SDKs with comprehensive documentation for rapid integration.",
      badge: "Integration"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed processing at the edge for reduced latency and improved performance.",
      badge: "Infrastructure"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Progressive web apps optimized for mobile devices and offline functionality.",
      badge: "Mobile"
    },
    {
      icon: Headphones,
      title: "24/7 Tech Support",
      description: "Expert technical support from our engineering team whenever you need assistance.",
      badge: "Support"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Innovation Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Cutting-Edge Tech
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Solutions Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Advanced technology stack designed for modern enterprises and innovative startups 
            ready to disrupt their industries.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your tech infrastructure?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Tech Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Architecture
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}