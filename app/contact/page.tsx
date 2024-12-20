'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Starfield } from "@/components/starfield"
import { GradientBackground } from "@/components/gradient-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, CheckCircle, Shield, CuboidIcon as Cube, Zap } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setIsSubmitted(true)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const faqs = [
    {
      question: "How quickly can I get a response to my inquiry?",
      answer: "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please use our priority support channel available to Pro and Enterprise customers."
    },
    {
      question: "Do you offer custom solutions for businesses?",
      answer: "Yes, we offer tailored solutions for businesses of all sizes. Our team can work with you to develop custom 3D conversion workflows that meet your specific needs."
    },
    {
      question: "Can I schedule a demo of your 3D conversion technology?",
      answer: "We offer live demos for potential clients. You can schedule a demo through our website or by contacting our sales team directly."
    }
  ]

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

        {/* Main Content */}
        <main className="pt-32 pb-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're here to help you bring your 2D designs to life in stunning 3D. Let us know how we can assist you.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-12 mb-24 items-start"
            >
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-black/30 backdrop-blur-sm border-purple-500/20 h-full">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input type="text" placeholder="First Name" required className="bg-purple-900/20 border-purple-500/50 text-white placeholder-gray-400" />
                      <Input type="text" placeholder="Last Name" required className="bg-purple-900/20 border-purple-500/50 text-white placeholder-gray-400" />
                    </div>
                    <Input type="email" placeholder="Your Email" required className="bg-purple-900/20 border-purple-500/50 text-white placeholder-gray-400" />
                    <Input type="text" placeholder="Subject" required className="bg-purple-900/20 border-purple-500/50 text-white placeholder-gray-400" />
                    <Textarea placeholder="Your Message" required className="bg-purple-900/20 border-purple-500/50 text-white placeholder-gray-400 min-h-[150px]" />
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-md text-green-300"
                    >
                      Thank you for your message. We'll get back to you soon!
                    </motion.div>
                  )}
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-black/30 backdrop-blur-sm border-purple-500/20 h-full">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                        <p className="text-gray-400">info@imageto3d.com</p>
                        <p className="text-gray-400">support@imageto3d.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                        <p className="text-gray-400">Mon - Fri, 9am - 6pm</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                        <p className="text-gray-400">123 AI Street, Tech City</p>
                        <p className="text-gray-400">Innovation State, 12345</p>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-600/10">
                      Twitter
                    </Button>
                    <Button variant="outline" className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-600/10">
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-600/10">
                      GitHub
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-24"
            >
              <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-center text-white">
                Frequently Asked Questions
              </motion.h2>
              <Card className="bg-black/30 backdrop-blur-sm border-purple-500/20 p-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <AccordionItem value={`item-${index}`} className="border-b border-purple-500/20">
                        <AccordionTrigger className="text-white hover:text-purple-400">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-400">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </Card>
            </motion.div>

            {/* Billing & Support Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-24"
            >
              <Card className="bg-black/30 backdrop-blur-sm border-purple-500/20 p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div variants={itemVariants} className="space-y-6">
                    <h2 className="text-4xl font-bold text-white leading-tight">
                      You focus on creation,<br />
                      we'll handle the conversion.
                    </h2>
                    <p className="text-gray-400 text-lg">
                      With our advanced AI technology, you can focus on your creative process while we take care of transforming your 2D designs into stunning 3D models. Simple, fast, and reliable.
                    </p>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                      Start Converting Now
                    </Button>

                    <div className="pt-8 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          >
                            <CheckCircle className="w-6 h-6 text-cyan-400" />
                          </motion.div>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Enterprise Support</h3>
                          <p className="text-gray-400">Dedicated 24/7 support team for all your conversion needs and technical questions</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">100% Secure</h3>
                          <p className="text-gray-400">Enterprise-grade security for your designs and 3D models with encrypted storage</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-1">Lightning Fast</h3>
                          <p className="text-gray-400">Get your 3D models in minutes with our optimized conversion pipeline</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div>
                  <motion.div variants={itemVariants} className="relative">
                    <div className="bg-black/40 rounded-xl p-6 border border-purple-500/20">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                            <Cube className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold">Latest Conversion</div>
                            <div className="text-gray-400 text-sm">2 mins ago</div>
                          </div>
                        </div>
                        <Button variant="outline" className="border-purple-500/20 text-purple-400">
                          View All
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="Product"
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <div className="text-white font-medium">Product Model</div>
                              <div className="text-gray-400 text-sm">High Quality</div>
                            </div>
                          </div>
                          <div className="text-cyan-400 font-mono">2.5MB</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="Architecture"
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <div className="text-white font-medium">Architecture</div>
                              <div className="text-gray-400 text-sm">Ultra HD</div>
                            </div>
                          </div>
                          <div className="text-cyan-400 font-mono">4.2MB</div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg">
                          <div className="flex items-center gap-3">
                            <Image
                              src="/placeholder.svg?height=40&width=40"
                              alt="Character"
                              width={40}
                              height={40}
                              className="rounded-lg"
                            />
                            <div>
                              <div className="text-white font-medium">Character</div>
                              <div className="text-gray-400 text-sm">Standard</div>
                            </div>
                          </div>
                          <div className="text-cyan-400 font-mono">1.8MB</div>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <Image
                          src="/placeholder.svg?height=40&width=135"
                          alt="App Store"
                          width={135}
                          height={40}
                          className="rounded-lg"
                        />
                        <Image
                          src="/placeholder.svg?height=40&width=135"
                          alt="Play Store"
                          width={135}
                          height={40}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

