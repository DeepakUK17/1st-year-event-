"use client"

import { motion } from "framer-motion"
import { QrCode, Smartphone, Zap, Brain } from "lucide-react"
import Link from "next/link"

export default function Quiz() {
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
              <Link href="/quiz" className="text-cyan-400">
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
      <section className="pt-32 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Interactive Quiz
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Test your knowledge in AI, Machine Learning, and Data Science with our interactive quiz platform.
            </p>
          </motion.div>

          {/* Main Quiz Interface */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Instructions */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      How to Access the Quiz
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <p className="text-gray-300">Scan the QR code with your smartphone</p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <p className="text-gray-300">Access the interactive quiz platform</p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <p className="text-gray-300">Test your AI & Data Science knowledge</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20"
                      >
                        <Brain className="w-6 h-6 text-cyan-400 mb-2" />
                        <p className="text-sm text-gray-300">AI Concepts</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20"
                      >
                        <Zap className="w-6 h-6 text-purple-400 mb-2" />
                        <p className="text-sm text-gray-300">Quick Results</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - QR Code Interface */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="relative">
                    {/* Tech Gadget Frame */}
                    <div className="backdrop-blur-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border-2 border-cyan-400/30 shadow-2xl shadow-cyan-400/10">
                      {/* Screen Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="text-xs text-cyan-400 font-mono">QUIZ_PORTAL.exe</div>
                      </div>

                      {/* QR Code Placeholder */}
                      <div className="w-64 h-64 bg-gradient-to-br from-white/90 to-gray-100/90 rounded-2xl flex items-center justify-center border-4 border-cyan-400/20 relative overflow-hidden">
                        {/* QR Code Pattern Simulation */}
                        <div className="absolute inset-4 grid grid-cols-8 gap-1">
                          {Array.from({ length: 64 }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: Math.random() > 0.5 ? 1 : 0 }}
                              transition={{
                                duration: 0.1,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                delay: i * 0.01,
                              }}
                              className="bg-black rounded-sm"
                            />
                          ))}
                        </div>

                        {/* Center Logo */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                            <QrCode className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Screen Footer */}
                      <div className="mt-6 text-center">
                        <p className="text-cyan-400 text-sm font-mono mb-2">SCAN TO ACCESS QUIZ</p>
                        <div className="flex items-center justify-center space-x-2">
                          <Smartphone className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-400">Mobile Optimized</span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -inset-4 border-2 border-cyan-400/20 rounded-full"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -inset-8 border border-purple-400/20 rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <div className="backdrop-blur-lg bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Quiz Features
                </h3>
                <p className="text-gray-300 text-sm">
                  Multiple choice questions • Real-time scoring • Instant feedback • Difficulty levels • Progress
                  tracking • Leaderboard
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
