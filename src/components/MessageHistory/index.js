import React from 'react'
import { Message } from '../Message'
import PropTypes from 'prop-types';
import style from './messageHistory.module.css'

export const MessageHistory = ({list}) => {
	if(!list || list.length <= 0) return null

	return (
		<ul className={style.messageHistory}>
			{list.map(
				(item) => <Message key={item.id} message={item} />
			)}
		</ul>
	)
}

MessageHistory.defaultProps = {
	list: []
}

MessageHistory.propTypes = {
	list: PropTypes.array
}
