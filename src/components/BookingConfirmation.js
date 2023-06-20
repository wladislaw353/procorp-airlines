import React, { useContext } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const BookingConfirmation = () => {
	const { order } = useContext(FlightsContext)

	if (!order) {
		return (
			<Box component="section" mb={4}>
				<Typography variant="h5" component="h2" gutterBottom>
					No booking found
				</Typography>
				<Typography variant="body1">It looks like you haven't made a booking yet</Typography>
				<Button component={Link} to="/" variant="contained" color="primary">
					Search flight
				</Button>
			</Box>
		)
	}

	return (
		<Box component="section" mb={4}>
			<Typography variant="h5" component="h2" gutterBottom>
				Booking completed successfully
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="body1">Name: {order.fullName}</Typography>
					<Typography variant="body1">
						Order date and time: {new Date(order.createdAt).toLocaleString()}
					</Typography>
					<Typography variant="body1">Cost: {order.totalPrice} €</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">Seats reserved:</Typography>
					<ul>
						{order.seats.map((seat, index) => (
							<li key={index}>{seat.number}</li>
						))}
					</ul>
				</Grid>
			</Grid>
		</Box>
	)
}

export default BookingConfirmation
