import { createContext } from 'react';
import { kanaGroup } from '../public/data';
import { reverseString } from './common/general';

export const KanascapeContext = createContext();

export const initialState = {
  query: '',
  kana: kanaGroup,
  alphabet: 1,
  kanji: JSON.parse(localStorage.getItem('kanji'))
};

export function reducer(state, action) {
  switch (action.type) {
    case "add kana":
      return {
        ...state,
        query: state.query + action.payload
      }
    case "delete kana":
      return {
        ...state,
        query: reverseString(reverseString(state.query).replace(action.payload, ''))
        // query: state.query.split('').reverse().join().replace(action.payload, '').split('').reverse().join()
      }
    case "change alphabet":
      return {
        ...state,
        alphabet: action.payload
      }
    case "update kanji":
      return {
        ...state,
        kanji: action.payload
      }
    default:
      return state;
  }
}
