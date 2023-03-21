const kanaPrimary = [
  ['a', 'あ', 'ア'],
  ['i', 'い', 'イ'],
  ['u', 'う', 'ウ'],
  ['e', 'え', 'エ'],
  ['o', 'お', 'オ'],
  ['ka', 'か', 'カ'],
  ['ki', 'き', 'キ'],
  ['ku', 'く', 'ク'],
  ['ke', 'け', 'ケ'],
  ['ko', 'こ', 'コ'],
  ['sa', 'さ', 'サ'],
  ['shi', 'し', 'シ'],
  ['se', 'せ', 'セ'],
  ['su', 'す', 'ス'],
  ['so', 'そ', 'ソ'],
  ['ta', 'た', 'タ'],
  ['chi', 'ち', 'チ'],
  ['tsu', 'つ', 'ツ'],
  ['te', 'て', 'テ'],
  ['to', 'と', 'ト'],
  ['na', 'な', 'ナ'],
  ['ni', 'に', 'ニ'],
  ['nu', 'ぬ', 'ヌ'],
  ['ne', 'ね', 'ネ'],
  ['no', 'の', 'ノ'],
  ['ha', 'は', 'ハ'],
  ['hi', 'ひ', 'ヒ'],
  ['fu', 'ふ', 'フ'],
  ['he', 'へ', 'ヘ'],
  ['ho', 'ほ', 'ホ'],
  ['ma', 'ま', 'マ'],
  ['mi', 'み', 'ミ'],
  ['mu', 'む', 'ム'],
  ['me', 'め', 'メ'],
  ['mo', 'も', 'モ'],
  ['ya', 'や', 'ヤ'],
  ['', '', ''],
  ['yu', 'ゆ', 'ユ'],
  ['', '', ''],
  ['yo', 'よ', 'ヨ'],
  ['ra', 'ら', 'ラ'],
  ['ri', 'リ', 'リ'],
  ['ru', 'る', 'ル'],
  ['re', 'れ', 'レ'],
  ['ro', 'ろ', 'ロ'],
  ['wa', 'わ', 'ワ'],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['wo', 'を', 'ヲ'],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['n', 'ん', 'ン']
];

let kanaGroups = [];
let groups = [];
kanaPrimary.forEach((group, idx) => {
  groups.push(group);
  if ((idx + 1) % 5 == 0) {
    kanaGroups.push(groups);
    groups = [];
  }
});

function insertKana() {
	let kana = document.getElementsByClassName('kana')[0];
	for (let i = 0; i < kanaGroups.length; i++) {
		let kanaRow = document.createElement('div');
		kanaRow.classList.add('kana-row');
		for (let j = 0; j < kanaGroups[i].length; j++) {
			let kanaBox = document.createElement('div');
			kanaBox.classList.add('kana-box');
			kanaBox.innerHTML = kanaGroups[i][j][1];
			kanaBox.addEventListener('click', updateQuery);
			kanaRow.appendChild(kanaBox);
		}
		kana.appendChild(kanaRow);
	}
}

let estate = {
	query: '',
  prevQuery: '',
  alphabet: 1,
  kanji: [] || JSON.parse(localStorage.getItem('kanji')),
  view: 0,
  matches: [],
  filter: 'reading'
}

// let allKanji = [];
// async function fetchKanji() {  
//   await fetch('https://kanji-data.herokuapp.com/n3kanji')
//     .then(res => { return res.json() })
//     .then(data => { 
//       estate.kanji.push(data.kanji['n3'])
//       localStorage.setItem('kanji', JSON.stringify(estate.kanji))
//     })
//     .catch(err => { console.log(err) })
// }
// fetchKanji();

// if (i == 5) {
//   console.log(allKanji);
//   localStorage.setItem('kanji', JSON.stringify({all: allKanji}));
// }

function reverseString(str) {
	return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

function updateQuery(event) {
	let clickedKana = event.target.textContent;
  let queryEnd = estate.query != '' ? estate.query[estate.query.length - 1] : '';
	let action = `${queryEnd == clickedKana ? 'delete' : 'add'}`;
	if (action == 'add') {
		estate.query = estate.query + clickedKana;
	} else if (action == 'delete') {
		if (estate.query.length == 1) {
			estate.query = '';
		} else {
    	estate.query = reverseString(reverseString(estate.query).replace(clickedKana, ''));
		}
	}

	const query = document.getElementsByClassName('query')[0];
	query.value = estate.query;

	updateResults(estate.query);
}

function updateResults(event) {
	console.log('query changed');
	// console.log(estate.query);
	// console.log(event.target.value);
	let matches = [];
	const query = estate.query;

  for (let i = 0; i < estate.kanji.length; i++) {
    let on = estate.kanji[i].on;
    let kun = estate.kanji[i].kun;
    if (on.includes(query) || kun.includes(query)) {
      matches.push(estate.kanji[i]);
    }
  }

  estate.matches = matches;
  renderView(matches);
}

function renderView(matches) {
	let resultsView = document.getElementsByClassName('results-view')[0];
	if (matches.length > 0) {
		for (let m = 0; m < matches.length; m++) {
			resultsView.innerHTML += `
			  <div class="scape-row layout-3">
		      <div class="scape-box kanji reading-view">${matches[m].kanji}</div>
		      <div class="scape-box reading">
		        <div class="scape-box on-yomi">${matches[m].on}</div>
		        <div class="scape-box kun-yomi">${matches[m].kun}</div>
		      </div>
		      <div class="scape-box meaning">${matches[m].meaning}</div>
		    </div>
			`
		}
	} else {
		doc.clear(resultsView);
		resultsView.innerHTMl = '';
	}

}

function assignListeners() {
	let queryInput = document.getElementsByClassName('query')[0];
	queryInput.addEventListener('change', updateResults);
}

function onloads() {
	insertKana();
	assignListeners();
}

window.onload = onloads();