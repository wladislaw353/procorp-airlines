import React, { useContext, useState } from 'react'
import { FlightsContext } from '../contexts/FlightsContext'
import SearchForm from '../components/SearchForm'
import SearchResults from '../components/SearchResults'
import { Container } from '@mui/material'

const SearchPage = data => {
	console.log(data)
	const { flights: allFlights } = useContext(FlightsContext)
	console.log(allFlights)
	const [flights, setFlights] = useState([])

	const handleSearch = data => {
		const filteredFlights = allFlights.filter(flight => {
			return (
				flight.from === data.from &&
				flight.to === data.to &&
				new Date(flight.departure) >= new Date(`${data.departureDate}T${data.departureTime}`) &&
				new Date(flight.arrival) <= new Date(`${data.arrivalDate}T${data.arrivalTime}`) &&
				flight.price >= data.minPrice &&
				flight.price <= data.maxPrice &&
				flight.seats.filter(seat => seat.available).length >= data.seats
			)
		})
		setFlights(filteredFlights)
	}

	return (
		<Container>
			<SearchForm onSearch={handleSearch} />
			{flights.length > 0 && <SearchResults />}
		</Container>
	)
}

export default SearchPage
