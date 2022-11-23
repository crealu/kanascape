import * as React from 'react';
import './kanascape.css';
import allKana from './all';

const Kanascape = () => {
	return (
		<div className="kanascape">
      {allKana.map((kana, idx) => {
        return (
          <div
            className="kana"
          >
            {kana[1]}
          </div>
        )
      })}
		</div>
	)
}

export default Kanascape;
