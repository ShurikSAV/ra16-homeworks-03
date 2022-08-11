import React from 'react'
//import PropTypes from 'prop-types';
import style from './messageHistory.module.css'

export const MessageHistory = ({list}) => {
	if(!list || list.length <= 0) return null

	return (
		<ul>
			<li className={style.clearfix}>
				<div className={`${style.message_data} ${style.align_right}`}>
					<span className={style.message_data_time}>10:10</span> &nbsp; &nbsp;
					<span className={style.message_data_name}>Ольга</span>
					<i className={`${style.fa} ${style.fa_circle} ${style.me}`}></i>
				</div>
				<div className={`${style.message} ${style.other_message} ${style.float_right}`}>
					Привет, Виктор. Как дела? Как идет работа над проектом?
				</div>
			</li>
			<li>
				<div className={style.message_data}>
					<span className={style.message_data_name}><i className= {`${style.fa} ${style.fa_circle} ${style.online}`}></i> Виктор</span>
					<span className={style.message_data_time}>10:12</span>
				</div>
				<div className={`${style.message} ${style.my_message}`}>
					Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
				</div>
			</li>
		</ul>
	)
}

MessageHistory.defaultProps = {
	list: []
	};
/*
MessageHistory.propTypes = {
	count: PropTypes.number
	}
*/