"use client"

import { useState, useEffect } from "react"
import {
  Code,
  Database,
  Server,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers,
  Braces,
} from "lucide-react"

export default function AkrutiPortfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-cyan-600/10 dark:from-teal-900/20 dark:to-cyan-900/20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-600/10 dark:bg-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lead Developer{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                ConvoNetX
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building efficient and scalable solutions that transform ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:shadow-lg transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg animate-bounce"
          >
            <ChevronDown className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 blur-md transform -rotate-6"></div>
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img src="aae.jpg" alt="Akruti's Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                    About Me
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-r from-teal-600 to-transparent ml-4"></div>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Hi, I'm Akruti, a passionate Software Engineer dedicated to creating high-quality and efficient
                  software solutions. With a strong foundation in modern technologies, I specialize in building scalable
                  and user-centric applications.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  As the Lead Developer at ConvoNetX, I oversee technical implementation and ensure best practices are
                  followed throughout the development lifecycle. My goal is to leverage technology to solve complex
                  problems and deliver exceptional user experiences.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      BTech in Computer Science
                      <br />
                      IPS ACADEMY
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      5+ years in Software Development
                      <br />
                      3+ years in Technical Leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                Technical Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Frontend Development",
                  icon: <Braces className="h-8 w-8 text-teal-500" />,
                  skills: ["JavaScript", "React", "Next.js", "CSS/SASS", "Tailwind CSS"],
                },
                {
                  name: "Backend Development",
                  icon: <Server className="h-8 w-8 text-cyan-500" />,
                  skills: ["Python", "Java", "Node.js", "Express.js", "RESTful APIs"],
                },
                {
                  name: "Database Management",
                  icon: <Database className="h-8 w-8 text-teal-500" />,
                  skills: ["SQL", "MongoDB", "PostgreSQL", "Database Design", "Query Optimization"],
                },
                {
                  name: "Software Architecture",
                  icon: <Layers className="h-8 w-8 text-cyan-500" />,
                  skills: ["System Design", "Microservices", "API Design", "Performance Optimization", "Scalability"],
                },
                {
                  name: "DevOps & Cloud",
                  icon: <Cpu className="h-8 w-8 text-teal-500" />,
                  skills: ["Git/GitHub", "Docker", "CI/CD", "AWS", "Cloud Architecture"],
                },
                {
                  name: "Leadership",
                  icon: <Code className="h-8 w-8 text-cyan-500" />,
                  skills: [
                    "Technical Mentoring",
                    "Code Reviews",
                    "Agile Methodologies",
                    "Project Planning",
                    "Team Collaboration",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-teal-600 mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[
                { name: "JavaScript", color: "bg-yellow-500" },
                { name: "Python", color: "bg-blue-500" },
                { name: "Java", color: "bg-orange-500" },
                { name: "SQL", color: "bg-gray-700" },
                { name: "React", color: "bg-blue-400" },
                { name: "Node.js", color: "bg-green-600" },
                { name: "Next.js", color: "bg-gray-800 dark:bg-gray-700" },
                { name: "MongoDB", color: "bg-green-700" },
                { name: "PostgreSQL", color: "bg-blue-700" },
                { name: "TypeScript", color: "bg-blue-600" },
                { name: "Tailwind CSS", color: "bg-teal-500" },
                { name: "Docker", color: "bg-blue-600" },
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transform hover:scale-105 transition-transform duration-200`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                Featured Projects
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "webapp.jpg",
                  title: "Web Application Development",
                  desc: "Developed a scalable web application with a focus on performance and user experience.",
                  tech: ["React", "Node.js", "MongoDB", "AWS"],
                },
                {
                  img: "pos.png",
                  title: "API Development",
                  desc: "Designed and implemented robust RESTful APIs for seamless data integration.",
                  tech: ["Java", "Spring Boot", "PostgreSQL", "Swagger"],
                },
                {
                  img: "projt-.png",
                  title: "Mobile Application Development",
                  desc: "Built a cross-platform mobile application with React Native, ensuring a consistent user experience.",
                  tech: ["React Native", "Firebase", "Redux", "GraphQL"],
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.img || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                  </div>

                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex justify-between">
                      <a
                        href="#"
                        className="text-teal-600 dark:text-teal-400 font-medium flex items-center hover:underline"
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium hover:underline"
              >
                View All Projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                Achievements & Contributions
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Leadership",
                  value: "15+",
                  desc: "Projects Successfully Delivered",
                },
                {
                  title: "Code Quality",
                  value: "98%",
                  desc: "Test Coverage Maintained",
                },
                {
                  title: "Team Growth",
                  value: "8",
                  desc: "Junior Developers Mentored",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700 text-center"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{stat.title}</h3>
                  <p className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{stat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Akruti's technical expertise and leadership were instrumental in the successful delivery of our enterprise platform. Her attention to detail and commitment to quality are exceptional.",
                  name: "Rajesh Kumar",
                  role: "CTO",
                  company: "TechSolutions Inc.",
                },
                {
                  quote:
                    "Working with Akruti has been a game-changer for our development team. Her architectural insights and problem-solving abilities have significantly improved our product quality.",
                  name: "Priya Sharma",
                  role: "Product Manager",
                  company: "InnovateX",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-t-xl"></div>
                  <div className="mb-6 text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
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
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-600/10 dark:bg-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/10 dark:bg-cyan-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                Get In Touch
              </span>
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                    vision.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:akruti@convonetx.com"
                          className="text-cyan-100 hover:text-white transition-colors"
                        >
                          akruti@convonetx.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mt-1 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1234567890" className="text-cyan-100 hover:text-white transition-colors">
                          +91 98765-43210
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mt-1 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-cyan-100">Indore, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="font-medium mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <form>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all"
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
      <footer className="py-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                  Akruti
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ConvoNetX. All rights reserved.
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-teal-600 text-white shadow-lg transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

