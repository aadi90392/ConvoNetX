"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  MessageSquare,
  Code,
  Users,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react"

// Custom hook for parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance])
}

// Custom hook for counting animation
function useCountAnimation(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef)

  useEffect(() => {
    if (!inView) return

    let startTime
    let animationFrame

    const startAnimation = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(percentage * end))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return { count, ref: nodeRef }
}

// Gradient text component
const GradientText = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-400 ${className}`}>
    {children}
  </span>
)

// Feature card component
const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-violet-500/30 transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-violet-600/20">
          <Icon className="text-white" size={20} />
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Testimonial card component
const TestimonialCard = ({ name, role, company, quote, avatar, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            {avatar}
          </div>
        </div>
        <div>
          <p className="text-gray-300 mb-4 italic">"{quote}"</p>
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-gray-400 text-sm">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Pricing card component
const PricingCard = ({ title, price, features, isPopular, index }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 sm:p-8 rounded-2xl ${
        isPopular
          ? "bg-gradient-to-br from-violet-900/40 to-indigo-900/40 border-2 border-violet-500/50"
          : "bg-white/[0.03] border border-white/10"
      } backdrop-blur-sm overflow-hidden`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold py-1.5 px-3 rounded-bl-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>

      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        {price !== "Custom" && <span className="text-gray-400 ml-2">/month</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <CheckCircle2 className="h-5 w-5 text-violet-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/forums"
        className={`w-full py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
          isPopular
            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/20"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        Get Started
        <ChevronRight className="h-4 w-4" />
      </Link>
    </motion.div>
  )
}

export default function Home() {
  // Scroll animations
  const { scrollYProgress } = useScroll()
  const y1 = useParallax(scrollYProgress, 100)
  const y2 = useParallax(scrollYProgress, -100)

  // Stats counters
  const { count: userCount, ref: userCountRef } = useCountAnimation(25000)
  const { count: messageCount, ref: messageCountRef } = useCountAnimation(1500000)
  const { count: forumCount, ref: forumCountRef } = useCountAnimation(50)

  // Refs for sections
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  // Animated background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-hidden font-sans">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-violet-600/20 rounded-full blur-[120px] opacity-30 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-indigo-600/20 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-[40vw] h-[40vh] bg-blue-600/20 rounded-full blur-[120px] opacity-30 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

      {/* Content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <AnimatePresence>
                  {heroInView && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                      >
                        <span className="inline-block py-1.5 px-4 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-violet-300">
                          Developer Community Platform
                        </span>
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight"
                      >
                        <GradientText>ConvoNetX</GradientText>
                        <br />
                        <span className="text-white">Where Code Meets Community</span>
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg"
                      >
                        Join a thriving ecosystem where developers connect, collaborate, and build the future through
                        specialized language forums and real-time collaboration.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                      >
                        <Link
                            href="/forums"
                          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2 group"
                        >
                          Get Started
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                          href="/chat"
                          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                        >
                         Read More
                        </Link>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <motion.div style={{ y: y1 }} className="relative lg:h-[600px] hidden lg:block">
                {/* Code editor mockup */}
                <div className="absolute inset-0 rounded-2xl bg-[#1E1E3F] shadow-2xl shadow-violet-500/10 overflow-hidden border border-white/10">
                  {/* Editor header */}
                  <div className="h-10 bg-[#2D2B55] flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-400">ConvoNetX - JavaScript Forum</div>
                  </div>

                  {/* Editor content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">1</div>
                      <div>
                        <span className="text-[#FF9D00]">import</span> <span className="text-[#9EFFFF]">React</span>{" "}
                        <span className="text-[#FF9D00]">from</span> <span className="text-[#A5FF90]">'react'</span>;
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">2</div>
                      <div></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">3</div>
                      <div>
                        <span className="text-[#FF9D00]">const</span> <span className="text-[#9EFFFF]">ConvoNetX</span>{" "}
                        <span className="text-white">=</span> <span className="text-[#FF9D00]">()</span>{" "}
                        <span className="text-white">=&gt;</span> <span className="text-white">{`{`}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">4</div>
                      <div>
                        &nbsp;&nbsp;<span className="text-[#FF9D00]">return</span> <span className="text-white">(</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">5</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9EFFFF]">{"<div>"}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">6</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9EFFFF]">{"<h1>"}</span>
                        <span className="text-white">Connect. Collaborate. Create.</span>
                        <span className="text-[#9EFFFF]">{"</h1>"}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">7</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9EFFFF]">{"<p>"}</span>
                        <span className="text-white">Join our developer community today!</span>
                        <span className="text-[#9EFFFF]">{"</p>"}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">8</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9EFFFF]">{"</div>"}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">9</div>
                      <div>
                        &nbsp;&nbsp;<span className="text-white">);</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">10</div>
                      <div>
                        <span className="text-white">{"}"};</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">11</div>
                      <div></div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 text-right text-gray-500">12</div>
                      <div>
                        <span className="text-[#FF9D00]">export</span> <span className="text-[#FF9D00]">default</span>{" "}
                        <span className="text-[#9EFFFF]">ConvoNetX</span>;
                      </div>
                    </div>
                  </div>

                  {/* Chat overlay */}
                  <div className="absolute bottom-4 right-4 w-64 bg-[#2D2B55] rounded-lg shadow-lg border border-white/10 overflow-hidden">
                    <div className="p-3 border-b border-white/10 flex items-center justify-between">
                      <div className="text-xs font-medium">Live Chat</div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-3 max-h-40 overflow-y-auto">
                      <div className="mb-2">
                        <div className="text-xs text-violet-300 mb-1">Sarah_Dev</div>
                        <div className="bg-white/5 rounded-lg p-2 text-xs">
                          Has anyone used the new React 18 features?
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-xs text-indigo-300 mb-1">CodeMaster</div>
                        <div className="bg-white/5 rounded-lg p-2 text-xs">
                          Yes! The new concurrent rendering is amazing!
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-xs text-blue-300 mb-1">You</div>
                        <div className="bg-violet-500/20 rounded-lg p-2 text-xs">
                          I'm working on implementing it now...
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-white/10">
                      <div className="bg-white/5 rounded-lg flex items-center">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="bg-transparent border-0 text-xs p-2 w-full focus:outline-none"
                        />
                        <button className="p-2 text-violet-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg animate-float">
                  <Code className="text-white" size={20} />
                </div>
                <div className="absolute top-1/4 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center shadow-lg animate-float animation-delay-1000">
                  <MessageSquare className="text-white" size={20} />
                </div>
                <div className="absolute bottom-1/4 -left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg animate-float animation-delay-2000">
                  <Users className="text-white" size={20} />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg animate-float animation-delay-3000">
                  <Zap className="text-white" size={20} />
                </div>
              </motion.div>
            </div>

            {/* Trusted by */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 sm:mt-24 text-center"
            >
              <p className="text-sm text-gray-400 mb-6 sm:mb-8">TRUSTED BY DEVELOPERS FROM</p>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-70">
                <div className="h-8 flex items-center">
                  <svg viewBox="0 0 124 24" fill="currentColor" className="h-5 sm:h-6 text-gray-400">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm-1.9 5v2H7.5v2h2.6v6H7.5v2h7v-2h-2.6V9h2.6V7h-4.4zm7.9 0v12h2V7h-2z" />
                  </svg>
                </div>
                <div className="h-8 flex items-center">
                  <svg viewBox="0 0 124 24" fill="currentColor" className="h-5 sm:h-6 text-gray-400">
                    <path d="M20.5 2l-5.3 19H17l5.3-19h-1.8zm-9.6 0L5.6 21H3.9L9.1 2h1.8zM22.2 2l-5.3 19h-1.7l5.3-19h1.7zM12.9 2L7.7 21H6l5.3-19h1.6zm9.3 0L16.9 21h-1.8l5.3-19h1.8zM4.7 2l5.3 19H8.2L2.9 2h1.8zm9.6 0l-5.3 19H7.3l5.3-19h1.7zm9.3 0l-5.3 19h-1.7l5.3-19h1.7zM2 2l5.3 19H5.6L.3 2H2z" />
                  </svg>
                </div>
                <div className="h-8 flex items-center">
                  <svg viewBox="0 0 124 24" fill="currentColor" className="h-4 sm:h-5 text-gray-400">
                    <path d="M24 5.6c-.9.4-1.8.7-2.8.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.1-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                  </svg>
                </div>
                <div className="h-8 flex items-center">
                  <svg viewBox="0 0 124 24" fill="currentColor" className="h-5 sm:h-6 text-gray-400">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm3.6 14.4c0 1.3-1.1 2.4-2.4 2.4H8.4c-1.3 0-2.4-1.1-2.4-2.4V9.6c0-1.3 1.1-2.4 2.4-2.4h4.8c1.3 0 2.4 1.1 2.4 2.4v4.8z" />
                  </svg>
                </div>
                <div className="h-8 flex items-center">
                  <svg viewBox="0 0 124 24" fill="currentColor" className="h-5 sm:h-6 text-gray-400">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.2 14.8L11.5 19V5l5.7 4.2-5.7 4.2 5.7 1.4z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div
                ref={userCountRef}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{userCount.toLocaleString()}+</div>
                <div className="text-gray-400">Active Developers</div>
              </div>
              <div
                ref={messageCountRef}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{messageCount.toLocaleString()}+</div>
                <div className="text-gray-400">Messages Exchanged</div>
              </div>
              <div
                ref={forumCountRef}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-center sm:col-span-2 md:col-span-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{forumCount}+</div>
                <div className="text-gray-400">Specialized Forums</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <GradientText>Powerful Features</GradientText> for Developers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Everything you need to connect, share knowledge, and build together
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <FeatureCard
                icon={Code}
                title="Language-Specific Forums"
                description="Engage in deep technical discussions across specialized forums for JavaScript, Python, Rust, Go, and many more languages."
                index={0}
              />
              <FeatureCard
                icon={MessageSquare}
                title="Real-Time Collaboration"
                description="Share and edit code in real-time with integrated code editors, syntax highlighting, and version control."
                index={1}
              />
              <FeatureCard
                icon={Users}
                title="Community Networking"
                description="Connect with like-minded developers, form teams, and build your professional network within your technology stack."
                index={2}
              />
              <FeatureCard
                icon={Zap}
                title="AI-Powered Assistance"
                description="Get intelligent code suggestions, debugging help, and answers to technical questions with our integrated AI assistant."
                index={3}
              />
              <FeatureCard
                icon={Globe}
                title="Global Developer Events"
                description="Participate in hackathons, workshops, and webinars organized by community members from around the world."
                index={4}
              />
              <FeatureCard
                icon={Shield}
                title="Secure Code Sharing"
                description="Share code snippets and projects with confidence using our secure, permission-based sharing system."
                index={5}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
          <motion.div
            style={{ y: y2 }}
            className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] opacity-30"
          ></motion.div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                What <GradientText>Developers</GradientText> Are Saying
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Join thousands of satisfied developers in our community
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <TestimonialCard
                name="Nikant Yadav"
                role="Senior Developer"
                company="TechCorp"
                quote="ConvoNetX has completely transformed how our team collaborates. The language-specific forums have been invaluable for solving complex problems quickly."
                avatar="NY"
                index={0}
              />
              <TestimonialCard
                name="Krishna Jagtap"
                role="Full-Stack Developer"
                company="StartupX"
                quote="I've learned more in 3 months on ConvoNetX than I did in a year of self-study. The community is incredibly supportive and knowledgeable."
                avatar="KJ"
                index={1}
              />
              <TestimonialCard
                name="Sarthak Chourey"
                role="DevOps Engineer"
                company="CloudSystems"
                quote="The real-time collaboration features have made remote work so much easier. It's like having your team right there with you, even when they're across the world."
                avatar="SC"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Simple, <GradientText>Transparent</GradientText> Pricing
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Choose the plan that's right for you or your team
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <PricingCard
                title="Starter"
                price="$9"
                features={[
                  "Access to all public forums",
                  "Basic code collaboration",
                  "Community support",
                  "Limited message history",
                  "Standard response times",
                ]}
                isPopular={false}
                index={0}
              />
              <PricingCard
                title="Pro"
                price="$29"
                features={[
                  "Everything in Starter",
                  "Private forums & groups",
                  "Advanced code collaboration",
                  "Unlimited message history",
                  "Priority support",
                  "Ad-free experience",
                ]}
                isPopular={true}
                index={1}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                features={[
                  "Everything in Pro",
                  "Custom integrations",
                  "Dedicated support manager",
                  "Team management tools",
                  "Advanced analytics",
                  "Custom branding options",
                  "SLA guarantees",
                ]}
                isPopular={false}
                index={2}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-violet-900/40 to-indigo-900/40 border border-violet-500/30 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-[80px]"></div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative">
              Ready to <GradientText>Join the Network</GradientText>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto relative">
              Connect with thousands of developers, share your knowledge, and take your coding skills to the next level.
            </p>
            <Link
               href="/forumsz"
              className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all flex items-center justify-center gap-2 group mx-auto w-fit"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  ConvoNetX
                </h3>
                <p className="text-gray-400 mb-6">
                  Where code meets community. Connect, collaborate, and create with developers from around the world.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-6">PRODUCT</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <Link href="/apps/forums" className="text-gray-400 hover:text-white transition-colors">
                      Forums
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Community
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-6">RESOURCES</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      API Reference
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-6">COMPANY</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Legal
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 ConvoNetX. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
}

