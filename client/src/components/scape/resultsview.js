import React, { useContext } from 'react';
import { KanascapeContext } from '../../context';
import './scape.css';
import { View1, View2, View3, View4 } from './views';

const ResultsView = ({ result }) => {
  const {state, dispatch} = useContext(KanascapeContext);

  const views = [
    {render: (res) => { return <View1 result={res} />}},
    {render: (res) => { return <View2 result={res} />}},
    {render: (res) => { return <View3 result={res} />}},
    {render: (res) => { return <View4 result={res} />}},
  ];

  const renderView = () => { return views[state.view].render(result) };

  return renderView()
}

export default ResultsView;
