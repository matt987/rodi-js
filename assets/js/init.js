//Test del robot

var robot = new RoDI();

robot.move(100, -100);

$("#step-left").on('click', function(){
  robot.step_left()
});

$("#move-backward").on('click', function(){
  robot.move_backward()
});

$("#step-backward").on('click', function(){
  robot.step_backward()
});

$("#move-stop").on('click', function(){
  robot.move_stop()
});

$("#step-forward").on('click', function(){
  robot.step_forward()
});

$("#move-forward").on('click', function(){
  robot.move_forward()
});

$("#step-rigth").on('click', function(){
  robot.step_rigth()
});
