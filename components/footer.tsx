"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F6a80af1db8104ff4a1b5bea732d858c0%2Fd611cde6711d46099464ffbfcbab9b34?format=webp&width=800"
                alt="G2O Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold">G2O Detailing</span>
            </div>
            <p className="text-sm text-foreground/70">Premium auto detailing services in Medford, OR</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground/70 hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-foreground/70 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-foreground/70 hover:text-accent transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  Paint Correction
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  Interior Detail
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-accent transition-colors">
                  Full Package
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm text-foreground/70"
        >
          <p>&copy; 2025 G2O Auto Detailing. All rights reserved. | Medford, OR</p>
        </motion.div>
      </div>
    </footer>
  )
}
