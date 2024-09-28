'use client'

import { useState, useEffect } from 'react'
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
    { acronym: 'RBI', words: ['Runs', 'Batted', 'In'] },
    { acronym: 'OMG', words: ['Oh', 'My', 'God'] },
    { acronym: 'SQL', words: ['Structured', 'Query', 'Language'] },
    { acronym: 'PTSD', words: ['Post', 'Traumatic', 'Stress', 'Disorder'] },
    { acronym: 'BYOB', words: ['Bring', 'Your', 'Own','Beverage']},
    { acronym: 'CMO', words: ['Chief', 'Marketing', 'Officer']},
    { acronym: 'CRM', words: ['Customer', 'Relationship', 'Management']},
    { acronym: 'ISP', words: ['Internet', 'Service', 'Provider']},
    { acronym: 'KPI', words: ['Key', 'Performance', 'Indicator']},
    { acronym: 'LAN', words: ['Local', 'Area', 'Network']},
    { acronym: 'LMS', words: ['Learning', 'Management', 'System']},
    { acronym: 'RFP', words: ['Request', 'For', 'Proposal']},
    { acronym: 'ROI', words: ['Return', 'On', 'Investment']},
    { acronym: 'SEO', words: ['Search', 'Engine', 'Optimization']},
    { acronym: 'SLA', words: ['Service', 'Level', 'Agreement']},
    { acronym: 'YOLO', words: ['You', 'Only', 'Live', 'Once'] },
    { acronym: 'TBD', words: ['To', 'Be', 'Determined']},
    { acronym: 'WIP', words: ['Work', 'In', 'Progress']},
    { acronym: 'AKA', words: ['Also', 'Known', 'As']},
    { acronym: 'IHOP', words: ['International', 'House', 'Of', 'Pancakes']},
    { acronym: 'BPM', words: ['Beats', 'Per', 'Minute']},
    { acronym: 'BTW', words: ['By', 'The', 'Way']},
    { acronym: 'POTUS', words: ['President', 'Of', 'The', 'United', 'States'] },
    { acronym: 'CST', words: ['Central', 'Standard', 'Time']},
    { acronym: 'EDT', words: ['Eastern', 'Daylight', 'Time']},
    { acronym: 'NSFW', words: ['Not', 'Safe', 'For', 'Work'] }
  ],
  Medium: [
    { acronym: 'WYSIWYG', words: ['What', 'You', 'See', 'Is', 'What', 'You', 'Get'] },
    { acronym: 'BBB', words: ['Better', 'Business', 'Bureau']},
    { acronym: 'CPG', words: ['Consumer', 'Packaged', 'Goods'] },
    { acronym: 'BCS', words: ['Bowl', 'Championship', 'Series']},
    { acronym: 'RAM', words: ['Random', 'Access', 'Memory'] },
    { acronym: 'ACC', words: ['Atlantic', 'Coast', 'Conference']},
    { acronym: 'AAA', words: ['American', 'Automobile', 'Association']},
    { acronym: 'ABM', words: ['Anti', 'Ballistic', 'Missile']},
    { acronym: 'PIN', words: ['Personal', 'Identification', 'Number']},
    { acronym: 'ADHD', words: ['Attention', 'Deficit', 'Hyperactivity', 'Disorder'] },
    { acronym: 'VOIP', words: ['Voice', 'Over', 'Internet', 'Protocol'] },
    { acronym: 'OEM', words: ['Original', 'Equipment', 'Manufacturer']},
    { acronym: 'ETL', words: ['Extract', 'Transform', 'Load']},
    { acronym: 'FTP', words: ['File', 'Transfer', 'Protocol']},
    { acronym: 'LCD', words: ['Liquid', 'Crystal', 'Display']},
    { acronym: 'VAT', words: ['Value', 'Added', 'Tax']},
    { acronym: 'SDK', words: ['Standard', 'Development', 'Kit']},
    { acronym: 'KISS', words: ['Keep', 'It', 'Simple', 'Stupid'] },
    { acronym: 'CRUD', words: ['Create', 'Read', 'Update', 'Delete'] },
    { acronym: 'PDF', words: ['Portable', 'Document', 'Format'] },
    { acronym: 'FOMO', words: ['Fear', 'Of', 'Missing', 'Out'] },
    { acronym: 'SOAP', words: ['Simple', 'Object', 'Access', 'Protocol'] },
    { acronym: 'API', words: ['Application', 'Programming', 'Interface'] },
    { acronym: 'GUI', words: ['Graphical', 'User', 'Interface'] },
    { acronym: 'IMHO', words: ['In', 'My', 'Humble', 'Opinion'] },
    { acronym: 'MADD', words: ['Mothers', 'Against', 'Drunk', 'Driving'] },
    { acronym: 'ESA', words: ['European', 'Space', 'Agency'] },
    { acronym: 'CSS', words: ['Cascading', 'Style', 'Sheets'] },
    { acronym: 'DNS', words: ['Domain', 'Name', 'System'] },
    { acronym: 'VPN', words: ['Virtual', 'Private', 'Network']},
    { acronym: 'CAD', words: ['Computer', 'Aided', 'Design']},
    { acronym: 'CPA', words: ['Certified', 'Public', 'Accountant']},
    { acronym: 'BMI', words: ['Body', 'Mass', 'Index']},
    { acronym: 'CPU', words: ['Central', 'Processing', 'Unit']},
    { acronym: 'EBT', words: ['Earnings', 'Before', 'Taxes']},
    { acronym: 'ECB', words: ['European', 'Central', 'Bank']},
    { acronym: 'ELL', words: ['English', 'Language', 'Learner']},
    { acronym: 'TKO', words: ['Technical', 'Knock', 'Out'] }
  ],
  Hard: [

    { acronym: 'BEV', words: ['Battery', 'Electric', 'Vehicle']},
    { acronym: 'EEZ', words: ['Economic', 'Exclusion', 'Zone']},
    { acronym: 'CCG', words: ['Collectible', 'Card', 'Game']},
    { acronym: 'CDS', words: ['Credit', 'Default', 'Swap']},
    { acronym: 'SKU', words: ['Stock', 'Keeping', 'Unit'] },
    { acronym: 'CSPAN', words: ['Cable', 'Satellite', 'Public', 'Access','Network']},
    { acronym: 'FEMA', words: ['Federal', 'Emergency', 'Management', 'System'] },
    { acronym: 'SCOTUS', words: ['Supreme', 'Court', 'Of', 'The', 'United', 'States'] },
    { acronym: 'UNESCO', words: ['United', 'Nations', 'Educational', 'Scientific', 'and', 'Cultural', 'Organization'] },
    { acronym: 'INTERPOL', words: ['International', 'Criminal', 'Police', 'Organization'] },
    { acronym: 'USB', words: ['Universal', 'Serial', 'Bus'] },
    { acronym: 'OCR', words: ['Optical', 'Character', 'Recognition'] },
    { acronym: 'SSD', words: ['Solid', 'State', 'Drive']},
    { acronym: 'TLD', words: ['Top', 'Level', 'Domain']},
    { acronym: 'SVG', words: ['Scalable', 'Vector', 'Graphics']},
    { acronym: 'MIDI', words: ['Musical', 'Instrument', 'Digital', 'Interface'] },
    { acronym: 'DARPA', words: ['Defense', 'Advanced', 'Research', 'Projects', 'Agency'] },
    { acronym: 'BIOS', words: ['Basic', 'Input', 'Output', 'System'] },
    { acronym: 'IDE', words: ['Integrated', 'Development', 'Environment'] },
    { acronym: 'JPEG', words: ['Joint', 'Photographic', 'Experts', 'Group'] },
    { acronym: 'LED', words: ['Light', 'Emitting', 'Diode'] },
    { acronym: 'CTE', words: ['Chronic', 'Traumatic', 'Encephalopathy'] }
  ]
}

