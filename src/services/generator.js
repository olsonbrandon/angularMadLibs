(function(){
  angular.module('MadLibs')
  .factory('Generator', generator);

  function generator(Stories, Words){
    var service = {
      generate: generate
    };
    return service;

    function generate(storyName, userWords){
      var finalWords = Words.fillWords(userWords);
      return Stories[storyName](finalWords);
    }
  }

})();
