"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  { id: 1, title: "Ceramic Coating", category: "exterior", image: "https://images.pexels.com/photos/16157554/pexels-photo-16157554.jpeg" },
  { id: 2, title: "Paint Correction", category: "exterior", image: "https://images.pexels.com/photos/6317765/pexels-photo-6317765.jpeg" },
  { id: 3, title: "Interior Detail", category: "interior", image: "https://images.pexels.com/photos/1822838/pexels-photo-1822838.jpeg" },
  { id: 4, title: "Full Detail", category: "full", image: "https://images.pexels.com/photos/9622531/pexels-photo-9622531.jpeg" },
  { id: 5, title: "Wheel Shine", category: "exterior", image: "https://images.pexels.com/photos/4870729/pexels-photo-4870729.jpeg" },
  { id: 6, title: "Leather Care", category: "interior", image: "https://images.pexels.com/photos/27298309/pexels-photo-27298309.jpeg" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const handleDragStart = (e: React.MouseEvent) => {
    setDragStart(e.clientX)
  }

  const handleDragEnd = (e: React.MouseEvent) => {
    setDragEnd(e.clientX)
  }

  return (
    <section id="gallery" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See the transformation we deliver for every vehicle
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent/50 transition-all"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <img
                src={image.image}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all mb-2" />
                <h3 className="text-lg font-semibold text-center text-white opacity-0 group-hover:opacity-100 transition-all">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-96 bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Before & After</h3>
              <p className="text-foreground/70">Drag to compare the transformation</p>
            </div>
          </div>

          {/* Draggable handle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-accent cursor-col-resize"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            whileHover={{ scaleX: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-accent-foreground" />
              <ChevronRight className="w-5 h-5 text-accent-foreground" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
