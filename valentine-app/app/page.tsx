"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { Heart } from "lucide-react"

export default function ValentineProposal() {
  const [showQuestion, setShowQuestion] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-red-600 mb-8"
      >
        Hey Brianne Travis!
      </motion.h1>

      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}>
        <Heart className="text-red-500 w-24 h-24 mb-8" />
      </motion.div>

      {!showQuestion && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowQuestion(true)}
          className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          Click here for a special question!
        </motion.button>
      )}

      {showQuestion && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-red-600">Will you be my Valentine?</h2>

          {response === null && (
            <div className="space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setResponse("yes")}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
              >
                Yes!
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setResponse("no")}
                className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
              >
                No
              </motion.button>
            </div>
          )}

          {response === "yes" && (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-green-600"
              >
                Yay! I'm so excited! See you soon... hopefully ❤️
              </motion.p>
              <Confetti />
            </>
          )}

          {response === "no" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-gray-600"
            >
              Oh no! Maybe next time? 😢
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  )
}

