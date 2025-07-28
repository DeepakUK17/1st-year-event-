"use client"

import { motion } from "framer-motion"
import { Quote, Sparkles, Brain } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HODAddress() {
  const addressText = `Dear Students, Faculty, and Esteemed Colleagues,

It is with immense pride and excitement that I address you as the Head of the Department of Artificial Intelligence and Data Science at Karpagam Academy of Higher Education.

Since our establishment in June 2020, we have embarked on an extraordinary journey of innovation, discovery, and academic excellence. Our department stands as a beacon of cutting-edge education, where we nurture the next generation of AI and Data Science professionals who will shape the future of technology.

In today's rapidly evolving digital landscape, artificial intelligence and data science are not just academic subjects—they are the driving forces behind revolutionary changes across industries. From healthcare to finance, from autonomous vehicles to smart cities, our graduates are at the forefront of these transformative technologies.

Our commitment extends beyond traditional classroom learning. We believe in hands-on experience, industry collaboration, and research-driven education. Our state-of-the-art laboratories, experienced faculty, and strong industry partnerships provide our students with unparalleled opportunities to excel in their chosen fields.

As we look toward the future, I am confident that our department will continue to be a catalyst for innovation, producing skilled professionals who will make meaningful contributions to society through the power of artificial intelligence and data science.

Together, we are not just learning about the future—we are creating it.

Warm regards,
Dr. B. Arunkumar
Professor & Head
Department of AI & Data Science`

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
              <Link href="/faculty" className="hover:text-cyan-400 transition-colors">
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
              <Link href="/hod-address" className="text-cyan-400">
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
              Address by HOD
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A message from our esteemed Head of Department on our vision, mission, and commitment to excellence.
            </p>
          </motion.div>

          {/* HOD Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Dr. B. Arunkumar"
                        width={200}
                        height={200}
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

                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Dr. B. Arunkumar
                  </h2>
                  <p className="text-lg text-cyan-400 mb-1">Professor & Head</p>
                  <p className="text-gray-300">Department of AI & Data Science</p>
                  <p className="text-gray-400 text-sm">Karpagam Academy of Higher Education</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Address Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>

              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center mb-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Address Text */}
              <div className="relative z-10">
                {addressText.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-gray-300 leading-relaxed mb-6 ${
                      paragraph.includes("Dear Students") ? "text-lg font-semibold text-cyan-400" : ""
                    } ${paragraph.includes("Warm regards") ? "text-right mt-8 text-purple-400 font-semibold" : ""}`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 opacity-20">
                <Brain className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-8 border border-white/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Leadership Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  "To foster an environment where innovation meets education, where students are empowered to become the
                  architects of tomorrow's intelligent systems, and where our research contributes meaningfully to
                  solving global challenges through artificial intelligence and data science."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
