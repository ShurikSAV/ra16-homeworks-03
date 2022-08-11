import React from 'react'
//import PropTypes from 'prop-types';
import style from './listing.module.css'

//TODO Если название предложения привышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце.
//"state": "removed",
export const Listing = ({item = {}}) => {
	const {state, url, MainImage, title, currency_code, price, quantity} = item
	
	if(state === "removed") return null

	const urlImg = MainImage.url_570xN
	
	//Если название предложения привышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце.
	const title50 = title.length >= 50 ? `${title.substr(0, 50)}...` : title

	/**Отформатировать цену и валюту */
	const formatPrice = (code, price) => {
		if(code === "USD") return `$${price}`
		if(code === "EUR") return `€${price}`
		
		return `${price} ${code}`
	}

	/**Стиль для остатка */
	const getStyleLevel = (quantity) => {
		if(quantity <= 10) return style.level_low
		if(quantity <= 20) return style.level_medium
		return style.level_high
	}

	return (
		<div className={style.item}>
			<div className={style.item_image}>
				<a href={url}>
					<img src={urlImg} />
				</a>
			</div>
			<div className={style.item_details}>
				<p className={style.item_title}>{title50}</p>
				<p className={style.item_price}>{ formatPrice(currency_code, price)}</p>
				<p className={`${style.item_quantity} ${getStyleLevel(quantity)}`}>{quantity} left</p>
			</div>
		</div>
	)
}

/*
Listing.propTypes = {
	count: PropTypes.number
	}
*/