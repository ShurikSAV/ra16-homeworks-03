import React from 'react'
import { MessageHistory } from '../../components/MessageHistory';
//import PropTypes from 'prop-types';
import style from './templates.module.css'

const messages = [{
	id: 'chat-5-1090',
	from: { name: 'Ольга' },
	type: 'response',
	time: '10:10',
	text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  }, {
	id: 'chat-5-1091',
	from: { name: 'Виктор' },
	type: 'message',
	time: '10:12',
	text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
	id: 'chat-5-1092',
	from: { name: 'Ольга' },
	type: 'response',
	time: '10:14',
	text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
	id: 'chat-5-1093',
	from: { name: 'Виктор' },
	type: 'message',
	time: '10:20',
	text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
  }, {
	id: 'chat-5-1094',
	from: { name: 'Виктор' },
	type: 'typing',
	time: '10:31'
  }];

export const ChatHistoryPage = () => {
	return (
		<div className={style.body}>
			<div className={`${style.clearfix} ${style.container}`}>
				<div className={style.chat}>
				<div className={style.chat_history}>
					<MessageHistory list={messages} />
				</div>
				</div>  
			</div>
		</div>
	)
}

/*
ChatHistoryPage.propTypes = {
	count: PropTypes.number
	}
*/