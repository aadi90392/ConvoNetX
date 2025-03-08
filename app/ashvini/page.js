"use client"

import { useState, useEffect } from "react"
import {
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  BarChart2,
  TrendingUp,
  Users,
  Target,
  Award,
  Megaphone,
  PieChart,
  LineChart,
  Share2,
  Globe,
  Instagram,
} from "lucide-react"

export default function AshviniPortfolio() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 dark:from-pink-900/20 dark:to-purple-900/20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600/10 dark:bg-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Marketing Manager{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                ConvoNetX
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting compelling brand stories and driving growth through strategic marketing
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection("campaigns")}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center justify-center gap-2 group"
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
            <ChevronDown className="h-5 w-5 text-pink-600 dark:text-pink-400" />
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
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 blur-md transform -rotate-6"></div>
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img
                      src="/ashvini.jpg"
                      alt="Ashvini's Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                    About Me
                  </span>
                  <div className="h-px flex-grow bg-gradient-to-r from-pink-600 to-transparent ml-4"></div>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Hi, I'm Ashvini, a passionate marketing professional with a knack for creating impactful brand stories
                  and driving business growth. With a strategic approach to marketing, I specialize in developing
                  comprehensive campaigns that connect with target audiences and deliver measurable results.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  As the Marketing Manager at ConvoNetX, I lead our marketing initiatives to build brand awareness,
                  generate leads, and establish our company as an industry leader. My goal is to leverage innovative
                  marketing strategies to help businesses thrive in competitive markets.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      MBA in Marketing
                      <br />
                      University of Marketing Excellence
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Experience</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      6+ years in Digital Marketing
                      <br />
                      3+ years in Brand Strategy
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Marketing Expertise
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Digital Marketing",
                  icon: <Globe className="h-8 w-8 text-pink-500" />,
                  skills: ["SEO/SEM", "Content Marketing", "Email Campaigns", "Marketing Automation", "Analytics"],
                },
                {
                  name: "Social Media",
                  icon: <Share2 className="h-8 w-8 text-purple-500" />,
                  skills: [
                    "Strategy Development",
                    "Community Management",
                    "Paid Advertising",
                    "Influencer Marketing",
                    "Content Creation",
                  ],
                },
                {
                  name: "Brand Strategy",
                  icon: <Target className="h-8 w-8 text-pink-500" />,
                  skills: [
                    "Brand Positioning",
                    "Identity Development",
                    "Messaging",
                    "Brand Guidelines",
                    "Market Research",
                  ],
                },
                {
                  name: "Analytics & Reporting",
                  icon: <BarChart2 className="h-8 w-8 text-purple-500" />,
                  skills: [
                    "Performance Tracking",
                    "Data Analysis",
                    "ROI Measurement",
                    "Conversion Optimization",
                    "Reporting Dashboards",
                  ],
                },
                {
                  name: "Content Creation",
                  icon: <Megaphone className="h-8 w-8 text-pink-500" />,
                  skills: ["Copywriting", "Visual Content", "Video Production", "Storytelling", "Content Strategy"],
                },
                {
                  name: "Leadership",
                  icon: <Users className="h-8 w-8 text-purple-500" />,
                  skills: [
                    "Team Management",
                    "Project Planning",
                    "Client Relations",
                    "Budget Management",
                    "Cross-functional Collaboration",
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
                        <div className="w-2 h-2 rounded-full bg-pink-600 mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-3">
              {[
                { name: "SEO", color: "bg-blue-600" },
                { name: "Content Marketing", color: "bg-green-600" },
                { name: "Social Media", color: "bg-purple-600" },
                { name: "Email Marketing", color: "bg-yellow-500" },
                { name: "Brand Strategy", color: "bg-red-500" },
                { name: "Google Analytics", color: "bg-orange-500" },
                { name: "PPC", color: "bg-indigo-600" },
                { name: "Marketing Automation", color: "bg-teal-500" },
                { name: "CRM", color: "bg-gray-700" },
                { name: "Copywriting", color: "bg-pink-600" },
                { name: "Adobe Creative Suite", color: "bg-red-600" },
                { name: "Video Production", color: "bg-blue-500" },
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

      {/* Marketing Campaigns Section */}
      <section id="campaigns" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Featured Campaigns
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "/product.jpg",
                  title: "Product Launch Campaign",
                  desc: "Developed and executed a comprehensive marketing strategy for our flagship product launch, resulting in 200% increase in website traffic and 150+ qualified leads.",
                  tags: ["Digital Marketing", "Social Media", "Content Strategy"],
                },
                {
                  img: "/brand.png",
                  title: "Brand Awareness Initiative",
                  desc: "Led a rebranding campaign that increased brand recognition by 45% and social media engagement by 78% within the first quarter.",
                  tags: ["Brand Strategy", "Market Research", "Creative Direction"],
                },
                {
                  img: "/lead.jpg",
                  title: "Lead Generation Program",
                  desc: "Designed a multi-channel lead generation program that reduced cost-per-acquisition by 35% while improving lead quality metrics.",
                  tags: ["Email Marketing", "PPC", "Marketing Automation"],
                },
              ].map((campaign, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={campaign.img || "/placeholder.svg"}
                      alt={campaign.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {campaign.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{campaign.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{campaign.desc}</p>
                  </div>

                  <div className="px-6 pb-6 mt-auto">
                    <div className="flex justify-between">
                      <a
                        href="#"
                        className="text-pink-600 dark:text-pink-400 font-medium flex items-center hover:underline"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
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
                className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                View All Campaigns
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Results Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Marketing Impact
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8 text-pink-500" />,
                  value: "250%",
                  label: "Increase in Organic Traffic",
                },
                {
                  icon: <Users className="h-8 w-8 text-purple-500" />,
                  value: "10K+",
                  label: "Social Media Followers",
                },
                {
                  icon: <LineChart className="h-8 w-8 text-pink-500" />,
                  value: "68%",
                  label: "Conversion Rate Improvement",
                },
                {
                  icon: <Award className="h-8 w-8 text-purple-500" />,
                  value: "12",
                  label: "Marketing Awards",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-pink-500" /> Channel Performance
                  </h3>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="flex justify-center space-x-4 mb-4">
                        {[
                          { color: "bg-pink-500", label: "Social Media" },
                          { color: "bg-purple-500", label: "Email" },
                          { color: "bg-blue-500", label: "SEO" },
                          { color: "bg-green-500", label: "PPC" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center">
                            <div className={`w-3 h-3 ${item.color} rounded-full mr-1`}></div>
                            <span className="text-xs text-gray-600 dark:text-gray-300">{item.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="relative w-48 h-48 mx-auto">
                        <div className="absolute inset-0 rounded-full border-8 border-pink-500 opacity-25"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-purple-500 border-r-purple-500 rotate-45"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-b-blue-500 border-l-blue-500 -rotate-45"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 rotate-[135deg]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-purple-500" /> Growth Metrics
                  </h3>
                  <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-full px-4">
                      <div className="relative h-40">
                        {/* Simplified chart representation */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600"></div>
                        <div className="absolute left-0 bottom-0 top-0 w-px bg-gray-300 dark:bg-gray-600"></div>

                        {/* Line chart */}
                        <div className="absolute bottom-0 left-0 right-0 h-full">
                          <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path
                              d="M0,40 L10,35 L20,38 L30,30 L40,32 L50,25 L60,20 L70,15 L80,10 L90,5 L100,2"
                              fill="none"
                              stroke="#d946ef"
                              strokeWidth="2"
                            />
                            <path
                              d="M0,40 L10,38 L20,36 L30,33 L40,30 L50,28 L60,25 L70,22 L80,18 L90,15 L100,10"
                              fill="none"
                              stroke="#8b5cf6"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-pink-500 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-300">Website Traffic</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-300">Conversions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Client Testimonials
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Ashvini's strategic approach to our marketing campaigns delivered exceptional results. Her ability to understand our target audience and craft compelling messaging was impressive.",
                  name: "Rajiv Mehta",
                  role: "CEO",
                  company: "TechInnovate",
                },
                {
                  quote:
                    "Working with Ashvini transformed our brand presence. Her creative vision and data-driven approach helped us achieve our marketing goals well beyond expectations.",
                  name: "Priya Sharma",
                  role: "Product Director",
                  company: "GrowthLabs",
                },
                {
                  quote:
                    "Ashvini has a remarkable talent for identifying market opportunities and developing strategies that drive real business growth. Her marketing expertise is truly exceptional.",
                  name: "Vikram Singh",
                  role: "Founder",
                  company: "NextGen Solutions",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-t-xl"></div>
                  <div className="mb-6 text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
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
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-600/10 dark:bg-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Get In Touch
              </span>
            </h2>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <p className="mb-8">
                    I'm always open to discussing new marketing opportunities, creative ideas or partnerships to help
                    grow your business.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mt-1 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:ashvini@example.com"
                          className="text-purple-100 hover:text-white transition-colors"
                        >
                          ashvini@convonetx.com
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
                        <a href="tel:+1234567890" className="text-purple-100 hover:text-white transition-colors">
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
                        <p className="text-purple-100">Indore, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <p className="font-medium mb-4">Connect with me</p>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                        <Instagram className="h-5 w-5" />
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 dark:focus:ring-pink-500"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 dark:focus:ring-pink-500"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-600 dark:focus:ring-pink-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
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
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                  Ashvini
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ConvoNetX. All rights reserved.
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-pink-600 text-white shadow-lg transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
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

