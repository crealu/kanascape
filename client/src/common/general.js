export const reverseString = (str) => {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

export const compareResults = (a, b) => {
  let ans;
  if (a.length < b.length && a[0] > b[0]) {
    ans = 1;
  } else if (a[0] > b[0]) {
    ans = 1;
  } else if (a.length > b.length) {
    ans = 1;
  } else {
    ans = -1
  }
  return ans;
}

export const KanjiObject = (ka, ku, on, km, ex) => {
  this.kanji = ka,
  this.kun = ku,
  this.on = on,
  this.meaning = km,
  this.examples = ex
}
