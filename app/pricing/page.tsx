'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, X, HelpCircle, CreditCard } from 'lucide-react'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Starfield } from "@/components/starfield"
import { GradientBackground } from "@/components/gradient-background"
import { Footer } from "@/components/footer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "For individuals starting with 3D conversion",
    features: [
      "5 image conversions per month",
      "Basic 3D model quality",
      "720p maximum resolution",
      "Standard support",
      "Basic export formats",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29.99",
    description: "For professionals and small teams",
    features: [
      "100 image conversions per month",
      "High-quality 3D models",
      "4K resolution support",
      "Priority support",
      "All export formats",
    ],
    button: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited conversions",
      "Ultra HD quality",
      "8K resolution support",
      "24/7 dedicated support",
      "Custom integrations",
    ],
    button: "Contact Sales",
    highlighted: false,
  },
]

const comparisonFeatures = [
  {
    name: "Number of conversions",
    free: "5/mo",
    pro: "100/mo",
    enterprise: "Unlimited",
    tooltip: "The number of 2D to 3D conversions you can perform each month."
  },
  {
    name: "3D model quality",
    free: "Basic",
    pro: "High",
    enterprise: "Ultra HD",
    tooltip: "The level of detail and realism in the generated 3D models."
  },
  {
    name: "Maximum resolution",
    free: "720p",
    pro: "4K",
    enterprise: "8K",
    tooltip: "The highest resolution supported for input images and output 3D models."
  },
  {
    name: "Export formats",
    free: false,
    pro: true,
    enterprise: true,
    tooltip: "Ability to export 3D models in various file formats."
  },
  {
    name: "API access",
    free: false,
    pro: true,
    enterprise: true,
    tooltip: "Access to our API for integrating 3D conversion into your own applications."
  },
  {
    name: "Collaboration tools",
    free: false,
    pro: true,
    enterprise: true,
    tooltip: "Tools for team collaboration on 3D projects."
  },
  {
    name: "Custom branding",
    free: false,
    pro: false,
    enterprise: true,
    tooltip: "Ability to add your own branding to the 3D viewer and exports."
  },
  {
    name: "Dedicated support",
    free: false,
    pro: false,
    enterprise: true,
    tooltip: "Access to a dedicated support team for your account."
  },
  {
    name: "Advanced analytics",
    free: false,
    pro: true,
    enterprise: true,
    tooltip: "Detailed analytics on your 3D conversions and model usage."
  },
  {
    name: "Integration assistance",
    free: false,
    pro: false,
    enterprise: true,
    tooltip: "Personalized assistance with integrating our 3D conversion technology into your workflow."
  },
]

const addOns = [
  {
    name: "Extra Storage",
    price: "9.99",
    description: "Additional 100GB of cloud storage for your 3D models",
    period: "per month",
  },
  {
    name: "API Access",
    price: "49.99",
    description: "Full API access for seamless integration",
    period: "per month",
  },
]

const faqs = [
  {
    question: "How does the image to 3D conversion work?",
    answer: "Our AI-powered technology analyzes your 2D images and automatically generates detailed 3D models using advanced machine learning algorithms. The process is fully automated and typically takes just a few minutes.",
  },
  {
    question: "What file formats do you support?",
    answer: "We support all major image formats including JPG, PNG, TIFF, and BMP for input. For 3D exports, we support GLB, GLTF, FBX, OBJ, and more depending on your subscription tier.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your new rate will take effect at the next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial of our Pro plan. You can convert up to 20 images during this period to test our service.",
  },
]

