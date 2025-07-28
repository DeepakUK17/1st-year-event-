"use client"

import { motion } from "framer-motion"
import { Brain, Database, Cpu, Sparkles, Network, Zap, Bot, Code } from "lucide-react"
import Link from "next/link"

export default function Introduction() {
  const topics = [
    {
      title: "Artificial Intelligence",
      shortTitle: "AI",
      icon: Brain,
      description:
        "AI is the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses various techniques to enable computers to perform tasks that typically require human intelligence.",
      gradient: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "Machine Learning",
      shortTitle: "ML",
      icon: Network,
      description:
        "ML is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms to analyze data, identify patterns, and make predictions or decisions.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      title: "Deep Learning",
      shortTitle: "DL",
      icon: Cpu,
      description:
        "DL is a specialized subset of ML that uses artificial neural networks with multiple layers to model and understand complex patterns in data. It's inspired by the structure and function of the human brain.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      title: "Generative AI",
      shortTitle: "GenAI",
      icon: Sparkles,
      description:
        "GenAI refers to AI systems that can generate new content, including text, images, code, and more. It uses advanced models to create original outputs based on patterns learned from training data.",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
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
              <Link href="/introduction" className="text-cyan-400">
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
              Introduction to Technologies
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore the fundamental concepts that drive our department's research and education in the field of
              artificial intelligence and data science.
            </p>
          </motion.div>

          {/* Topics Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {topics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div
                    className={`backdrop-blur-lg bg-gradient-to-br ${topic.bgGradient} rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-${topic.gradient.split(" ")[1]}/10 h-full`}
                  >
                    <div className="flex items-start space-x-6">
                      {/* Icon Section */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${topic.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>

                      {/* Content Section */}
                      <div className="flex-grow">
                        <motion.h3
                          whileHover={{ scale: 1.02 }}
                          className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${topic.gradient} bg-clip-text text-transparent`}
                        >
                          {topic.title}
                        </motion.h3>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                          className={`text-lg font-semibold mb-4 text-transparent bg-gradient-to-r ${topic.gradient} bg-clip-text`}
                        >
                          ({topic.shortTitle})
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                          className="text-gray-300 leading-relaxed"
                        >
                          {topic.description}
                        </motion.p>

                        {/* Animated underline */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.7 }}
                          viewport={{ once: true }}
                          className={`h-1 bg-gradient-to-r ${topic.gradient} rounded-full mt-4`}
                        />
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r ${topic.gradient} opacity-5 rounded-3xl pointer-events-none`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Future of Technology
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                These technologies work together to create intelligent systems that can understand, learn, and adapt.
                Our department focuses on the intersection of these fields to prepare students for the challenges and
                opportunities of tomorrow's digital world.
              </p>

              {/* Animated Icons */}
              <div className="flex justify-center space-x-8">
                {[Bot, Code, Database, Zap].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
