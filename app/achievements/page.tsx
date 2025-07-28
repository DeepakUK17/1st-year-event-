"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Star, Medal, Target, Zap, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Achievements() {
  const achievements = [
    {
      year: "2024",
      title: "Best AI Research Department",
      description:
        "Recognized as the leading AI research department in South India for innovative projects and publications.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
    },
    {
      year: "2023",
      title: "Industry Partnership Excellence",
      description:
        "Established successful collaborations with 15+ tech companies for student internships and research projects.",
      icon: Users,
      color: "from-blue-400 to-cyan-500",
    },
    {
      year: "2023",
      title: "Student Achievement Awards",
      description:
        "Our students won 8 national-level competitions in AI/ML and secured placements in top tech companies.",
      icon: Medal,
      color: "from-purple-400 to-pink-500",
    },
    {
      year: "2022",
      title: "Research Publication Milestone",
      description: "Published 25+ research papers in top-tier international journals and conferences.",
      icon: BookOpen,
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "2022",
      title: "Innovation Lab Launch",
      description: "Inaugurated state-of-the-art AI/ML laboratory with cutting-edge hardware and software resources.",
      icon: Zap,
      color: "from-red-400 to-pink-500",
    },
    {
      year: "2021",
      title: "Faculty Excellence Recognition",
      description:
        "Three faculty members received prestigious awards for their contributions to AI research and education.",
      icon: Star,
      color: "from-indigo-400 to-purple-500",
    },
    {
      year: "2021",
      title: "Startup Incubation Success",
      description: "Supported 5 student startups in AI/Data Science domain with successful funding and market entry.",
      icon: Target,
      color: "from-teal-400 to-blue-500",
    },
    {
      year: "2020",
      title: "Department Establishment",
      description:
        "Successfully established the Department of AI & Data Science with comprehensive curriculum and infrastructure.",
      icon: Award,
      color: "from-cyan-400 to-blue-500",
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
              <Link href="/faculty" className="hover:text-cyan-400 transition-colors">
                Faculty
              </Link>
              <Link href="/introduction" className="hover:text-cyan-400 transition-colors">
                Introduction
              </Link>
              <Link href="/achievements" className="text-cyan-400">
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
              Our Achievements
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Celebrating our milestones and recognitions that showcase our commitment to excellence in AI and Data
              Science education and research.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 rounded-full"></div>

              {/* Achievement Cards */}
              <div className="space-y-16">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  const isEven = index % 2 === 0

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
                    >
                      {/* Content Card */}
                      <div className={`w-5/12 ${isEven ? "pr-8" : "pl-8"}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="backdrop-blur-lg bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                        >
                          <div className="flex items-start space-x-4">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                              className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl`}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </motion.div>

                            <div className="flex-grow">
                              <div className="flex items-center space-x-3 mb-2">
                                <span
                                  className={`text-sm font-bold px-3 py-1 bg-gradient-to-r ${achievement.color} rounded-full text-white`}
                                >
                                  {achievement.year}
                                </span>
                              </div>
                              <h3
                                className={`text-xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}
                              >
                                {achievement.title}
                              </h3>
                              <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Timeline Node */}
                      <div className="w-2/12 flex justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                          className={`w-6 h-6 bg-gradient-to-r ${achievement.color} rounded-full border-4 border-slate-900 shadow-lg z-10`}
                        />
                      </div>

                      {/* Spacer */}
                      <div className="w-5/12"></div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Department Statistics
              </h3>

              <div className="grid md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Research Papers</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-gray-300 text-sm">Industry Partners</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/20"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">8</div>
                  <div className="text-gray-300 text-sm">National Awards</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/20"
                >
                  <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
                  <div className="text-gray-300 text-sm">Successful Startups</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
