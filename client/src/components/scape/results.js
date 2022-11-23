import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import { KanjiObject, compareResults } from '../../common/general';
import './scape.css';

const Results = () => {
  const {state, dispatch} = useContext(KanascapeContext);

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

    return (
      <div className="results">
        {matches.map(match => {
          return (
            <div className="scape-row">
              <div className="scape-box result-kana">{match[1][1]}</div>
              <div className="scape-box result-kanji">{match[1][0]}</div>
              <div className="scape-box result-english">{match[1][2]}</div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      {state.query != '' ? getResults() : ''}
    </div>
  )
}

export default Results;
