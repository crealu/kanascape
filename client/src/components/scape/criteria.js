import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import './scape.css';

const Criteria = () => {
  const {state, dispatch} = useContext(KanascapeContext);

  const toggleView = () => {
    const newView = state.view == 3 ? 0 : state.view += 1;
    dispatch({
      type: 'toggle view',
      payload: newView
    });
  }

	return (
		<div className="criteria">
      <div className="citeria-btn" onClick={() => toggleView()}>View {state.view + 1}</div>
		</div>
	)
}

export default Criteria;
