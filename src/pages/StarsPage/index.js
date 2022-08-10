
import React from 'react'
import { Stars } from '../../components/Stars'
import style from './starsPage.module.css'

const starsRating = [-1, 0, 1, 2, 3, 4, 5, 6, 7]

export const StarsPage = () => {
	return (
		<div>
			<ul>
				{starsRating.map(
						(item, i) => <li key={i} className={style.starsPage}>{item} <Stars count={item} /></li>
				)}
			</ul>
		</div>
	)
}
