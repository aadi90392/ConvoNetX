// "use client"
// import { useState, useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { motion, AnimatePresence } from "framer-motion"
 // import { Tilt } from "react-tilt"
// import { Search, ArrowUpRight, TrendingUp, MessageSquare, Users } from "lucide-react"

// const topics = [
//   {
//     text: "python",
//     img: "/python.jpg",
//     desc: "Lets Discuss Anything Related To Python. This is a longer description to demonstrate the line-clamp effect.",
//     slug: "python",
//     members: 12453,
//     posts: 3241,
//     trending: true,
//   },
//   {
//     text: "javascript",
//     img: "/javascript.png",
//     desc: "All things JavaScript: from frameworks to fundamentals. JavaScript is a powerful language.",
//     slug: "javascript",
//     members: 18762,
//     posts: 5123,
//     trending: true,
//   },
//   {
//     text: "java",
//     img: "/java.jpg",
//     desc: "Java programming discussions and best practices. Learn Java with us!",
//     slug: "java",
//     members: 9876,
//     posts: 2345,
//   },
//   {
//     text: "c++",
//     img: "/c.png",
//     desc: "Exploring the world of C++ development. C++ is a versatile language.",
//     slug: "cpp",
//     members: 7654,
//     posts: 1987,
//   },
//   {
//     text: "machine learning",
//     img: "/ml.jpg",
//     desc: "Dive into machine learning algorithms and applications. ML is changing the world.",
//     slug: "ml",
//     members: 15432,
//     posts: 4321,
//     trending: true,
//   },
//   {
//     text: "web development",
//     img: "/webs.jpg",
//     desc: "Front-end, back-end, and everything in between for web developers. Build amazing websites.",
//     slug: "web",
//     members: 21345,
//     posts: 6789,
//     trending: true,
//   },
//   {
//     text: "react",
//     img: "/React.png",
//     desc: "A JavaScript library for building user interfaces. React is popular.",
//     slug: "react",
//     members: 16789,
//     posts: 4567,
//     trending: true,
//   },
//   {
//     text: "angular",
//     img: "/ang.jpg",
//     desc: "A comprehensive platform for building web applications. Angular has many features.",
//     slug: "angular",
//     members: 8765,
//     posts: 2109,
//   },
//   {
//     text: "vue",
//     img: "/vue.png",
//     desc: "A progressive JavaScript framework. Vue is easy to learn.",
//     slug: "vue",
//     members: 7890,
//     posts: 1876,
//   },
//   {
//     text: "node.js",
//     img: "/node.png",
//     desc: "Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.",
//     slug: "node",
//     members: 12345,
//     posts: 3456,
//   },
//   {
//     text: "express.js",
//     img: "/exp.png",
//     desc: "Express.js is a web application framework for Node.js. It is used to build APIs and web applications.",
//     slug: "express",
//     members: 6543,
//     posts: 1234,
//   },
//   {
//     text: "mongodb",
//     img: "/mongo.png",
//     desc: "MongoDB is a NoSQL database. It is used to store data in a flexible and scalable way.",
//     slug: "mongo",
//     members: 9876,
//     posts: 2345,
//   },
// ]

// const Forums = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [filteredTopics, setFilteredTopics] = useState(topics)
//   const [isLoading, setIsLoading] = useState(true)

//   // Simulate loading state
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 800)
//     return () => clearTimeout(timer)
//   }, [])

//   // Filter topics based on search term and active filter
//   useEffect(() => {
//     let result = topics

//     if (searchTerm) {
//       result = result.filter(
//         (topic) =>
//           topic.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           topic.desc.toLowerCase().includes(searchTerm.toLowerCase()),
//       )
//     }

//     if (activeFilter === "trending") {
//       result = result.filter((topic) => topic.trending)
//     }

//     setFilteredTopics(result)
//   }, [searchTerm, activeFilter])

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12">
//       {/* Decorative elements */}
//       <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-0 right-0 bg-gradient-to-b from-indigo-300/20 to-transparent w-1/3 h-1/3 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
//         <div className="absolute bottom-0 left-0 bg-gradient-to-t from-purple-300/20 to-transparent w-1/3 h-1/3 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
//       </div>

//       <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight"
//           >
//             Discussion{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Forums</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl text-gray-600 max-w-3xl mx-auto"
//           >
//             Join our vibrant community of developers and explore discussions on your favorite technologies
//           </motion.p>
//         </div>

