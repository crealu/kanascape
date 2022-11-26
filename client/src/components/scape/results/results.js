import React, { useContext, useEffect, useCallback, useMemo } from 'react';
import { KanascapeContext } from '../../../context';
import { KanjiObject, compareResults } from '../../../common/general';
import './results.css';
import { View1, View2, View3, View4 } from '../views/views';


const views = [
  {render: (res) => { return <View1 result={res} />}},
  {render: (res) => { return <View2 result={res} />}},
  {render: (res) => { return <View3 result={res} />}},
  {render: (res) => { return <View4 result={res} />}},
];

const Results = () => {
  const {state, dispatch} = useContext(KanascapeContext);

  const getMatches = () => {
    let matches = [];
    for (let i = 0; i < state.kanji.length; i++) {
      for (let j = 0; j < state.kanji[i].examples.length; j++) {
        const example = state.kanji[i].examples[j];
        if (example[1].includes(state.query)) {
          matches.push([example.indexOf(state.query), example]);
        }
      }
    }
    return matches;
  };

  const updateResults = useCallback( () => {
    const matches = state.query == '' ? [] : getMatches();
    dispatch({ type: 'update matches', payload: matches });
  }, [state.query]);

  useEffect(() => { updateResults() }, [state.query])

  return (
    <div className="results-view">
      {state.matches.map(match => { return views[state.view].render(match[1]) })}
    </div>
  )
}

// {state.matches.map(match => { return <ResultsView result={match[1]}/> })}


export default Results;
