import React from "react"
import QuestionCard from "./components/QuestionCard"

const App = () => {
	const startTrivia = async () => {}

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

	const nextQuestion = () => {}

	return (
		<div className='App'>
			<h1>Music Trivia</h1>
			<button className='start' onClick={startTrivia}>
				Start Game
			</button>
			<p className='score'>Score:</p>
			<p>Loading Questions...</p>
			<QuestionCard />
			<button className='next' onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	)
}

export default App
