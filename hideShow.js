var module = angular.module("moreDirectivesModule", ["myHelloModule"]);
module.controller("MoreDirectivesCtrl1",MoreDirectivesCtrl1);
module.controller("MoreDirectivesCtrl2",MoreDirectivesCtrl2);
module.controller("MoreDirectivesCtrl3",MoreDirectivesCtrl3);
module.controller("MoreDirectivesCtrl4",MoreDirectivesCtrl4);
module.controller("MoreDirectivesCtrl5",MoreDirectivesCtrl5);
module.controller("MoreDirectivesCtrl6",MoreDirectivesCtrl6);
module.controller("MoreDirectivesCtrl7",MoreDirectivesCtrl7);
function MoreDirectivesCtrl1(){
}
function MoreDirectivesCtrl2(){
}
function MoreDirectivesCtrl3(){
}
function MoreDirectivesCtrl4(){
    this.mylist = [1,2,3,4];
}
function MoreDirectivesCtrl5(){
    this.mylist = [1,2,3,4];
}
function MoreDirectivesCtrl6(){
    this.mylist = [
        {'name' :"Ajay", 'age' : 20},
        {'name' :"Vijay", 'age' : 23},
        {'name' :"Sanjay", 'age' : 50},
    ];
}
function MoreDirectivesCtrl7(){
    this.helloMessage= "I am from main module";
}