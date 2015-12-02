// RoDI (Robot Didactico Inalambrico)

var robot_ip = '192.168.4.1';
var robot_port = '1234';

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
              method, "/"
              args.join('/')];
    return buffer.join("");
  };

  this.move = function(left_wheel_speed, right_wheel_speed) {

  };

  this.blink = function(){};

  this.move_left = function(){};

  this.move_rigth = function(){};

  this.move_forward = function(){};

  this.move_backward = function(){};

  this.move_stop = function(){};

  this.sing = function(note, duration){};

  this.see = function(){};

  this.sense = function(){};

  this.pixel = function(red, green, blue){};

  this.light = function(){};

  this.led = function(state){};

}

