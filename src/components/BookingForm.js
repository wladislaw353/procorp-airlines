import React, { useContext, useState } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField,
    Typography,
} from '@mui/material'

const BookingForm = ({ onBooking }) => {
	const { selectedFlight } = useContext(FlightsContext)
	const [fullName, setFullName] = useState('')
	const [selectedSeats, setSelectedSeats] = useState([])

	const handleSeatChange = e => {
		const seatId = parseInt(e.target.value)
		if (e.target.checked) {
			setSelectedSeats(prevSelectedSeats => [...prevSelectedSeats, seatId])
		} else {
			setSelectedSeats(prevSelectedSeats => prevSelectedSeats.filter(id => id !== seatId))
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		onBooking({
			flightId: selectedFlight.id,
			fullName,
			seats: selectedSeats,
		})
	}

	return (
		<Box component="section" mb={4}>
			<Typography variant="h5" component="h2" gutterBottom>
				Flight booking
			</Typography>
			<form onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							label="Name"
							value={fullName}
							onChange={e => setFullName(e.target.value)}
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl component="fieldset">
							<FormLabel component="legend">Selection of places</FormLabel>
							<FormGroup>
								{selectedFlight.seats.map(seat => (
									<FormControlLabel
										key={seat.id}
										control={
											<input
												type="checkbox"
												value={seat.id}
												onChange={handleSeatChange}
												disabled={!seat.available}
											/>
										}
										label={seat.number}
									/>
								))}
							</FormGroup>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" component="p">
							Total: {selectedFlight.price * selectedSeats.length} €
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary">
							Book
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	)
}

export default BookingForm
