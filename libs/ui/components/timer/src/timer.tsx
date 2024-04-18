import { useEffect, useState } from 'react'

const timeFormatter = new Intl.DateTimeFormat('en', {
	timeStyle: 'medium',
	hour12: false,
})

const timeStyle = {
	fontFamily: "'Digital-7 Mono', monospace",
	fontSize: '48px',
	color: 'black',
	padding: '20px',
}

// eslint-disable-next-line import/prefer-default-export
export function Timer() {
	const [time, setTime] = useState<number>(Date.now())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(Date.now())
			return () => {
				clearInterval(interval)
			}
		}, 1000)
	}, [])
	return <div style={{ ...timeStyle }}>{timeFormatter.format(time)}</div>
}
