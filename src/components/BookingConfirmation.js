import React, { useContext } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import { Box, Grid, Typography } from '@mui/material'

const BookingConfirmation = () => {
	const { selectedFlight, order } = useContext(FlightsContext)

	return (
		<Box component="section" mb={4}>
			<Typography variant="h5" component="h2" gutterBottom>
				Booking completed successfully
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="body1">
						Flight: {selectedFlight.from} → {selectedFlight.to}
					</Typography>
					<Typography variant="body1">
						Departure: {new Date(selectedFlight.departure).toLocaleString()}
					</Typography>
					<Typography variant="body1">
						Arrival: {new Date(selectedFlight.arrival).toLocaleString()}
					</Typography>
					<Typography variant="body1">Duration: {selectedFlight.duration}</Typography>
					<Typography variant="body1">Cost: {order.totalPrice} €</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">Name: {order.fullName}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">
						Order date and time: {new Date(order.createdAt).toLocaleString()}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">Seats reserved:</Typography>
					<ul>
						{order.seats.map(seat => (
							<li key={seat.id}>{seat.number}</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Box>
	)
}

export default BookingConfirmation
