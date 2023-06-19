import React, { createContext, useEffect, useState } from 'react'
import { apiRequest } from '../utils/api'
import { Container, Alert } from '@mui/material'

export const FlightsContext = createContext()

export const FlightsProvider = ({ children }) => {
	const [flights, setFlights] = useState([])
	const [selectedFlight, setSelectedFlight] = useState(null)
	const [order, setOrder] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const response = await apiRequest('/api-imitation/flights.json')
			if (response) {
				const flights = response
				setFlights(flights)
			} else {
				setError('Failed to get flight data. Please try again later')
			}
		}
		fetchData()
	}, [])

	return (
		<FlightsContext.Provider value={{ flights, setFlights, selectedFlight, setSelectedFlight, order, setOrder }}>
			{error ? (
				<Container>
					<Alert severity="error">{error}</Alert>
					<br />
				</Container>
			) : (
				children
			)}
		</FlightsContext.Provider>
	)
}
