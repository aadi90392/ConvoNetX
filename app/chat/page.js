"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Twitter, Github } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-gradient-to-r from-indigo-800 to-purple-600 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        </div>
        <motion.div
          className="relative max-w-3xl px-6 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl lg:text-7xl">
            Empowering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
              Connections
            </span>
          </h1>
          <p className="mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We build innovative platforms that foster meaningful connections and unlock the power of data. Join us in
            creating a more connected future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@convonetx.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-indigo-800 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#our-story"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Journey */}
      <section id="our-story" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
              Our Journey
            </div>
            <h2 className="text-3xl font-bold text-indigo-800 md:text-5xl">Our Story</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-8 text-lg text-slate-700 leading-relaxed">
                Founded in 2025, <span className="font-semibold text-indigo-700">ConvoNetX</span> began with a simple
                yet powerful vision: to bridge the gaps in community communication and data understanding that were
                holding organizations back.
              </p>
              <p className="mb-8 text-lg text-slate-700 leading-relaxed">
                Our founders recognized that while data was abundant, the ability to transform it into meaningful
                insights and connections was scarce. This realization sparked the creation of our platform.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Today, we're a thriving ecosystem where innovators, data scientists, and community builders come
                together to create impactful solutions that drive real change.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-full max-w-md border-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-xl">
                <div className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-indigo-100 p-4">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                          stroke="#4F46E5"
                          strokeWidth="1.5"
                        />
                        <path d="M12 8V16M8 12H16" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-800 mb-4 text-center">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed text-center">
                    To empower organizations with the tools and insights they need to build stronger communities, make
                    data-driven decisions, and create meaningful connections that drive positive change.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-50 py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
              What Drives Us
            </div>
            <h2 className="text-3xl font-bold text-indigo-800 md:text-5xl">Our Core Values</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-700">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.5 14.5L11.5 16.5L14.5 12.5"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-indigo-700">Innovation</h3>
              <p className="text-slate-600 leading-relaxed">
                We embrace creativity and push boundaries to deliver cutting-edge solutions that transform how
                communities connect and utilize data.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-700">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 8V12L14 14"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-indigo-700">Integrity</h3>
              <p className="text-slate-600 leading-relaxed">
                We uphold the highest ethical standards in all our endeavors, ensuring transparency, honesty, and
                accountability in everything we do.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-700">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 8.5C17 10.9853 14.9853 13 12.5 13C10.0147 13 8 10.9853 8 8.5C8 6.01472 10.0147 4 12.5 4C14.9853 4 17 6.01472 17 8.5Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 19.5C5 15.9101 8.13401 13 12 13C15.866 13 19 15.9101 19 19.5V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V19.5Z"
                    stroke="#4F46E5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-indigo-700">Community</h3>
              <p className="text-slate-600 leading-relaxed">
                We believe in building and nurturing strong, inclusive communities where diverse perspectives are valued
                and everyone has a voice.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
              Our People
            </div>
            <h2 className="text-3xl font-bold text-indigo-800 md:text-5xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Passionate experts dedicated to transforming how communities connect and leverage data.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-100">
                <Image
                  src="/Aditya.jpg"
                  alt="Aditya Upadhyay"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-indigo-900">Aditya Upadhyay</h3>
              <p className="mb-4 text-indigo-600 font-medium">Founder & CEO</p>
              <p className="mb-6 text-center text-slate-600">
                Visionary leader with 15+ years of experience in data science and community building.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="mailto:aditya@convonetx.com"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <a
                href="/aditya"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
              >
                View Profile
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-100">
                <Image
                  src="/New.jpg"
                  alt="Akruti Yadav"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-indigo-900">Akruti Yadav</h3>
              <p className="mb-4 text-indigo-600 font-medium">Lead Developer</p>
              <p className="mb-6 text-center text-slate-600">
                Full-stack developer with expertise in building scalable platforms and data visualization.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="mailto:akruti@convonetx.com"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <a
                href="/akruti"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
              >
                View Profile
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col items-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-100">
                <Image
                  src="/ashvini.jpg"
                  alt="Ashvini Barve"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-indigo-900">Ashvini Barve</h3>
              <p className="mb-4 text-indigo-600 font-medium">Marketing Manager</p>
              <p className="mb-6 text-center text-slate-600">
                Strategic marketer with a passion for storytelling and building community engagement.
              </p>
              <div className="flex space-x-4 mb-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="mailto:ashvini@convonetx.com"
                  className="text-slate-500 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
              <a
                href="/ashvini"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
              >
                View Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-indigo-800 py-16 px-6 lg:px-8 text-white">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <p className="text-indigo-200">Years of Experience</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <p className="text-indigo-200">Clients Worldwide</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <p className="text-indigo-200">Team Members</p>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-indigo-200">Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-100 py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-indigo-900 md:text-4xl">Ready to Connect?</h2>
            <p className="mb-10 text-lg text-slate-700 max-w-2xl mx-auto">
              Join our community and discover the power of connected insights. Let's build something amazing together.
            </p>
            <a
              href="mailto:info@convonetx.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Contact Us <Mail className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                ConvoNetX
              </Link>
              <p className="mb-6 max-w-md">
                Building platforms that foster meaningful connections and unlock the power of data. Join us in creating
                a more connected future.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="mailto:info@convonetx.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">123 Innovation Way</p>
                <p className="mb-2">Rajendra Nagar, Indore 452012</p>
                <p className="mb-2">India</p>
                <p className="mb-4">
                  <a href="mailto:info@convonetx.com" className="hover:text-white transition-colors">
                    info@convonetx.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +91 70491-08275
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ConvoNetX. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

