import React, { useContext } from 'react';
import './views.css';

const View1 = ({ result }) => {
  return (
    <div className="scape-row">
      <div className="scape-box result-kana">{result[1]}</div>
      <div className="scape-box result-kanji">{result[0]}</div>
      <div className="scape-box result-english">{result[2]}</div>
    </div>
  )
}

const View2 = ({ result }) => {
  return (
    <div className="scape-row-2">
      <div className="scape-box-2 result-kana-2">{result[1]}</div>
      <div className="scape-box-2 result-kanji-2">{result[0]}</div>
      <div className="scape-box-2 result-english-2">{result[2]}</div>
      <div className="scape-box-2 result-kana-2"></div>
    </div>
  )
}

const View3 = ({ result }) => {
  return (
    <div className="scape-row-3">
      <div className="scape-box-3 result-kana-3">{result[1]}</div>
      <div className="scape-box-3 result-english-3">{result[2]}</div>
      <div className="scape-box-3 result-kanji-3">{result[0]}</div>
      <div className="scape-box-3 result-kana-3"></div>
    </div>
  )
}

const View4 = ({ result }) => {
  return (
    <div className="scape-row-4">
      <div className="scape-box-4 result-kana-4">{result[1]}</div>
      <div className="scape-box-4 result-english-4">{result[2]}</div>
      <div className="scape-box-4 result-kana-4"></div>
      <div className="scape-box-4 result-kanji-4">{result[0]}</div>
    </div>
  )
}

export { View1, View2, View3, View4 }
