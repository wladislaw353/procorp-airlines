import React, { useState } from 'react'
import BookingForm from '../components/BookingForm'
import BookingConfirmation from '../components/BookingConfirmation'
import { apiRequest } from '../utils/api'
import { Container } from '@mui/material'

const BookingPage = () => {
	const [order, setOrder] = useState(null)

	const handleBooking = async data => {
		const response = await apiRequest('/api-imitation/order.json', data, 'POST')
		if (response) {
			const order = response
			setOrder(order)
		} else {
			// error
			console.log('error')
		}
	}

	return (
		<Container>
			{!order ? <BookingForm onBooking={handleBooking} /> : <BookingConfirmation order={order} />}
		</Container>
	)
}

export default BookingPage
