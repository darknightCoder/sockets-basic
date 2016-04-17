/*var remoteMessage;
var socket=io();
socket.on('connect',function(){
	console.log('Connected')
});
socket.on('message',function(message){
	console.log(message.text);
	remoteMessage=message.text;
});	*/


//handles submmitting the new messages
var app=angular.module('myApp',[]);

app.controller('chatCtrl',function($scope,socket){
	 
	 $scope.myMessage=[]

   $scope.messageFreind=[
      'hii this is a group chat'
                        ];
                        $scope.randomDate = function() {
    
    
    return new Date();
  }
socket.on('connect',function(){
	console.log('Connected')
});
socket.on('message',function(message){
	console.log(message.text);
	$scope.messageFreind.push(message.text);
});	

$scope.addThis=function(){
	socket.emit('message',{
		text:$scope.text,
       
		
	});
	$scope.messageFreind.push($scope.text);

	$scope.text='';
}

});
app.factory('socket', function ($rootScope) {
  var socket = io.connect();
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
});
