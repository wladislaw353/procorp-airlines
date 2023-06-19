import React, { useState, useContext } from 'react'
import BookingForm from '../components/BookingForm'
import BookingConfirmation from '../components/BookingConfirmation'
import { FlightsContext } from '../contexts/FlightsContext'
import { apiRequest } from '../utils/api'
import { Container, Alert } from '@mui/material'

const BookingPage = () => {
	const { order, setOrder } = useContext(FlightsContext)
	const [error, setError] = useState(null)

	const handleBooking = async data => {
		const response = true //await apiRequest('/api/order', data, 'POST')
		// Exapmle of API request. response set true for setOrder
		if (response) {
			setOrder(data)
		} else {
			setError('Failed to book flight. Please try again later')
		}
	}

	return (
		<Container>
			{error && (
				<>
					<Alert severity="error">{error}</Alert>
					<br />
				</>
			)}
			{!order ? <BookingForm onBooking={handleBooking} /> : <BookingConfirmation />}
		</Container>
	)
}

export default BookingPage
