// RoDI (Robot Didactico Inalambrico)

var robot_ip = '192.168.4.1';
var robot_port = '1234';

var Request = function() {};
Request.get = function(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", url, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}


var RoDI = function() {
  this.blink_method = 1;
  this.sense_method = 2;
  this.move_method = 3;
  this.sing_method = 4;
  this.see_method = 5;
  this.pixel_method = 6;
  this.loght_method = 7;
  this.led_method = 8;  
  this.ip = robot_ip;
  this.port = robot_port;

  this.build_url = function(method, args) {
    buffer = ["http://", 
              this.ip, ":", 
              this.port, "/",
              method, "/",
              args.join('/')];
    return buffer.join("");
  };

  this.blink = function(milliseconds){
      var url = this.build_url(
                this.blink_method,
                [milliseconds]
              );
      Request.get(url);      
  };

  this.move = function(left_wheel_speed, right_wheel_speed) {
      var url = this.build_url(
                this.move_method,
                [left_wheel_speed, right_wheel_speed]
              );
      Request.get(url);

  };

  this.move_left = function(){
    this.move(-100,100);
  };

  this.move_rigth = function(){
    this.move(100, -100);
  };

  this.move_forward = function(){
    this.move(100,100);
  };

  this.move_backward = function(){
    this.move(-100, -100);
  };

  this.move_stop = function(){
    this.move(0,0);
  };

  this.step_forward = function(){
    this.move_forward();
    this.move_stop();
  }

  this.step_backward = function(){
    this.move_backward();
    this.move_stop();
  }  

  this.sing = function(note, duration){
      var url = this.build_url(
                this.sing_method,
                [note, duration]
              );
      Request.get(url);    
  };

  this.see = function(){
      var url = this.build_url(
                this.see_method,
                []
              );
      Request.get(url);      
  };

  this.sense = function(){
      var url = this.build_url(
                this.sese_method,
                []
              );
      Request.get(url);     
  };

  this.pixel = function(red, green, blue){
      var url = this.build_url(
                this.pixel_method,
                [red, green, blue]
              );
      Request.get(url);     
  };

  this.light = function(){
      var url = this.build_url(
                this.light_method,
                []
              );
      Request.get(url);     
  };

  this.led = function(state){
      var url = this.build_url(
                this.state_method,
                [state]
              );
      Request.get(url);     
  };

}

