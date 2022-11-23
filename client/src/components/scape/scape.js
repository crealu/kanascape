import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import { KanjiObject } from '../../common/kanji';
import './scape.css';

const Scape = () => {
  const {state, dispatch} = useContext(KanascapeContext);

  const compareResults = (a, b) => {
    let ans;
    if (a[1][1].length < b[1][1].length && a[0] > b[0]) {
      ans = 1;
    } else if (a[0] > b[0]) {
      ans = 1;
    } else if (a[1][1].length > b[1][1].length) {
      ans = 1;
    } else {
      ans = -1
    }
    return ans;
  }

  const getResults = () => {
    let matches = [];
    state.kanji.n3.forEach(kanji => {
      kanji.examples.forEach(ex => {
        if (ex[1].includes(state.query)) {
          console.log(ex[1].indexOf(state.query[0]))
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
		<div className="scape">
      <div className="query">{state.query == '' ? '。。。' : state.query}</div>
      {state.query != '' ? getResults() : ''}
		</div>
	)
}

export default Scape;
