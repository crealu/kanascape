import React, { useContext } from 'react';
import { KanascapeContext } from '../../../context';
import './criteria.css';

const Filter = ({ text }) => {
  const {state, dispatch} = useContext(KanascapeContext);

  const handleChange = (event) => {
    dispatch({ type: 'add filter', payload: text });
  }

  return (
    <div className="filter">
      <input
        className="filter-pair filter-radio"
        type="radio"
        name="filter"
        onChange={(e) => handleChange(e)}
        defaultUnchecked
      />
      <p className="filter-pair filter-text">{text}</p>
    </div>
  )
}

const Criteria = () => {
  const {state, dispatch} = useContext(KanascapeContext);
  const filters = ['examples', 'reading'];

  const toggleView = () => {
    const newView = state.view == 3 ? 0 : state.view += 1;
    dispatch({ type: 'toggle view', payload: newView });
  }

	return (
		<div className="criteria">
      {filters.map(filter => { return <Filter text={filter}/> })}
      <div className="toggle-explicit">
        <input className="explicit-checkbox" type="checkbox"/>
        <p className="explicit-text">explicit</p>
      </div>
      <div className="toggle-view-btn" onClick={() => toggleView()}>
        <div className="center-circle"></div>
      </div>
    </div>
	)
}

export default Criteria;
