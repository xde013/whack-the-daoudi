var space = " ";
var speed = "500";
var pos = 0;
var msg = "Whack the Daoudi #NoFusion";
function roll()  {
document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("roll()", speed);
};
roll();
jQuery(document).ready(function(){


  var a = 5000;
  var score = 0;
  function gameOver(){
    jQuery('.head').stop().animate({'top': '100%'});
    jQuery('.game-over').html('GAME OVER');
  };

  jQuery('.head').animate({'top':'0%'}, 5000, function(){
    gameOver();
  });
  jQuery('.head').hover(function(){
    if ( a == 500) {
      a = 5000;
    } else {
      a = a - 250;
    };
    console.log(a);
    jQuery(this).css({'background-image': 'url(./img/happy1.png)'});
    jQuery(this).stop().animate({'top':'100%'}, 800, function(){
      score += 1;
      jQuery('.hits').html(score);
      jQuery(this).animate({'top':'0%'}, a, function(){
        gameOver();
      });
      jQuery(this).css({'background-image': 'url(./img/sad1.png)'});

    });
  });
})
