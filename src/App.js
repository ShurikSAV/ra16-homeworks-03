import React from 'react';
import styles from './App.module.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { StarsPage } from './pages/StarsPage';

const menu = [
		{
			path: "/",
			name: "Домой",
			element: (<p>Выберите задание в меню выше</p>)
		},
		{
			path: "/StarsPage",
			name: "Рейтинг фильмов",
			element: (<StarsPage />)
		}
	]

function App() {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<div className={styles.header}>
					<Header menu={menu}/>
				</div>

				<div className={styles.content}>
					<Routes>
						{menu.map(
							(item,index) => <Route key={index} {...item}></Route>
							)}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App