import React, { useContext, useState, useEffect } from 'react';
import { KanascapeContext } from '../../context';
import { KanjiObject, compareResults } from '../../common/general';
import './scape.css';
import ResultsView from './resultsview';

const Results = () => {
  const {state, dispatch} = useContext(KanascapeContext);
  const [theMatches, setTheMatches] = useState(state.matches);

  const searchKanji = () => {
    let matches = [];
    let exs;

    console.log(state.kanji[0].examples[0][1].includes('い'));

    for (let i = 0; i < state.kanji.length; i++) {
      for (let j = 0; j < state.kanji[i].examples.length; j++) {
        exs = state.kanji[i].examples[j][1];
        if (exs.includes(state.query)) {
          matches.push([exs.indexOf(state.query), state.kanji[i]]);
        }
      }
    }

    return matches;
  }

  const getResults = async () => {
    const matches = await searchKanji();
    console.log(matches[0])
    dispatch({ type: 'update matches', payload: matches });
    setTheMatches(matches);
    // matches.sort((a, b) => { return compareResults(a, b) })
  }

  const returnResultsView = () => {
    getResults();

    return state.query != ''
      ? theMatches.map(match => { return <ResultsView result={match[1]} />})
      : ''
  }

  return <div className="results-view">{returnResultsView()}</div>
}

export default Results;
