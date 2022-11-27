import React, { useContext, useEffect, useCallback, useMemo } from 'react';
import { KanascapeContext } from '../../../context';
import { KanjiObject, compareResults } from '../../../common/general';
import './results.css';
import { ExampleView, ReadingView } from '../view/view';

const Results = () => {
  const {state, dispatch} = useContext(KanascapeContext);

  const getMatches = () => {
    let matches = [];

    if (state.filter == 'examples') {
      for (let i = 0; i < state.kanji.length; i++) {
        for (let j = 0; j < state.kanji[i].examples.length; j++) {
          const example = state.kanji[i].examples[j];
          if (example[1].includes(state.query)) {
            // matches.push(state.kanji[i]);
            // matches.push([example.indexOf(state.query), example]);
            matches.push(example);
          }
        }
      }
    } else if (state.filter == 'reading') {
      for (let i = 0; i < state.kanji.length; i++) {
        const on = state.kanji[i].kanji[1];
        const kun = state.kanji[i].kanji[2];
        if (on.includes(state.query) || kun.includes(state.query)) {
          matches.push(state.kanji[i]);
        }
      }
    }

    return matches;
  };

  const updateResults = useCallback( async () => {
    const matches = state.query == '' ? [] : await getMatches();
    dispatch({ type: 'update matches', payload: matches });
  }, [state.query, state.filter]);

  useEffect(() => { updateResults() }, [state.query, state.filter])

  const renderView = () => {
    return (
      <div className="results-view">
        {state.filter == 'examples'
          ? state.matches.map((match, idx) => { return <ExampleView match={match} i={idx}/> })
          : state.matches.map(match => { return <ReadingView match={match}/> })
        }
      </div>
    )
  }

  return renderView()
}

export default Results;
