import React, { useContext, useState, useCallback } from 'react';
import { KanascapeContext } from '../../../context';
import './view.css';

const ReadingView = ({ match }) => {
  const {state, dispatch} = useContext(KanascapeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (event) => {
    setIsExpanded(!isExpanded);
  }

  const renderExamples = useCallback((match) => {
    return match.examples
      .filter(example => { return example[1].includes(state.query) })
      .map(filtered => { return <ExampleView match={filtered} i={0}/> })
  }, [state.filter]);

  return (
    <div className="scape-row layout-3" onClick={(e) => handleClick(e)}>
      <div className="scape-box kanji reading-view">{match.kanji[0]}</div>
      <div className="scape-box reading">
        <div className="scape-box on-yomi">{match.kanji[1]}</div>
        <div className="scape-box kun-yomi">{match.kanji[2]}</div>
      </div>
      <div className="scape-box meaning">{match.kanji[3]}</div>
      <div className="examples-inner">
        {isExpanded ? renderExamples(match) : ''}
      </div>
    </div>
  )
}

const ExampleView = ({ match, i }) => {
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

  const renderExample = useCallback((match, box, i) => {
    return state.filter == 'examples' ? match[box] : match[box];
  }, [state.filter]);

  return (
    <div className={getLayoutClass()}>
      {arrangement[state.view].map(box => {
        return <div className={getBoxClass(box)}>{renderExample(match, box, i)}</div>
      })}
    </div>
  )
}

export { ExampleView, ReadingView };
