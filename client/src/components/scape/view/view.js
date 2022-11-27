import React, { useContext } from 'react';
import { KanascapeContext } from '../../../context';
import './view.css';

const View = ({ match }) => {
  const {state, dispatch} = useContext(KanascapeContext);

  const arrangement = [
    [1, 0, 2],
    [1, 0, 2, 3],
    [1, 2, 0, 3],
    [1, 0, 3, 2]
  ];

  const classes = ['kanji', 'kana', 'english', 'empty'];

  const getLayoutClass = () => {
    return `scape-row layout-${state.view == 0 ? '1' : '2'}`;
  }

  const getBoxClass = (box) => {
    return `scape-box result-${classes[box]}-${state.view + 1}`;
  }

  return (
    <div className={getLayoutClass()}>
      {arrangement[state.view].map(box => {
        return <div className={getBoxClass(box)}>{match[box]}</div>
      })}
    </div>
  )
}

export default View;