//         {/* Search and Filter Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-12 max-w-4xl mx-auto"
//         >
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="relative flex-grow">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search forums..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
//               />
//             </div>
//             <div className="flex space-x-2">
//               <Button
//                 onClick={() => setActiveFilter("all")}
//                 className={`px-4 py-3 rounded-xl transition-all ${
//                   activeFilter === "all"
//                     ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 All Forums
//               </Button>
//               <Button
//                 onClick={() => setActiveFilter("trending")}
//                 className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 ${
//                   activeFilter === "trending"
//                     ? "bg-indigo-600 text-white hover:bg-indigo-700"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 <TrendingUp className="h-4 w-4" />
//                 Trending
//               </Button>
//             </div>
//           </div>
//         </motion.div>

//         {/* Forums Grid */}
//         <AnimatePresence>
//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
//             </div>
//           ) : (
//             <>
//               {filteredTopics.length === 0 ? (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="text-center py-16"
//                 >
//                   <h3 className="text-2xl font-semibold text-gray-700 mb-2">No forums found</h3>
//                   <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   variants={containerVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//                 >
//                   {filteredTopics.map((topic, index) => (
//                     <motion.div key={topic.slug} variants={itemVariants}>
//                       <Tilt
//                         className="h-full"
//                         options={{
//                           max: 15,
//                           perspective: 1000,
//                           scale: 1.02,
//                           transition: true,
//                           glare: true,
//                           "max-glare": 0.1,
//                         }}
//                       >
//                         <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
//                           {/* Gradient border effect */}
//                           <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                           <div className="relative h-full rounded-2xl overflow-hidden bg-white p-6 flex flex-col">
//                             {/* Trending badge */}
//                             {topic.trending && (
//                               <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 z-10">
//                                 <TrendingUp className="h-3 w-3" />
//                                 Trending
//                               </div>
//                             )}

//                             {/* Topic image */}
//                             <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
//                               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
//                               <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
//                                 <Image
//                                   src={topic.img || "/placeholder.svg"}
//                                   alt={topic.text}
//                                   fill
//                                   style={{ objectFit: "cover" }}
//                                   sizes="100vw"
//                                   priority={topic.text === "python"}
//                                   className="transition-transform duration-500 group-hover:scale-110"
//                                 />
//                               </div>
//                             </div>

//                             {/* Topic content */}
//                             <div className="text-center flex-grow">
//                               <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize group-hover:text-indigo-600 transition-colors duration-300">
//                                 {topic.text}
//                               </h2>
//                               <p className="text-gray-600 line-clamp-3 mb-6 text-sm">{topic.desc}</p>

//                               {/* Stats */}
//                               <div className="flex justify-center gap-6 mb-6 text-sm text-gray-500">
//                                 <div className="flex items-center gap-1.5">
//                                   <Users className="h-4 w-4 text-indigo-500" />
//                                   <span>{topic.members.toLocaleString()}</span>
//                                 </div>
//                                 <div className="flex items-center gap-1.5">
//                                   <MessageSquare className="h-4 w-4 text-indigo-500" />
//                                   <span>{topic.posts.toLocaleString()}</span>
//                                 </div>
//                               </div>
//                             </div>

//                             {/* Action button */}
//                             <Link href={`/forum/${topic.slug}`} legacyBehavior>
//                               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
//                                 <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
//                                   Discuss Now
//                                   <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                                 </Button>
//                               </motion.div>
//                             </Link>
//                           </div>
//                         </div>
//                       </Tilt>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               )}
//             </>
//           )}
//         </AnimatePresence>

//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-5xl mx-auto"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-indigo-600 mb-2">100K+</h3>
//               <p className="text-gray-600">Active Members</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-indigo-600 mb-2">50+</h3>
//               <p className="text-gray-600">Technology Forums</p>
//             </div>
//             <div className="text-center">
//               <h3 className="text-4xl font-bold text-indigo-600 mb-2">1M+</h3>
//               <p className="text-gray-600">Discussions</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="mt-16 text-center"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Don't see your favorite technology?</h2>
//           <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-6 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
//             Suggest a New Forum
//           </Button>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <div className="mt-24 py-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
//         <div className="container mx-auto px-6 text-center text-gray-600">
//           <p>© {new Date().getFullYear()} ConvoNetX. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Forums















"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight, TrendingUp, MessageSquare, Users } from "lucide-react";

