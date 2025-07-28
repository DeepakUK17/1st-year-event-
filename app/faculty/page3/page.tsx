"use client"

import { motion } from "framer-motion"
import { Mail, BookOpen, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FacultyPage3() {
  const facultyMembers = [
    {
      name: "Dr. Anita Patel",
      position: "Assistant Professor",
      department: "Department of AI&DS",
      domain: "Quantum Computing and AI Ethics",
      institution: "Karpagam Academy of Higher Education",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Suresh Reddy",
      position: "Assistant Professor",
      department: "Department of AI&DS",
      domain: "Blockchain Technology and Cybersecurity",
      institution: "Karpagam Academy of Higher Education",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Meera Nair",
      position: "Assistant Professor",
      department: "Department of AI&DS",
      domain: "Bioinformatics and Computational Biology",
      institution: "Karpagam Academy of Higher Education",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Arjun Gupta",
      position: "Assistant Professor",
      department: "Department of AI&DS",
      domain: "IoT and Edge Computing",
      institution: "Karpagam Academy of Higher Education",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              AI & DS Department
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/faculty" className="text-cyan-400">
                Faculty
              </Link>
              <Link href="/introduction" className="hover:text-cyan-400 transition-colors">
                Introduction
              </Link>
              <Link href="/achievements" className="hover:text-cyan-400 transition-colors">
                Achievements
              </Link>
              <Link href="/quiz" className="hover:text-cyan-400 transition-colors">
                Quiz
              </Link>
              <Link href="/hod-address" className="hover:text-cyan-400 transition-colors">
                HOD Address
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Faculty Page 3
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the final group of our distinguished faculty members.
            </p>
          </motion.div>

          {/* Faculty Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/10 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Profile Image */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative mb-6">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute -inset-2 border-2 border-cyan-400/20 rounded-full"
                      />
                    </motion.div>

                    {/* Faculty Info */}
                    <div className="flex-grow">
                      <motion.h3
                        whileHover={{ scale: 1.02 }}
                        className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      >
                        {member.name}
                      </motion.h3>

                      <div className="space-y-2 mb-6">
                        <p className="text-lg text-cyan-400 font-semibold">{member.position}</p>
                        <p className="text-gray-300 text-sm">{member.department}</p>
                        <div className="mt-3">
                          <p className="text-sm text-purple-400 font-semibold">Domain:</p>
                          <p className="text-gray-300 text-sm">{member.domain}</p>
                        </div>
                        <p className="text-gray-400 text-xs">{member.institution}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Contact</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">Profile</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-between items-center mt-16 max-w-6xl mx-auto"
          >
            <Link href="/faculty/page2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full text-white font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </motion.button>
            </Link>
            <div className="text-center">
              <p className="text-gray-400">Page 3 of 3</p>
              <p className="text-sm text-cyan-400 mt-2">All faculty members displayed</p>
            </div>
            <div className="w-32"></div> {/* Spacer for alignment */}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
