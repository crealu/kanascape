import { createContext } from 'react';
import { kanaGroup } from '../public/data';
import { reverseString } from './common/general';

export const KanascapeContext = createContext();

export const initialState = {
  query: '',
  kana: kanaGroup,
  alphabet: 1,
  kanji: JSON.parse(localStorage.getItem('kanji')),
  view: 0,
  matches: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "add kana":
      return { ...state, query: state.query + action.payload }
    case "delete kana":
      return {
        ...state,
        query: reverseString(reverseString(state.query).replace(action.payload, ''))
      }
    case "change alphabet":
      return { ...state, alphabet: action.payload }
    case "update kanji":
      return { ...state, kanji: action.payload }
    case "toggle view":
      return { ...state, view: action.payload }
    case "update matches":
      return { ...state, matches: action.payload }
    default:
      return state;
  }
}
