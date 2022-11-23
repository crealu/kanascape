import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import './scape.css';
import Results from './results';
import Criteria from './criteria';

const Scape = () => {
  const {state, dispatch} = useContext(KanascapeContext);

	return (
		<div className="scape">
      <div className="query">{state.query == '' ? '。。。' : state.query}</div>
      <Criteria />
      <Results />
		</div>
	)
}

export default Scape;
