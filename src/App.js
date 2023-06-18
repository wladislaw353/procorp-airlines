import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FlightsProvider } from './contexts/FlightsContext'
import SearchPage from './pages/SearchPage'
import BookingPage from './pages/BookingPage'

const App = () => {
	return (
		<Router>
			<FlightsProvider>
				<Routes>
					<Route path="/" element={<SearchPage />} />
					<Route path="/booking" element={<BookingPage />} />
				</Routes>
			</FlightsProvider>
		</Router>
	)
}

export default App
