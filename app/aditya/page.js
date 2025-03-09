"use client"

import { useState, useEffect, useRef } from "react"
import {
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  Phone,
  MapPin,
  ArrowUp,
  User,
  Code,
  Briefcase,
  Award,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
} from "lucide-react"

export default function AdityaPortfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)

  // Initialize dark mode based on user preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Update active section based on scroll position
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "about", ref: aboutRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "testimonials", ref: testimonialsRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of [...sections].reverse()) {
        if (section.ref.current && window.scrollY >= section.ref.current.offsetTop - 200) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      hero: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    }

    const ref = sectionRefs[sectionId]
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  const navItems = [
    { id: "about", label: "About", icon: <User className="h-4 w-4" /> },
    { id: "skills", label: "Skills", icon: <Code className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="h-4 w-4" /> },
    { id: "testimonials", label: "Testimonials", icon: <Award className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <MessageSquare className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 selection:bg-indigo-500 selection:text-white">
      {/* Dark Mode Toggle - Fixed Position */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-2 px-4 md:hidden">
        <div className="flex justify-around items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className={`flex flex-col items-center p-2 ${
              activeSection === "hero" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center p-2 ${
                activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Navigation Pills - Desktop Only */}
      <div className="fixed top-1/2 -translate-y-1/2 right-6 z-50 hidden md:flex flex-col gap-3">
        <button
          onClick={() => scrollToSection("hero")}
          className={`group relative flex items-center justify-center w-3 h-3 ${
            activeSection === "hero"
              ? "bg-indigo-600 dark:bg-indigo-500"
              : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
          } rounded-full transition-all`}
          aria-label="Navigate to Home section"
        >
          <span className="absolute right-full mr-4 py-1 px-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Home
          </span>
        </button>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative flex items-center justify-center w-3 h-3 ${
              activeSection === item.id
                ? "bg-indigo-600 dark:bg-indigo-500"
                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            } rounded-full transition-all`}
            aria-label={`Navigate to ${item.label} section`}
          >
            <span className="absolute right-full mr-4 py-1 px-3 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-100 to-transparent dark:from-indigo-950/20 dark:to-transparent -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-full blur-xl animate-float -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl animate-float-delay -z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-xl animate-float-slow -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                Founder & CEO at ConvoNetX
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Building{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  digital experiences
                </span>{" "}
                that matter
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                I transform ideas into innovative web solutions that help businesses thrive in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:shadow-lg transition-all"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start mt-8 space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Twitter profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-white dark:bg-gray-900 z-10"></div>
                <div className="absolute inset-6 rounded-full overflow-hidden z-20 border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img src="/adityaa.jpg" alt="Aditya's Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -right-4 -bottom-4 z-30 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 sm:p-4 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-0 -left-4 sm:-left-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 sm:p-3 border border-gray-100 dark:border-gray-700 animate-float hidden xs:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                  />
                </svg>
              </div>
              <div className="absolute top-1/4 -right-4 sm:-right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 sm:p-3 border border-gray-100 dark:border-gray-700 animate-float-delay hidden xs:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-1/3 left-4 sm:left-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2 sm:p-3 border border-gray-100 dark:border-gray-700 animate-float-slow hidden xs:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-black dark:text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce hover:shadow-xl transition-shadow"
              aria-label="Scroll to About section"
            >
              <ChevronDown className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                About Me
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Passionate about creating{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  impactful digital experiences
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 blur-xl"></div>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-100 dark:border-indigo-900 shadow-2xl">
                    <img
                      src="/kjkj.jpg"
                      alt="Aditya working"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                      <div className="p-4 sm:p-6 w-full">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white text-base sm:text-lg font-bold">Aditya</p>
                            <p className="text-indigo-200 text-xs sm:text-sm">Founder & CEO, ConvoNetX</p>
                          </div>
                          <div className="flex space-x-2">
                            <a
                              href="#"
                              className="bg-white/20 p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </a>
                            <a
                              href="#"
                              className="bg-white/20 p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-0">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Hi, I'm Aditya, a passionate web developer and entrepreneur dedicated to creating impactful digital
                  experiences. With a strong foundation in modern web technologies, I specialize in building scalable
                  and user-centric web applications.
                </p>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
                  As the Founder and CEO of ConvoNetX, I lead a team of talented developers to create innovative
                  solutions that help businesses thrive in the digital landscape. My goal is to leverage technology to
                  solve real-world problems and drive innovation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      BTech in Computer Science
                      <br />
                      IPS ACADEMY
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                      2+ years in Web Development
                      <br />
                      5+ years in Team Leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                My Expertise
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Skills &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Technologies
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I've worked with a wide range of technologies to create exceptional digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "Frontend Development",
                  icon: "💻",
                  skills: ["React.js", "Next.js", "JavaScript (ES6+)", "CSS3/SASS", "Tailwind CSS"],
                },
                {
                  name: "Backend Development",
                  icon: "⚙️",
                  skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"],
                },
                { name: "DevOps & Tools", icon: "🛠️", skills: ["Git/GitHub", "Docker", "CI/CD", "AWS", "Vercel"] },
                {
                  name: "Design",
                  icon: "🎨",
                  skills: ["UI/UX Design", "Figma", "Adobe XD", "Responsive Design", "Accessibility"],
                },
                {
                  name: "Project Management",
                  icon: "📊",
                  skills: ["Agile/Scrum", "Jira", "Team Leadership", "Product Strategy", "Client Communication"],
                },
                {
                  name: "Soft Skills",
                  icon: "🤝",
                  skills: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
                >
                  <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 p-3 sm:p-4 inline-block bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">
                    {category.name}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 mr-3"></div>
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { name: "CSS3", color: "bg-red-500" },
                { name: "JavaScript (ES6+)", color: "bg-amber-500" },
                { name: "React.js", color: "bg-green-600" },
                { name: "Node.js", color: "bg-purple-600" },
                { name: "Express.js", color: "bg-blue-500" },
                { name: "Next.js", color: "bg-gray-800 dark:bg-gray-700" },
                { name: "MongoDB", color: "bg-green-700" },
                { name: "PostgreSQL", color: "bg-blue-700" },
                { name: "TypeScript", color: "bg-blue-600" },
                { name: "GraphQL", color: "bg-pink-600" },
                { name: "Tailwind CSS", color: "bg-teal-500" },
                { name: "Docker", color: "bg-blue-600" },
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all cursor-default transform hover:-translate-y-1`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                My Work
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Featured{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Projects
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here are some of my recent projects that showcase my skills and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  img: "/ll.jpeg",
                  title: "E-commerce Platform",
                  desc: "A fully functional e-commerce platform with user authentication, product management, and secure payment integration.",
                  tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
                },
                {
                  img: "/ss.jpg",
                  title: "Social Media App",
                  desc: "A modern social media application with real-time updates, user interaction features, and content sharing capabilities.",
                  tech: ["Next.js", "Socket.io", "PostgreSQL", "AWS S3"],
                },
                {
                  img: "/webapp.jpg",
                  title: "Global Travel Platform",
                  desc: "An interactive travel platform allowing users to discover destinations, plan trips, and share experiences with a global community.",
                  tech: ["React.js", "Express.js", "GraphQL", "MongoDB"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-48 sm:h-60">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 sm:p-6 w-full">
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-grow">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">{project.desc}</p>
                  </div>

                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 mt-auto">
                    <div className="flex justify-between items-center">
                      <a
                        href="#"
                        className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline group/link text-sm sm:text-base"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href="#"
                        className="p-1.5 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="Visit project website"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <a
                href="#"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                Testimonials
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                What{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  People Say
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Feedback from clients and collaborators who have worked with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  quote:
                    "Aditya's expertise in web development is exceptional. He delivered our project on time and exceeded our expectations.",
                  name: "Abhishek Sharma",
                  role: "Marketing Director",
                  company: "TechCorp",
                },
                {
                  quote:
                    "Working with Aditya was a game-changer for our startup. His technical knowledge and business insights were invaluable.",
                  name: "Tanya Kapoor",
                  role: "Co-founder",
                  company: "InnovateLabs",
                },
                {
                  quote:
                    "Aditya has a rare combination of technical skills and creative vision. He transformed our concept into a beautiful, functional product.",
                  name: "Prachi Chauhan",
                  role: "Product Manager",
                  company: "DesignWorks",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 relative hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl"></div>
                  <svg
                    className="h-8 w-8 sm:h-12 sm:w-12 text-indigo-200 dark:text-indigo-800 mb-4 sm:mb-6"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mb-6 sm:mb-8 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium">
                Contact Me
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Let's{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Connect
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
                  <p className="mb-6 sm:mb-8 text-indigo-100 text-sm sm:text-base">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision.
                  </p>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4" />
                      <div>
                        <p className="font-medium text-base sm:text-lg">Email</p>
                        <a
                          href="mailto:adi375461@gmail.com"
                          className="text-indigo-100 hover:text-white transition-colors text-sm sm:text-base"
                        >
                          adi375461@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4" />
                      <div>
                        <p className="font-medium text-base sm:text-lg">Phone</p>
                        <a
                          href="tel:+917049108275"
                          className="text-indigo-100 hover:text-white transition-colors text-sm sm:text-base"
                        >
                          +91 70491-08275
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 sm:mr-4" />
                      <div>
                        <p className="font-medium text-base sm:text-lg">Location</p>
                        <p className="text-indigo-100 text-sm sm:text-base">Indore, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-12">
                    <p className="font-medium text-base sm:text-lg mb-3 sm:mb-4">Connect with me</p>
                    <div className="flex space-x-3 sm:space-x-4">
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="GitHub profile"
                      >
                        <Github className="h-4 w-4 sm:h-6 sm:w-6" />
                      </a>
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin className="h-4 w-4 sm:h-6 sm:w-6" />
                      </a>
                      <a
                        href="#"
                        className="bg-white/20 hover:bg-white/30 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="Twitter profile"
                      >
                        <Twitter className="h-4 w-4 sm:h-6 sm:w-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:p-12">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4 sm:mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                  A
                </div>
                <span className="font-bold text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Aditya
                </span>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-gray-400 mb-6 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} ConvoNetX. All rights reserved.
              <div className="mt-2">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors mr-4">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-2 sm:p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-900 hover:text-indigo-400 transition-colors"
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-900 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="p-2 sm:p-3 rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-900 hover:text-indigo-400 transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

