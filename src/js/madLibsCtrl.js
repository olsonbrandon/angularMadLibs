(function(){
  angular.module('MadLibs')
  .controller('MadLibController', madLibsCtrl);

  function madLibsCtrl (Generator){
    var vm = this;
    vm.generate = generate;

    vm.userWords = {
      noun: [],
      adjective: [],
      verb: [],
      adverb: []
    };

    function generate(){
      vm.storyText = Generator.generate(vm.story, vm.userWords);
    }
  }
})();
