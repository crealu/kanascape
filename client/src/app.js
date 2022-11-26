import React, { useReducer, useEffect } from 'react';
import './app.css';
import { initialState, reducer, KanascapeContext } from './context';
import Kana from './components/kana/kana';
import Scape from './components/scape/scape';

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchKanji = async () => {
		let allKanji = [];

		for (let i = 1; i < 6; i++) {
			await fetch('https://kanji-data.herokuapp.com/n' + i + 'kanji')
				.then(res => { return res.json() })
				.then(data => { allKanji.push(...data.kanji['n'+i]) })
				.catch(err => { console.log(err) })

			if (i == 5) {
				console.log(allKanji);
				localStorage.setItem('kanji', JSON.stringify({all: allKanji}));
			}
		}
		// console.log(allKanji);
		// localStorage.setItem('kanji', JSON.stringify(allKanji));
		dispatch({ type: "update kanji", payload: allKanji });
	}

	const getStorageKanji = () => {
		// const theKanji = localStorage.getItem('kanji');
		dispatch({
			type: "update kanji",
			payload: JSON.parse(localStorage.getItem('kanji')).all
		});
	}

	useEffect(() => {
		// fetchKanji();
		// getStorageKanji();

		if (localStorage.getItem('kanji') == null) {
			fetchKanji();
		} else {
			// console.log(localStorage.getItem('kanji'));
			getStorageKanji();
		}
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
