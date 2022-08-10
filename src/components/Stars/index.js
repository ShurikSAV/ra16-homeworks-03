import React from 'react'
import PropTypes from 'prop-types';
import { Star } from './Star'
import style from './stars.module.css'

export const Stars = ({count}) => {
	if(count < 1 || count > 5) return <p>неправильное количество звёзд = {count}</p>
	
	return (
		<ul className={`${style.card_body_stars} ${style.u_clearfix}`}>
			{[...new Array(count)].map(
				(_,i) => <Star key={i} />
			)}
		</ul>
	)
}

Stars.propTypes = {
	count: PropTypes.number
	}