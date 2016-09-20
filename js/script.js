  var space = " ";
  var speed = "500";
  var pos = 0;
  var msg = "Whack the Daoudi #NoFusion #contreLaFusion #EnsaFamily ";

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
    var result = 0;
    var over = false;
    $('.score').hide();
    $('.game-over').hide();
    $('.retry').hide();
    $('.result').hide();
    $('.target').hide();

    function gameOver(){
      over = true;
      jQuery('.head').animate({'top': '100%'}, 50).stop().hide();
      $('.target').hide();
      jQuery('.game-over').slideDown();
      $('.retry').show();
      $('.result').show();
      $('.game-title').fadeIn('slow');
      $('.score').fadeOut();
      $('.contact').show();

    };

    function init() {
      $('.target').fadeIn('slow');
      over = false;
    jQuery('.head').show().animate({'top':'11%'}, 5000, function(){
      gameOver();
    });

      jQuery('.head').hover(function(){

        if ( a == 500) {
          a = 5000;

        } else {
          a = a - 250;
        };

        jQuery(this).css({'background-image': 'url(./img/happy1.png)'});
        jQuery(this).stop().animate({'top':'100%'}, 500, function(){
          if ( over == false ) {
            score ++;
            jQuery('.hits').html(score);
            jQuery(this).animate({'top':'11%'}, a, function(){
              gameOver();
            });
            jQuery(this).css({'background-image': 'url(./img/sad1.png)'});
          }
        });
      });
    }
    $('.start').click(function(){
      $('.score').fadeIn('slow');
      $('.start').fadeOut('slow');
      $('.game-title').fadeOut(1800);
      $('.intro').fadeOut(1500);
      $('.contact').fadeOut();
      init();
    });
    $('.retry').click(function(){
      score = 0;
      a = 5000;
      jQuery('.hits').html(score);

      $('.score').fadeIn('slow');
      $('.retry').fadeOut('slow');
      $('.game-title').fadeOut('slow');
      $('.game-over').fadeOut('slow');
      $('.result').hide();
      $('.contact').fadeOut();
      init();
    });






})
