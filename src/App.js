'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sword, Target, Zap, ArrowLeft } from 'lucide-react'
import Confetti from 'react-confetti'

const acronyms = {
  Easy: [
    { acronym: 'LOL', words: ['Laugh', 'Out', 'Loud'] },
    { acronym: 'ASAP', words: ['As', 'Soon', 'As', 'Possible'] },
    { acronym: 'BRB', words: ['Be', 'Right', 'Back'] },
    { acronym: 'TBH', words: ['To', 'Be', 'Honest'] },
    { acronym: 'WHO', words: ['World', 'Health', 'Organization'] },
    { acronym: 'IDK', words: ['I', "Don't", 'Know'] },
    { acronym: 'OMG', words: ['Oh', 'My', 'God'] },
    { acronym: 'SQL', words: ['Structured', 'Query', 'Language'] },
    { acronym: 'VOIP', words: ['Voice', 'Over', 'Internet', 'Protocol'] },
    { acronym: 'OCR', words: ['Optical', 'Character', 'Recognition'] },
    { acronym: 'ROFL', words: ['Rolling', 'On', 'The', 'Floor', 'Laughing'] },
    { acronym: 'PTSD', words: ['Post', 'Traumatic', 'Stress', 'Disorder'] }
  ],
  Medium: [
    { acronym: 'WYSIWYG', words: ['What', 'You', 'See', 'Is', 'What', 'You', 'Get'] },
    { acronym: 'RAM', words: ['Random', 'Access', 'Memory'] },
    { acronym: 'KISS', words: ['Keep', 'It', 'Simple', 'Stupid'] },
    { acronym: 'CRUD', words: ['Create', 'Read', 'Update', 'Delete'] },
    { acronym: 'PDF', words: ['Portable', 'Document', 'Format'] },
    { acronym: 'FOMO', words: ['Fear', 'Of', 'Missing', 'Out'] },
    { acronym: 'SOAP', words: ['Simple', 'Object', 'Access', 'Protocol'] },
    { acronym: 'YOLO', words: ['You', 'Only', 'Live', 'Once'] },
    { acronym: 'API', words: ['Application', 'Programming', 'Interface'] },
    { acronym: 'GUI', words: ['Graphical', 'User', 'Interface'] },
    { acronym: 'IMHO', words: ['In', 'My', 'Humble', 'Opinion'] },
    { acronym: 'MADD', words: ['Mothers', 'Against', 'Drunk', 'Driving'] },
    { acronym: 'ESA', words: ['European', 'Space', 'Agency'] },
    { acronym: 'CSS', words: ['Cascading', 'Style', 'Sheets'] },
    { acronym: 'DNS', words: ['Domain', 'Name', 'System'] }
  ],
  Hard: [
    { acronym: 'POTUS', words: ['President', 'Of', 'The', 'United', 'States'] },
    { acronym: 'NASA', words: ['National', 'Aeronautics', 'and', 'Space', 'Administration'] },
    { acronym: 'SCOTUS', words: ['Supreme', 'Court', 'Of', 'The', 'United', 'States'] },
    { acronym: 'UNESCO', words: ['United', 'Nations', 'Educational', 'Scientific', 'and', 'Cultural', 'Organization'] },
    { acronym: 'INTERPOL', words: ['International', 'Criminal', 'Police', 'Organization'] },
    { acronym: 'USB', words: ['Universal', 'Serial', 'Bus'] },
    { acronym: 'MIDI', words: ['Musical', 'Instrument', 'Digital', 'Interface'] },
    { acronym: 'DARPA', words: ['Defense', 'Advanced', 'Research', 'Projects', 'Agency'] },
    { acronym: 'BIOS', words: ['Basic', 'Input', 'Output', 'System'] },
    { acronym: 'IDE', words: ['Integrated', 'Development', 'Environment'] },
    { acronym: 'JPEG', words: ['Joint', 'Photographic', 'Experts', 'Group'] },
    { acronym: 'LED', words: ['Light', 'Emitting', 'Diode'] }
  ]
}

