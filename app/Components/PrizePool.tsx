"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { Sparkles, Zap, Flame } from "lucide-react"

export default function PrizePool() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prizeRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const controls = useAnimation()

  // GSAP animations
  useEffect(() => {
    if (!containerRef.current) return

    // Create a timeline for the initial animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate the background elements
    tl.fromTo(".bg-hexagon", { opacity: 0, scale: 0.8 }, { opacity: 0.15, scale: 1, stagger: 0.1, duration: 1.5 })

    // Animate the prize cards with GSAP
    prizeRefs.forEach((ref, index) => {
      if (!ref.current) return

      // Staggered entrance for each prize
      tl.fromTo(ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: index * 0.2 }, "-=0.4")

      // Animate the prize amount with a count-up effect
      const prizeValue = ref.current.querySelector(".prize-value")
      if (prizeValue) {
        const finalValue = index === 0 ? 6000 : index === 1 ? 4500 : 3000

        tl.fromTo(
          prizeValue,
          { innerText: "0" },
          {
            innerText: finalValue,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function () {
              // @ts-ignore - GSAP's typing doesn't include innerText
              prizeValue.innerHTML = `${Math.floor(this.targets()[0].innerText).toLocaleString()}`
            },
          },
          "-=0.6",
        )
      }
    })

    // Create floating animation for background elements
    gsap.to(".bg-hexagon", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1,
    })

    // Pulsing glow effect on prize cards
    gsap.to(".prize-card", {
      boxShadow: "0 0 30px var(--glow-color)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    })

    return () => {
      tl.kill()
      gsap.killTweensOf(".bg-hexagon")
      gsap.killTweensOf(".prize-card")
    }
  }, [])

  // Handle hover effects with Framer Motion
  const handleHover = (index: number) => {
    setActiveIndex(index)

    // Additional GSAP animation on hover
    if (prizeRefs[index].current) {
      gsap.to(prizeRefs[index].current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        boxShadow: "0 0 40px var(--glow-color)",
        zIndex: 10,
      })

      // Animate the icon
      const icon = prizeRefs[index].current.querySelector(".prize-icon")
      if (icon) {
        gsap.to(icon, {
          rotate: 360,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        })
      }
    }
  }

  const handleHoverEnd = (index: number) => {
    setActiveIndex(null)

    // Reset with GSAP
    if (prizeRefs[index].current) {
      gsap.to(prizeRefs[index].current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        zIndex: 1,
      })
    }
  }

  // Generate background hexagons
  const hexagons = Array.from({ length: 20 }).map((_, i) => (
    <div
      key={i}
      className="bg-hexagon absolute opacity-0"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 100 + 50}px`,
        height: `${Math.random() * 100 + 50}px`,
        background: `rgba(${Math.random() * 100 + 50}, ${Math.random() * 100 + 50}, ${Math.random() * 255}, 0.1)`,
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
    />
  ))

  return (
    <div
      ref={containerRef}
      className="relative w-[85%] min-h-screen bg-transparent overflow-hidden flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {hexagons}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Title with Framer Motion */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-20 text-center relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <span className="bg-clip-text text-white">
          PRIZE POOL
        </span>
      </motion.h1>

      {/* Prize cards container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl relative z-10">
        {/* First Prize */}
        <motion.div
          ref={prizeRefs[0]}
          className="prize-card relative w-full md:w-1/3 max-w-xs"
          style={{ "--glow-color": "rgba(0, 247, 255, 0.5)" } as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
        >
          <div className="relative bg-gradient-to-br from-[#0D1E45] to-[#071330] rounded-2xl p-8 border border-[#1E3A6E] backdrop-blur-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00F2FE] opacity-10 blur-3xl rounded-full"></div>
            </div>

            {/* Prize content */}
            <div className="relative z-10">
              <div className="prize-icon flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00F2FE] blur-xl opacity-30 rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] p-4 rounded-full">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-white mb-2">FIRST PRIZE</h2>

              <div className="prize-value text-5xl font-bold text-center text-white my-6">6,000</div>

              
            </div>
          </div>

          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00F2FE] to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Second Prize */}
        <motion.div
          ref={prizeRefs[1]}
          className="prize-card relative w-full md:w-1/3 max-w-xs"
          style={{ "--glow-color": "rgba(147, 51, 234, 0.5)" } as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
        >
          <div className="relative bg-gradient-to-br from-[#1A103C] to-[#0E0720] rounded-2xl p-8 border border-[#3B2A7E] backdrop-blur-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9333EA] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#9333EA] opacity-10 blur-3xl rounded-full"></div>
            </div>

            {/* Prize content */}
            <div className="relative z-10">
              <div className="prize-icon flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#9333EA] blur-xl opacity-30 rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-[#C084FC] to-[#9333EA] p-4 rounded-full">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-white mb-2">SECOND PRIZE</h2>

              <div className="prize-value text-5xl font-bold text-center text-white my-6">4,500</div>

            </div>
          </div>

          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#9333EA] to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </motion.div>

        {/* Third Prize */}
        <motion.div
          ref={prizeRefs[2]}
          className="prize-card relative w-full md:w-1/3 max-w-xs"
          style={{ "--glow-color": "rgba(249, 115, 22, 0.5)" } as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
        >
          <div className="relative bg-gradient-to-br from-[#3D1D10] to-[#200A05] rounded-2xl p-8 border border-[#7E3A2A] backdrop-blur-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#F97316] opacity-10 blur-3xl rounded-full"></div>
            </div>

            {/* Prize content */}
            <div className="relative z-10">
              <div className="prize-icon flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F97316] blur-xl opacity-30 rounded-full"></div>
                  <div className="relative bg-gradient-to-br from-[#FDBA74] to-[#F97316] p-4 rounded-full">
                    <Flame className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-white mb-2">THIRD PRIZE</h2>

              <div className="prize-value text-5xl font-bold text-center text-white my-6">3,000</div>

            </div>
          </div>

          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F97316] to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
        </motion.div>
      </div>

    </div>
  )
}

