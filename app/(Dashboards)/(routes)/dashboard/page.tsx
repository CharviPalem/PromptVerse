"use client"

import { ArrowRight, Bot, ExternalLink, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { tools } from "@/constants" // we will loop thru this to render the individual cards

export default function HomePage() {
  const router = useRouter()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Introducing AI Platform
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 pb-2">
              Explore the Power of AI
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Chat with the smartest AI assistants, generate stunning images, create code, and more with our
              cutting-edge AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" onClick={() => router.push("/dashboard")} className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => router.push("/pricing")} className="gap-2">
                View Pricing <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">AI Tools</h2>
            </div>
            <p className="text-muted-foreground text-center max-w-[600px]">
              Discover our suite of powerful AI tools designed to help you create, analyze, and innovate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className={cn(
                  "group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg",
                  hoveredCard === tool.href ? "border-primary/50 shadow-lg" : "border-border",
                )}
                onMouseEnter={() => setHoveredCard(tool.href)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => router.push(tool.href)}
              >
                <CardHeader
                  className={cn(
                    "p-6 transition-colors duration-300",
                    hoveredCard === tool.href ? tool.bgColor : "bg-card",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "p-3 rounded-xl transition-colors duration-300",
                        hoveredCard === tool.href ? "bg-white/90" : tool.bgColor,
                      )}
                    >
                      <tool.icon
                        className={cn(
                          "w-8 h-8 transition-colors duration-300",
                          hoveredCard === tool.href ? tool.color : tool.color,
                        )}
                      />
                    </div>
                    <h3
                      className={cn(
                        "text-xl font-bold transition-colors duration-300",
                        hoveredCard === tool.href ? "text-white" : "text-foreground",
                      )}
                    >
                      {tool.label}
                    </h3>
                  </div>
                </CardHeader>
                {/* <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {tool.description ||
                      `Access our powerful ${tool.label.toLowerCase()} AI tool to enhance your workflow.`}
                  </p>
                </CardContent> */}
                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "gap-2 group-hover:translate-x-1 transition-transform",
                      hoveredCard === tool.href && "text-primary",
                    )}
                  >
                    Try now <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Platform</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our platform offers cutting-edge AI capabilities with an intuitive interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Models",
                description: "Access state-of-the-art AI models trained on diverse datasets for optimal performance.",
                icon: Bot,
              },
              {
                title: "Easy Integration",
                description: "Seamlessly integrate our AI tools into your existing workflows and applications.",
                icon: Sparkles,
              },
              {
                title: "Affordable Pricing",
                description:
                  "Flexible pricing plans designed to scale with your needs, from individuals to enterprises.",
                icon: ExternalLink,
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-sm bg-background">
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary/10 to-indigo-500/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-[600px]">
              <h2 className="text-3xl font-bold">Ready to transform your workflow?</h2>
              <p className="text-muted-foreground">
                Join thousands of users already leveraging our AI tools to boost productivity and creativity.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => router.push("/dashboard")} className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => router.push("/pricing")}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-bold">AI Platform</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

