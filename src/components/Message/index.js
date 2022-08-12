import React from 'react'
import PropTypes from 'prop-types';
import style from './message.module.css'

export const Message = ({message}) => {
	const {from, type, time, text} = message

	let clearfix = ""
	let messageStyle = style.my_message

	let message_data = () => (
		<div className={`${style.message_data} ${style.align_left}`}>
			<span className={style.message_data_name}>
				<i className={`${style.fa_circle} ${style.online}`}>●</i>
				{from.name}
			</span>
			<span className={style.message_data_time}>{time}</span>
		</div>
	)

	let message_text = () => (
		<div className={`${style.message} ${messageStyle}`}>
			{text}
		</div>
	)

	if(type === "response") {
		clearfix = style.clearfix
		messageStyle = `${style.other_message} ${style.float_right}`

		message_data = () => (
			<div className={`${style.message_data} ${style.align_right}`}>
				<span className={style.message_data_time}>{time}</span> &nbsp; &nbsp;
				<span className={style.message_data_name}>{from.name}</span>
				<i className={`${style.fa_circle} ${style.me}`}>●</i>
			</div>
		)
	}
	//else if(type === "message") {}
	else if(type === "typing") {
		message_text = () => (
			<div className={style.typing}>
				<i className={style.typing_text1}>●</i>
				<i className={style.typing_text2}>●</i>
				<i className={style.typing_text3}>●</i>
			</div>
		)
	}

	return (
		<li className={`${style.li} ${clearfix}`}>
			{message_data()}
			{message_text()}
		</li>
	)
}


Message.propTypes = {
	message: PropTypes.shape({
		from: PropTypes.shape({
			name: PropTypes.string
		}),
		type: PropTypes.string,
		time: PropTypes.string,
		text: PropTypes.string
	})
}