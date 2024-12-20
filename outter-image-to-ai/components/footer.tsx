import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-md border-t border-purple-500/10 text-gray-300">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
              Image to 3D
            </h2>
            <p className="text-sm max-w-xs">
              Transform your 2D images into stunning 3D models with AI precision. Revolutionize your design workflow today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Newsletter
            </h3>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-purple-900/30 border-purple-500/50 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-purple-500/10 px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Image to 3D. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">FAQ</Link>
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">Support</Link>
              <Link href="#" className="text-sm hover:text-purple-400 transition-colors">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

