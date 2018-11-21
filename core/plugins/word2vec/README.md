# Word2Vec

All credits belong to [Planeshifter](https://github.com/Planeshifter).

> Node.js interface to the Google word2vec tool

## What is it?

This is a Node.js interface to the *word2vec* tool developed at Google Research for "efficient implementation of the continuous bag-of-words and skip-gram architectures for computing vector representations of words", which can be used in a variety of NLP tasks. For further information about the *word2vec* project, consult [https://code.google.com/p/word2vec/](https://code.google.com/p/word2vec/).

## Usage

Currently, `node-word2vec` is ONLY supported for Unix operating systems.

1) Install packages

```console
foo@bar:~$ npm install word2vec
```

2) Use collector to collect dictionary. Default dictionary will be saved in `word2vec/fixtures/wordspool.txt`

```javascript
const Word2Vec = require('../../core/plugins/word2vec')

Word2Vec.collect(tokens, () => {
  // Do something after collect...
});
```

3) To calculate vectors from wordspool dictionary, using:

```javascript
Word2Vec.train();
```

4) Using vectors model to NLP:

```javascript
Word2Vec.loadModel((err, model) => {
  console.log( model );

	var wordVecs = model.getVectors( [ 'Hamlet', 'daughter' ] );
	console.log( model.getNearestWord( wordVecs[0].values, 1 ) );

	var similar = model.mostSimilar( 'dead', 20 );
	console.log( similar );

	var analogy = model.analogy( 'mother',[ 'Hamlet', 'father' ], 10 );
	console.log( analogy );

	var similarity = model.similarity( 'father', 'mother' );
	console.log( similarity );
});
```