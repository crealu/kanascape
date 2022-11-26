import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import './kana.css';

const KanaBox = ({ kana }) => {
  const {state, dispatch} = useContext(KanascapeContext);

  const determineType = (char) => {
    const queryEnd = state.query != '' ? state.query[state.query.length - 1] : '';
    return `${queryEnd == char ? 'delete' : 'add'} kana`;
  }

  const handleClick = (event) => {
    const clickedKana = event.target.textContent;
    const theType = determineType(clickedKana);
    // dispatch({ type: 'set prev query', payload: ''});
    dispatch({ type: theType, payload: clickedKana });
    // getResults();
  }

  // const searchDict = () => {
  //   let matches = [];
  //   let exs;
  //
  //   for (let i = 0; i < state.kanji.length; i++) {
  //     for (let j = 0; j < state.kanji[i].examples.length; j++) {
  //       exs = state.kanji[i].examples[j];
  //       if (exs[1].includes(state.query)) {
  //         matches.push([exs.indexOf(state.query), exs]);
  //       }
  //     }
  //   }
  //
  //   // matches.sort((a, b) => { return compareResults(a, b) })
  //
  //   return matches;
  // }
  //
  // const getResults = async () => {
  //   const matches = await searchDict();
  //   dispatch({ type: 'update matches', payload: matches });
  // }

  return (
    <div className="kana-box" onClick={(e) => handleClick(e)}>
      {kana[state.alphabet]}
    </div>
  )
}

export default KanaBox;
