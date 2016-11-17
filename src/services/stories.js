(function(){
  angular.module('MadLibs')
  .factory('Stories', stories);

  function stories(){
    var service = {
      pirate: storyOne,
      fdc: storyTwo,
      wtac: storyThree
    };
    return service;
  }

  function storyOne(words){
    return 'Ye can always pretend to be a bloodthirsty ' + words.noun[0] + ' threatening everyone by waving yer ' + words.adjective[0] + ' sword in the air, but until ye learn to ' + words.verb[0] + ' like a pirate, ye’ll never be ' + words.adverb[0] + ' accepted as an authentic ' + words.noun[1] + '. So here’s what ye do: Cleverly work into yer daily conversations ' + words.adjective[1] + ' pirate phrases such as, “Ahoy there, ' + words.noun[2] + '!” and “Shiver me ' + words.noun[3] + '!”. Once ye have the lingo down, yer ready to ' + words.verb[1] + ' treasures, and brave the ' + words.adjective[2] + ' sea!';
  }
  function storyTwo(words){
    return 'On the first day of attending World Tech Academy, I felt so ' + words.adverb[0] + '. I put on my favorite new shirt- a shirt with a ' + words.adjective[0] + ' ' + words.noun[0] + '. My mom made me my favorite breakfast, ' + words.noun[1] + ' and eggs.  My brother told me my teacher was really a ' + words.noun[2] + '. He had him last year and said he lets kids ' + words.verb[0] + ' in class. When I finally arrived to class I sat next to Jared who is ' + words.adjective[1] + '! He told me his favorite hobby was ' + words.verb[1] + '. After all of my ' + words.adjective[2] + ' worrying, I finally thought everything was going to be ' + words.adjective[3] + '.';
  }
  function storyThree(words){
    return 'Here at World Tech Academy our cafeteria has really ' + words.adjective[0] + ' food. Just thinking about it makes my stomach ' + words.verb[0] + '. The spaghetti is ' + words.adjective[1] + ' and tastes like ' + words.noun[0] + '. One day, I swear one of my meatballs started to ' + words.verb[1] + '! The turkey tacos are totally ' + words.adjective[2] + ' and look kind of like old ' + words.noun[1] + ', My friend Sam actually likes the meatloaf, even though it\’s ' + words.adjective[3] + '. I call it “mystery meatloaf” and think that its really made of ' + words.noun[2] + '.';
  }

})();
