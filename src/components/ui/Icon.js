import * as React from 'react'
import * as Icons from '@mui/icons-material'

function Icon({ name }) {
	const IconComponent = Icons[name]
	return IconComponent ? <IconComponent /> : null
}

export default Icon