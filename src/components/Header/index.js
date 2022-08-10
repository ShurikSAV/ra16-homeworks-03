import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = ({menu}) => { 
	return(
		<nav className={styles.Header}>
			<ul>
				{menu.map((item, i) => {
					return (
						<li key={i} className={styles.linkMenu}>
							<NavLink 
								className={({isActive}) => isActive ? styles.linkActive : styles.linkDisable}
								to={item.path}>
									{item.name}
							</NavLink>
						</li>
					)}
				)}
			</ul>
		</nav>
		)
	}

Header.propTypes = {
	menu: PropTypes.array
}

export default Header;