(function() {
  var app = angular.module('choice', []);

  app.controller('ChoiceController', function() {
    this.person = gems;
  });

  app.controller('TabController', function(){
  this.tab = 1;

  this.setTab = function(newValue){
    this.tab = newValue;
  };

  this.isSet = function(tabName){
    return this.tab === tabName;
    };
  });

  app.controller('SkillsController', function () {
    this.current = 0;

    this.setCurrent = function (current) {
      this.current = current || 0;
    };
  });

  var gems = [
    {
      name: "Juan Perez",
      image: "profile.png",
      intro: "Here is a basic Angular Application that I think meets some of the criteria you are looking for. This is something I whipped up on a fly after reading documentation for less than a couple of hours. There is still a lot of work to be done, but this gives you an idea of how much I can learn and how fast!",
      email: "juanfperez@me.com",
      phone: "954-394-6357",
      skills: [
        "Overall Code Killer!",
        "Full-Stack Web Development",
        "Responsive Web Design",
        "Ruby",
        "Ruby on Rails",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "Sinatra",
        "Bootstrap",
        "Materialize",
        "Angular.js"
      ]
    }
  ];
})();
