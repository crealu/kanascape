import React, { useReducer, useEffect } from 'react';
import './app.css';
import { initialState, reducer, KanascapeContext } from './context';
import Kana from './components/kana/kana';
import Scape from './components/scape/scape';

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchKanji = () => {
		fetch('https://kanji-data.herokuapp.com/n3kanji')
			.then(res => { return res.json()})
			.then(data => {
				console.log(data);
				localStorage.setItem('kanji', JSON.stringify(data.kanji));
				dispatch({
					type: "update kanji",
					payload: data.kanji
				});
			})
			.catch(err => { console.log(err)})
		return 'no matches found';
	}

	const getStorageKanji = () => {
		const theKanji = localStorage.getItem('kanji');
		dispatch({
			type: "update kanji",
			payload: JSON.parse(theKanji)
		});
	}

	useEffect(() => {
		if (localStorage.getItem('kanji') == null) {
			fetchKanji();
		} else {
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
