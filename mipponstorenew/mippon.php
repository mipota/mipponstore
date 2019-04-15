<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<html lang=“ja”>

<head>


                <title>みっぽんストア</title>
        <link rel="stylesheet" type="text/css" href="./style4.css">
        <link rel="stylesheet" type="text/css" href="./reset.css">
        <script type="text/javascript" src="style.js"></script>
        <meta charset=“UFT-8”>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

<script>
$(function(){
    var setElm = $('.loopSlider'),
    slideSpeed = 4000;
 
    setElm.each(function(){
        var self = $(this),
        selfWidth = self.innerWidth(),
        findUl = self.find('ul'),
        findLi = findUl.find('li'),
        listWidth = findLi.outerWidth(),
        listCount = findLi.length,
        loopWidth = listWidth * listCount;
 
        findUl.wrapAll('<div class="loopSliderWrap" />');
        var selfWrap = self.find('.loopSliderWrap');
 
        if(loopWidth > selfWidth){
            findUl.css({width:loopWidth}).clone().appendTo(selfWrap);
 
            selfWrap.css({width:loopWidth*2});
 
            function loopMove(){
                selfWrap.animate({left:'-' + (loopWidth) + 'px'},slideSpeed*listCount,'linear',function(){
                    selfWrap.css({left:'0'});
                    loopMove();
                });
            };
            loopMove();
 
        
        }
    });
});

$(function () {
  $('div.line').each(function () {
    var $win = $(window),
        $winH = $win.height(),
        $connect = $(this),
        position = $connect.offset().top,
        current = 0,
        scroll;
    $win.on('load scroll', function () {
      scroll = $win.scrollTop();
      current = (1 - (position - scroll) / $winH) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (scroll > position - $winH) {
        $connect.css({width: current + '%'});
      }
    });
  });
});
</script>

</head>

<body>
    <div class="wholl">
     <h1>
     <span>mippon</span>
     <span>store</span>
     </h1>

     
     <nav>
            <ul class="menu">
              <li class="menu__none"><a href="mipponstore.html">Home</a></li>
              <li class="menu__none"><a href="3D_all.html">3D</a></li>
              <li class="menu__none"><a href="2D_all.html">2D</a></li>
            
  
              <li class="menu__single">
                <a href="#" class="init-bottom">Work</a>
                <ul class="menu__second-level">
                  <li><a href="#">picture</a></li>
                  <li><a href="#">game</a></li>
                  <li><a href="#">animation</a></li>
                </ul>
              </li>


  <li class="menu__single">
                <a href="#" class="init-bottom">Contact</a>
                <ul class="menu__second-level">
                  <li><a href="#">mail</a></li>
                  <li><a href="contribution.html">contribution</a></li>
                </ul>
              </li>
  
  
            </ul>
          </nav>

        <div class="loopSlider">
        <ul>
        <li><a href="#"><img src="2Dassets/bar1.png"width="600" hright="840" alt=""></a></li>
        <li><a href="#"><img src="2Dassets/bar2.png"width="600" hright="840" alt=""></a></li>
        <li><a href="#"><img src="2Dassets/bar3.png"width="600" hright="840" alt=""></a></li>
        <li><a href="#"><img src="2Dassets/bar4.png"width="600" hright="840" alt=""></a></li>
        </ul>
         </div>

         <div class="contents1 no1">
             <div class="line"></div>
             <h2>About</h2>
         <p>ようこそみっぽんストアへ！<br>
            みっぽんストアにある作品は全て私か、<br>
            作品を投稿してくださったみなさんからのオリジナルです。<br>
            3D、2D作品全てがダウンロード可能です。<br>
            自由にお使いください！<br>
            また、みっぽんストアではいつでもみなさんの作品をお待ちしてます。<br>
            作品をストアにおいてくださる方は<br>
            [Contact]の"contribution"からよろしくお願いいたします!<br>
            
         </p>
        </div>
         
         <div class="contents2 no2">
                <div class="line"></div>
                <h2>How?</h2>
                <h3>3D</h3>
                <p>
                 zip形式はunityに取り込むことができます。<br>
                 mixamoなどでアニメーションをつけて動かすこともできます。<br>
                 (mixamoはこちら)<a href="https://www.mixamo.com/#/">https://www.mixamo.com/#/</a><br>
                 vox形式でダウンロードしたものはMagicavoxelでのみ開くことができます。<br>
                 Magicavoxelでvoxデータを読み込むことで色や模様や形をアレンジすることができます。<br>
                 Magicavoxelで3Dデータを撮影して2Dにすることもできます。<br>
                 詳しい使い方は調べてみてね！<br>
                 (Magicavoxelはこちら)<a href="https://ephtracy.github.io/">https://ephtracy.github.io/</a><br>
                </p>
           </div>

           <div class="contents3 no3">
                <div class="line"></div>
                <h2>How?</h2>
                <h3>2D</h3>
                <p>
                  png形式でダウンロードすることができます。

                </p>  
           </div>
           
    </div>  

</body>