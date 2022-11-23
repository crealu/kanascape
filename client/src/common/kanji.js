export const KanjiObject = (ka, ku, on, km, ex) => {
  this.kanji = ka,
  this.kun = ku,
  this.on = on,
  this.meaning = km,
  this.examples = ex
}

export const reverseString = (str) => {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
