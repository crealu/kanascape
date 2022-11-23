import React, { useContext, useState, useEffect } from 'react';
import { KanascapeContext } from '../../context';
import { KanjiObject, compareResults } from '../../common/general';
import './scape.css';
import ResultsView from './resultsview';

const Results = () => {
  const {state, dispatch} = useContext(KanascapeContext);
  const [theMatches, setTheMatches] = useState([]);

  const getResults = () => {
    let matches = [];
    state.kanji.n3.forEach(kanji => {
      kanji.examples.forEach(ex => {
        if (ex[1].includes(state.query)) {
          matches.push([ex[1].indexOf(state.query[0]), ex]);
        }
      })
    })

    matches.sort((a, b) => { return compareResults(a, b)})
    // dispatch({ type: 'update matches', payload: matches });
    setTheMatches(matches);
  }

  const returnResultsView = () => {
    return state.query != ''
      ? theMatches.map(match => { return <ResultsView result={match[1]} />})
      : ''
  }

  useEffect((theMatches) => { getResults() }, [state.query]);

  return <div className="results-view">{returnResultsView()}</div>
}

export default Results;
