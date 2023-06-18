import React, { createContext, useEffect, useState } from 'react'
import { apiRequest } from '../utils/api'

export const FlightsContext = createContext()

export const FlightsProvider = ({ children }) => {
	const [flights, setFlights] = useState([])
	const [selectedFlight, setSelectedFlight] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await apiRequest('/api-imitation/flights.json')
			if (response) {
				const flights = response
				setFlights(flights)
				console.log('ffffffff')
			} else {
				// error
				console.log('error')
			}
		}
		fetchData()
	}, [])

	return (
		<FlightsContext.Provider value={{ flights, setFlights, selectedFlight, setSelectedFlight }}>
			{children}
		</FlightsContext.Provider>
	)
}
