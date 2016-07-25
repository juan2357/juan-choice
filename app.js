(function () {
  var app = angular.module('choice', [ ]);

  app.controller('choiceController', function () {
    this.person = gem;
  });

  var gem = {name: "Juan Perez", intro: "blah blah"}
})();
