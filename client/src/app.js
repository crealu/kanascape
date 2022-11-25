import React, { useReducer, useEffect } from 'react';
import './app.css';
import { initialState, reducer, KanascapeContext } from './context';
import Kana from './components/kana/kana';
import Scape from './components/scape/scape';

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchKanji = () => {
		let allKanji = [];
		for (let i = 1; i < 6; i++) {
			fetch('https://kanji-data.herokuapp.com/n' + i + 'kanji')
				.then(res => { return res.json()})
				.then(data => {
					console.log(data);
					allKanji.push(JSON.stringify(data.kanji));

				})
				.then(() => {localStorage.setIem('kanji', allKanji)})
				.catch(err => { console.log(err)})

			console.log(allKanji);
		}

		localStorage.setItem('kanji', allKanji);
		dispatch({
			type: "update kanji",
			payload: allKanji
		});
	}

	const getStorageKanji = () => {
		const theKanji = localStorage.getItem('kanji');
		dispatch({
			type: "update kanji",
			payload: JSON.parse(theKanji)
		});
	}

	useEffect(() => {
		fetchKanji();
		// getStorageKanji();

		// if (localStorage.getItem('kanji') == null) {
		// 	fetchKanji();
		// } else {
		// 	getStorageKanji();
		// }
	}, [])

	return (
		<KanascapeContext.Provider value={{state, dispatch}}>
			<div className="kanascape">
				<Kana />
				<Scape />
			</div>
		</KanascapeContext.Provider>
	)
}

export default App;