export default function AcronynjaNinja() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState(null)
  const [guessesLeft, setGuessesLeft] = useState(5)
  const [currentAcronymObj, setCurrentAcronymObj] = useState(null) 
  const [currentAcronym, setCurrentAcronym] = useState('')
  const [guess, setGuess] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)


  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    const randomAcronymObj = acronyms[selectedDifficulty][Math.floor(Math.random() * acronyms[selectedDifficulty].length)]
    setCurrentAcronymObj(randomAcronymObj)
    setGuess(Array(randomAcronymObj.words.length).fill(''))
    setGameStarted(true)
  }

  const goBack = () => {
    setGameStarted(false)
    setGuessesLeft(5)
    setShowConfetti(false)
    setGuess([])
    setCurrentAcronymObj(null)
  }

  const submitGuess = () => {
    const isCorrect = guess.every((word, index) => 
      word.toLowerCase() === currentAcronymObj.words[index].toLowerCase()
    )
    if (isCorrect) {
      setShowConfetti(true)
      // Handle win condition
    } else {
      setGuessesLeft(guessesLeft - 1)
      if (guessesLeft === 1) {
        // Handle lose condition
      }
    }
  }


  const getHint = () => {
    // Implement hint logic here
  }

  const showAnswer = () => {
   setGuess(currentAcronymObj.words)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
      >
        {!gameStarted ? (
          <StartScreen startGame={startGame} />
        ) : (
          <GameScreen
            guessesLeft={guessesLeft}
            currentAcronymObj={currentAcronymObj}
            guess={guess}
            setGuess={setGuess}
            submitGuess={submitGuess}
            getHint={getHint}
            showAnswer={showAnswer}
            goBack={goBack}
          />
        )}
      </motion.div>
      {showConfetti && <Confetti />}
    </div>
  )
}

function StartScreen({ startGame }) {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl font-bold text-purple-600 mb-6"
      >
        Acronynja
      </motion.h1>
      <p className="text-gray-600 mb-8">
        Think you know your acronyms? You have five guesses to prove it!
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose your difficulty level</h2>
      <div className="flex flex-col space-y-4 mb-8">
        {['Easy', 'Medium', 'Hard'].map((level) => (
          <motion.button
            key={level}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-white font-semibold shadow-md ${
              level === 'Easy'
                ? 'bg-green-500 hover:bg-green-600'
                : level === 'Medium'
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-red-500 hover:bg-red-600'
            }`}
            onClick={() => startGame(level)}
          >
            {level === 'Easy' ? <Target className="inline-block mr-2" /> : null}
            {level === 'Medium' ? <Zap className="inline-block mr-2" /> : null}
            {level === 'Hard' ? <Sword className="inline-block mr-2" /> : null}
            {level}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

function GameScreen({
  guessesLeft,
  currentAcronymObj,
  guess,
  setGuess,
  submitGuess,
  getHint,
  showAnswer,
  goBack,
}) {
  return (
    <div className="text-center">
      <div className="flex justify-between items-center mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-purple-600 hover:text-purple-800"
          onClick={goBack}
        >
          <ArrowLeft size={24} />
        </motion.button>
        <h1 className="text-3xl font-bold text-purple-600">Acronynja</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </div>
      <p className="text-xl font-semibold text-gray-800 mb-4">
        Guesses left: <span className="text-purple-600">{guessesLeft}</span>
      </p>
      <p className="text-2xl font-bold text-gray-800 mb-6">
        The acronym is: <span className="text-purple-600">{currentAcronymObj.acronym}</span>
      </p>
      <div className="space-y-4 mb-6">
      {currentAcronymObj.words.map((word, index) => (
          <div key={index} className="flex items-center justify-center space-x-2">
            <span className="text-xl font-semibold text-purple-600">{currentAcronymObj.acronym[index]} =</span>
            <input
              type="text"
              value={guess[index]}
              onChange={(e) => {
                const newGuess = [...guess]
                newGuess[index] = e.target.value
                setGuess(newGuess)
              }}
              className="border-2 border-purple-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Enter your guess"
            />
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition duration-300"
          onClick={submitGuess}
        >
          Submit your guess
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          onClick={getHint}
        >
          Get a hint
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full px-6 py-3 bg-gray-500 text-white rounded-full font-semibold shadow-md hover:bg-gray-600 transition duration-300"
          onClick={showAnswer}
        >
          Show me the answer
        </motion.button>
      </div>
    </div>
  )
}

