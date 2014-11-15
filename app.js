(function(){
  var app = angular.module('bulletinapp', []);
  
  var login = app.controller('login', function(){
    this.bar = false;
    this.toggle = function(){
        this.bar = !(this.bar);
    };
  });
})();