export default function AcronynjaNinja() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState(null)
  const [guessesLeft, setGuessesLeft] = useState(5)
  const [currentAcronymObj, setCurrentAcronymObj] = useState(null) 
  //const [currentAcronym, setCurrentAcronym] = useState('')
  const [guess, setGuess] = useState([])
  const [showConfetti, setShowConfetti] = useState(false)
  //testing game over
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [feedback, setFeedback] = useState([])
  const [hintDisabled, setHintDisabled] = useState(false);

  useEffect(() => {
    if (currentAcronymObj) {
      const incorrectCount = feedback.filter(status => status !== 'correct').length;
      setHintDisabled(incorrectCount <= 1 || guessesLeft <= 1 || gameOver);
    }
  }, [feedback, guessesLeft, gameOver, currentAcronymObj]);

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty)
    const randomAcronymObj = acronyms[selectedDifficulty][Math.floor(Math.random() * acronyms[selectedDifficulty].length)]
    setCurrentAcronymObj(randomAcronymObj)
    setGuess(Array(randomAcronymObj.words.length).fill(''))
    setGameStarted(true)
    setGuessesLeft(5)
    setGameOver(false)
    setGameWon(false)
    setFeedback([])
  }

  const goBack = () => {
    setGameStarted(false)
    setGuessesLeft(5)
    setShowConfetti(false)
    setGuess([])
    setCurrentAcronymObj(null)
  }

  const submitGuess = () => {
    if (gameOver) return 

    const isCorrect = guess.every((word, index) => 
      word.toLowerCase() === currentAcronymObj.words[index].toLowerCase()
    )

    const newFeedback = guess.map((word, index) => 
      word.toLowerCase() === currentAcronymObj.words[index].toLowerCase() ? 'correct' : 'incorrect'
    )
    setFeedback(newFeedback)

    if (isCorrect) {
      setShowConfetti(true)
      setGameWon(true)
      setGameOver(true)
      // Handle win condition
    } else {
      const newGuessesLeft = guessesLeft - 1
      setGuessesLeft(newGuessesLeft)
      if (newGuessesLeft === 0) {
        setGameOver(true)
        // Handle lose condition
      }
    }
  }


  const getHint = () => {
    // Implement hint logic here
    if (gameOver || hintDisabled) return;

    // Find indices of incorrect guesses
    const incorrectIndices = feedback.reduce((acc, status, index) => {
      if (status !== 'correct') acc.push(index);
      return acc;
    }, []);

    if (incorrectIndices.length === 0) return; // All words are correct

    // Choose a random incorrect index
    const randomIndex = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];

    // Update the guess and feedback for the chosen word
    const newGuess = [...guess];
    newGuess[randomIndex] = currentAcronymObj.words[randomIndex];
    setGuess(newGuess);

    const newFeedback = [...feedback];
    newFeedback[randomIndex] = 'correct';
    setFeedback(newFeedback);

    // Decrease guesses left
    setGuessesLeft(guessesLeft - 1);

    // Check if the game is won after the hint
    if (newGuess.every((word, index) => word.toLowerCase() === currentAcronymObj.words[index].toLowerCase())) {
      setShowConfetti(true);
      setGameWon(true);
      setGameOver(true);
    } else if (guessesLeft - 1 === 0) {
      // Game over if no guesses left after using the hint
      setGameOver(true);
    }
  }

  const showAnswer = () => {
   setGuess(currentAcronymObj.words)
   setGameOver(true)
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
            gameOver={gameOver}
            gameWon={gameWon}
            feedback={feedback}
            hintDisabled={hintDisabled}
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
  gameOver,
  gameWon,
  feedback,
}) {

  const restartGame = () => {
    goBack(); // Go back to the start screen and reset everything
  };

  const shareWithFriend = () => {
    const gameUrl = 'https://styled-game.vercel.app/';
    const message = `I just solved the acronym ${currentAcronymObj.acronym} in Acronynja! Want to test your skills? Play here: ${gameUrl}`;
    const encodedMessage = encodeURIComponent(message);
    const smsUrl = `sms:?&body=${encodedMessage}`;
    
    window.open(smsUrl, '_blank');
    // Implement share functionality here
    // For now, we'll just log a message
    console.log("Sharing functionality to be implemented");
  };

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
      {gameOver ? (
        <div className="mb-6">
          <p className="text-2xl font-bold text-purple-600 mb-4">
            {gameWon ? "Congratulations! You won!" : "You lost!"}
          </p>
          <p className="text-xl text-gray-800">
            The correct answer was:
          </p>
          <p className="text-xl font-semibold text-purple-600">
            {currentAcronymObj.words.join(' ')}
          </p>
        </div>
      ) : (
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
                className={`border-2 rounded-md px-3 py-2 focus:outline-none ${
                  feedback[index] === 'correct'
                    ? 'border-green-500 bg-green-100'
                    : 'border-purple-300 focus:border-purple-500'
                }`}
                placeholder="Enter your guess"
                disabled={gameOver || feedback[index] === 'correct'}
              />
            </div>
          ))}
        </div>
      )}
      <div className="space-y-4">
        {!gameOver && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-md hover:bg-purple-700 transition duration-300"
            onClick={submitGuess}
          >
            Submit Your Guess
          </motion.button>
        )}
        {!gameOver ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 transition duration-300"
            onClick={getHint}
            disabled={gameOver || guessesLeft <= 1}
          >
            Get a Hint
          </motion.button>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-500 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition duration-300"
              onClick={restartGame}
            >
              New Game
            </motion.button>
            {gameWon && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-cyan-400 text-white rounded-full font-semibold shadow-md hover:bg-blue-400 transition duration-300"
                onClick={shareWithFriend}
              >
                Share With a Friend!
              </motion.button>
            )}
          </>
        )}

        {!gameOver && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-gray-500 text-white rounded-full font-semibold shadow-md hover:bg-gray-600 transition duration-300"
            onClick={showAnswer}
          >
            Show Me the Answer 
          </motion.button>
        )}
      </div>
    </div>
  )
}