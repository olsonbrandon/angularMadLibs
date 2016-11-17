(function(){
  angular.module('MadLibs')
  .factory('Words', words);

  function words(){
    var service = {
      fillWords: fillWords
    };
    return service;

    function fillWords(userWords){
      var randomNoun;
      var randomAdjective;
      var randomAdverb;
      var randomVerb;
      var finalWords = angular.copy(userWords);

      while(finalWords.noun.length < 4){
        randomNoun = defaultNouns[Math.floor((Math.random()*25)+0)];
        finalWords.noun.push(randomNoun);
      }
      while(finalWords.adjective.length < 4){
        randomAdjective = defaultAdjectives[Math.floor((Math.random()*25)+0)];
        finalWords.adjective.push(randomAdjective);
      }
      while(finalWords.adverb.length < 4){
        randomAdverb = defaultAdverbs[Math.floor((Math.random()*25)+0)];
        finalWords.adverb.push(randomAdverb);
      }
      while(finalWords.verb.length < 4){
        randomVerb = defaultVerbs[Math.floor((Math.random()*25)+0)];
        finalWords.verb.push(randomVerb);
      }
      return finalWords;
    }
  }

  var defaultNouns = [
    'time',
    'person',
    'year',
    'way',
    'day',
    'thing',
    'man',
    'world',
    'life',
    'hand',
    'part',
    'child',
    'eye',
    'woman',
    'place',
    'work',
    'week',
    'case',
    'point',
    'government',
    'company',
    'number',
    'group',
    'problem',
    'fact'
  ];

  var defaultAdjectives = [
    'good',
    'new',
    'first',
    'last',
    'long',
    'great',
    'little',
    'own',
    'other',
    'old',
    'right',
    'big',
    'high',
    'different',
    'small',
    'large',
    'next',
    'early',
    'young',
    'important',
    'few',
    'public',
    'bad',
    'same',
    'able'
  ];

  var defaultAdverbs = [
    'up',
    'so',
    'out',
    'just',
    'now',
    'how',
    'then',
    'more',
    'also',
    'here',
    'well',
    'only',
    'very',
    'even',
    'back',
    'there',
    'down',
    'still',
    'in',
    'as',
    'too',
    'when',
    'never',
    'really',
    'most'
    ];

  var defaultVerbs = [
    'be',
    'have',
    'do',
    'say',
    'get',
    'make',
    'go',
    'know',
    'take',
    'see',
    'come',
    'think',
    'look',
    'want',
    'give',
    'use',
    'find',
    'tell',
    'ask',
    'work',
    'seem',
    'feel',
    'try',
    'leave',
    'call'
  ];

})();
