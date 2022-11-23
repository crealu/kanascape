import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import './scape.css';
import Results from './results';

const Scape = () => {
  const {state, dispatch} = useContext(KanascapeContext);

	return (
		<div className="scape">
      <div className="query">{state.query == '' ? '。。。' : state.query}</div>
      <Results />
		</div>
	)
}

export default Scape;
