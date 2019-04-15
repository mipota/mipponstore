$(function() {
    $(window).scroll(function(){
        var y = $(this).scrollTop(); // スクロール値を取得（=Y座標=縦位置）
        $('#bg1').css('background-position', '0 ' + parseInt( -y / 50 ) + 'px'); // 1/50のスピード
        $('#bg2').css('background-position', '0 ' + parseInt( -y / 10 ) + 'px'); // 1/10のスピード
        $('#bg3').css('background-position', '0 ' + parseInt( -y / 2 ) + 'px'); // 1/2のスピード
    });
});