import React, { useContext, useState } from 'react';
import { KanascapeContext } from '../../context';
import './kana.css';
import KanaBox from './kanabox';

const Kana = () => {
  const {state, dispatch} = useContext(KanascapeContext);

	return (
		<div className="kana">
      {state.kana.map((kana, idx) => {
        return (
          <div className="kana-row">
            {kana.map((k) => {
              return (
                <KanaBox kana={k} />
              )
            })}
          </div>
        )
      })}
		</div>
	)
}

export default Kana;
