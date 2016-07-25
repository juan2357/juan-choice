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

  var gems = [
    {
      name: "Juan Perez",
      image: "profile.png",
      intro: "bajkfldsajfkdl;sa",
      email: "juanfperez@me.com",
      phone: "954-394-6357",
      skills: [
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