const topics = [
  {
    text: "python",
    img: "/python.jpg",
    desc: "Lets Discuss Anything Related To Python. This is a longer description to demonstrate the line-clamp effect.",
    slug: "python",
    members: 12453,
    posts: 3241,
    trending: true,
  },
  {
    text: "javascript",
    img: "/javascript.png",
    desc: "All things JavaScript: from frameworks to fundamentals. JavaScript is a powerful language.",
    slug: "javascript",
    members: 18762,
    posts: 5123,
    trending: true,
  },
  {
    text: "java",
    img: "/java.jpg",
    desc: "Java programming discussions and best practices. Learn Java with us!",
    slug: "java",
    members: 9876,
    posts: 2345,
  },
  {
    text: "c++",
    img: "/c.png",
    desc: "Exploring the world of C++ development. C++ is a versatile language.",
    slug: "cpp",
    members: 7654,
    posts: 1987,
  },
  {
    text: "machine learning",
    img: "/ml.jpg",
    desc: "Dive into machine learning algorithms and applications. ML is changing the world.",
    slug: "ml",
    members: 15432,
    posts: 4321,
    trending: true,
  },
  {
    text: "web development",
    img: "/webs.jpg",
    desc: "Front-end, back-end, and everything in between for web developers. Build amazing websites.",
    slug: "web",
    members: 21345,
    posts: 6789,
    trending: true,
  },
  {
    text: "react",
    img: "/React.png",
    desc: "A JavaScript library for building user interfaces. React is popular.",
    slug: "react",
    members: 16789,
    posts: 4567,
    trending: true,
  },
  {
    text: "angular",
    img: "/ang.jpg",
    desc: "A comprehensive platform for building web applications. Angular has many features.",
    slug: "angular",
    members: 8765,
    posts: 2109,
  },
  {
    text: "vue",
    img: "/vue.png",
    desc: "A progressive JavaScript framework. Vue is easy to learn.",
    slug: "vue",
    members: 7890,
    posts: 1876,
  },
  {
    text: "node.js",
    img: "/node.png",
    desc: "Node.js is a JavaScript runtime environment that executes JavaScript code outside of a web browser.",
    slug: "node",
    members: 12345,
    posts: 3456,
  },
  {
    text: "express.js",
    img: "/exp.png",
    desc: "Express.js is a web application framework for Node.js. It is used to build APIs and web applications.",
    slug: "express",
    members: 6543,
    posts: 1234,
  },
  {
    text: "mongodb",
    img: "/mongo.png",
    desc: "MongoDB is a NoSQL database. It is used to store data in a flexible and scalable way.",
    slug: "mongo",
    members: 9876,
    posts: 2345,
  },
];

const Forums = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTopics, setFilteredTopics] = useState(topics);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = topics;

    if (searchTerm) {
      result = result.filter(
        (topic) =>
          topic.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilter === "trending") {
      result = result.filter((topic) => topic.trending);
    }

    setFilteredTopics(result);
  }, [searchTerm, activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-12">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 bg-gradient-to-b from-indigo-300/20 to-transparent w-1/3 h-1/3 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-purple-300/20 to-transparent w-1/3 h-1/3 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-tight"
          >
            Discussion{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Forums</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our vibrant community of developers and explore discussions on your favorite technologies
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search forums..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-3 rounded-xl transition-all ${
                  activeFilter === "all"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Forums
              </Button>
              <Button
                onClick={() => setActiveFilter("trending")}
                className={`px-4 py-3 rounded-xl transition-all flex items-center gap-2 ${
                  activeFilter === "trending"
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                Trending
              </Button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <>
              {filteredTopics.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">No forums found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </motion.div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {filteredTopics.map((topic, index) => (
                    <motion.div key={topic.slug} variants={itemVariants}>
                      <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 relative group">
                        <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative h-full rounded-2xl overflow-hidden bg-white p-6 flex flex-col">
                          {topic.trending && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1 z-10">
                              <TrendingUp className="h-3 w-3" />
                              Trending
                            </div>
                          )}

                          <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                              <Image
                                src={topic.img || "/placeholder.svg"}
                                alt={topic.text}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="100vw"
                                priority={topic.text === "python"}
                                className="transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </div>

                          <div className="text-center flex-grow">
                            <h2 className="text-xl font-bold text-gray-800 mb-3 capitalize group-hover:text-indigo-600 transition-colors duration-300">
                              {topic.text}
                            </h2>
                            <p className="text-gray-600 line-clamp-3 mb-6 text-sm">{topic.desc}</p>

                            <div className="flex justify-center gap-6 mb-6 text-sm text-gray-500">
                              <div className="flex items-center gap-1.5">
                                <Users className="h-4 w-4 text-indigo-500" />
                                <span>{topic.members.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <MessageSquare className="h-4 w-4 text-indigo-500" />
                                <span>{topic.posts.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>

                          <Link href={`/forum/${topic.slug}`} legacyBehavior>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-auto">
                              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                                Discuss Now
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </Button>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">100K+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">50+</h3>
              <p className="text-gray-600">Technology Forums</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">1M+</h3>
              <p className="text-gray-600">Discussions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Don't see your favorite technology?</h2>
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-6 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
            Suggest a New Forum
          </Button>


          </motion.div>
      </div>

      <div className="mt-24 py-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} ConvoNetX. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Forums;