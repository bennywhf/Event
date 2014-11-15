(function(){
  var app = angular.module('bulletinapp', []);
  
  var tabs =app.controller('tabs',function(){
	this.tab=1;
	
	this.setTab = function(t){
		this.tab=t;
	};
	
	this.isSelected = function(tab){
		tab===this.tab;
	};
  });
  var login = app.controller('login', function(){
    this.bar = false;
    this.toggle = function(){
        this.bar = !(this.bar);
    };
  });
})();