export default function PricingPage() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <GradientBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl z-50">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 pl-4 md:pl-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                Image to 3D
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Home
              </a>
              <a href="#" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Solutions
              </a>
              <a href="/pricing" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Pricing
              </a>
              <a href="/contact" className="text-sm text-gray-200 hover:text-purple-400 transition-colors hover:glow">
                Contact
              </a>
            </nav>
            <div className="pr-4 md:pr-8">
              <Button className="bg-purple-600 hover:bg-purple-700">Try for Free</Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-8 md:px-16 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-500/10 to-transparent text-sm py-2 px-4 rounded-full inline-flex items-center gap-2"
            >
              <span className="text-purple-400">20% DISCOUNT</span>
              <span className="text-gray-400">FOR 1 MONTH ACCOUNT</span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-xl"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                  <span className="text-white">The Next</span><br />
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Generation</span><br />
                  <span className="text-white">Payment Method.</span>
                </h1>
                <p className="text-gray-400 text-lg mb-10 max-w-lg">
                  Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                  We examine annual percentage rates, annual fees.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="rounded-full bg-purple-600 hover:bg-purple-700 px-8 py-6 text-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative h-[400px] w-full">
                  {/* Floating orbs */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-10 right-10 w-16 h-16 rounded-full bg-purple-500/30 blur-xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-purple-600/20 blur-xl"
                  />

                  {/* Floating cards */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      {/* Card stack */}
                      <div className="absolute top-0 left-0 w-[300px] h-[180px] bg-purple-900/50 rounded-2xl backdrop-blur-xl border border-purple-500/20 transform rotate-12 translate-y-8"></div>
                      <div className="absolute top-0 left-0 w-[300px] h-[180px] bg-purple-800/50 rounded-2xl backdrop-blur-xl border border-purple-500/20 transform rotate-6 translate-y-4"></div>
                      <div className="w-[300px] h-[180px] bg-purple-700/50 rounded-2xl backdrop-blur-xl border border-purple-500/20 flex items-center justify-center">
                        <CreditCard className="w-12 h-12 text-purple-300" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Robot hand */}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 right-0 w-48 h-48"
                  >
                    <div className="w-full h-full bg-gradient-to-t from-purple-600/20 to-purple-400/20 rounded-full blur-2xl"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Pricing Plans for Every Need
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Choose the perfect plan to bring your 2D images to life in stunning 3D
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className={cn(
                      "relative p-6 backdrop-blur-xl border",
                      tier.highlighted
                        ? "bg-purple-900/50 border-purple-500"
                        : "bg-black/50 border-purple-500/20 hover:border-purple-500/40"
                    )}
                  >
                    {tier.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-medium text-white">
                        Most Popular
                      </div>
                    )}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                      <div className="mt-2 flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${tier.price}</span>
                        {tier.price !== "Custom" && <span className="ml-2 text-gray-400">/month</span>}
                      </div>
                      <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
                    </div>
                    <ul className="mb-6 space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <Check className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={cn(
                        "w-full",
                        tier.highlighted
                          ? "bg-purple-500 hover:bg-purple-600"
                          : "bg-purple-500/20 hover:bg-purple-500/30"
                      )}
                    >
                      {tier.button}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Compare Plans Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-white">Compare Plans</h2>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <div className="bg-black/30 backdrop-blur-md rounded-lg border border-purple-500/20 overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 p-6 border-b border-purple-500/20">
                      <div className="text-left font-semibold text-purple-300">Features</div>
                      <div className="text-center font-semibold text-purple-300">Free</div>
                      <div className="text-center font-semibold text-purple-300">Pro</div>
                      <div className="text-center font-semibold text-purple-300">Enterprise</div>
                    </div>
                    {comparisonFeatures.map((feature, index) => (
                      <div key={index} className={cn(
                        "grid grid-cols-4 gap-4 p-6",
                        index !== comparisonFeatures.length - 1 && "border-b border-purple-500/10"
                      )}>
                        <div className="text-left text-white flex items-center">
                          {feature.name}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 ml-2 text-purple-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="text-center">
                          {typeof feature.free === 'string' ? (
                            <span className="text-gray-300">{feature.free}</span>
                          ) : feature.free ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.pro === 'string' ? (
                            <span className="text-purple-400">{feature.pro}</span>
                          ) : feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.enterprise === 'string' ? (
                            <span className="text-purple-300">{feature.enterprise}</span>
                          ) : feature.enterprise ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-white">Add-Ons</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {addOns.map((addon, index) => (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 bg-black/50 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/40">
                      <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl font-bold text-white">${addon.price}</span>
                        <span className="ml-2 text-gray-400">{addon.period}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-4">{addon.description}</p>
                      <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30">
                        Add to Plan
                      </Button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-white">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-purple-500/20"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Images?</h2>
              <p className="text-lg text-gray-400 mb-8">
                Join thousands of satisfied users who have revolutionized their workflow with our AI-powered 3D conversion
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

