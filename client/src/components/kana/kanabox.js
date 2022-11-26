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
    dispatch({ type: theType, payload: clickedKana });
  }

  return (
    <div className="kana-box" onClick={(e) => handleClick(e)}>
      {kana[state.alphabet]}
    </div>
  )
}

export default KanaBox;
