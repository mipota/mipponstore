/* =========================================================*/
// jquery.pagination.js / ver.2.0

// Copyright (c) 2015 CoolWebWindow
// This code is released under the MIT License
// https://osdn.jp/projects/opensource/wiki/licenses%2FMIT_license

// Date: 2016-06-20
// Author: CoolWebWindow
// Mail: info@coolwebwindow.com
// Web: http://www.coolwebwindow.com

// Used jquery.js
// http://jquery.com/
/* =========================================================*/

$(function($){
	$.fn.pagination = function(config) {
	// オプション
	var o = $.extend({
			element      : 'div',
			prevText     : 'prev',
			nextText     : 'next',
			firstText    : 'first',
			lastText     : 'last',
			ellipsisText : '…',
			viewNum      : 6,
			pagerNum     : 3,
			ellipsis     : true,
			linkInvalid  : false,
			goTop        : true,
			firstLastNav : true,
			prevNextNav  : true
		}, config);

		// セレクタ
		var $this = $(this);
		var $element = $this.find(o.element);
		var $pager = $this.find('.pager');
		if(o.ellipsis){
			var $ellipsisFirst= $('<span class="ellipsis"/>').text(o.ellipsisText);
			var $ellipsisLast= $('<span class="ellipsis"/>').text(o.ellipsisText);
		}

		// 値取得
		var tatalItemNum =$element.length;
		var tatalpageNum = Math.ceil(tatalItemNum /o.viewNum);
		var ellipsisFlag = false;

		// 変数設定
		var currentIndex = 0;

		// 省略記号フラグ判定
		if(tatalpageNum > o.pagerNum) { ellipsisFlag = true;}

		// ページカウンター
		$this.find('.nownum').text('1');
		$this.find('.totalnum').text(tatalpageNum);

		// ページャーの生成
		if(tatalpageNum == 1){return false;}
		for (var i=0; i < tatalpageNum; i++) {
			$('<span/>').text(i + 1).appendTo($pager);
		};
		if(o.prevNextNav){
			$('<span class="prev"/>').text(o.prevText).prependTo($pager);
			$('<span class="next"/>').text(o.nextText).appendTo($pager);
		}
		if(o.firstLastNav){
			$('<span class="first"/>').text(o.firstText).prependTo($pager);
			$('<span class="last"/>').text(o.lastText).appendTo($pager);
		}
		var $pagerInner = $pager.find('span').not('.first, .last, .prev, .next');

		// コンテンツの初期表示
		$element.not('.pager, .pageNum').hide();
		for (var i=0; i < o.viewNum; i++) {
			$($element[i]).show();
		};

		// ページャーの初期表示
		$pagerInner.hide();
		for (var i=0; i < o.pagerNum; i++) {
			$($pagerInner[i]).show();
		};
		$($pagerInner[0]).addClass('current');
		if (o.linkInvalid) {
			$('.prev').addClass('invalid');
			$('.first').addClass('invalid');
		}
		if(o.ellipsis) {
			if(ellipsisFlag){
				if(tatalpageNum  - o.pagerNum > 1) {
					$($pagerInner[tatalpageNum - 1]).before(function() {
					  return $ellipsisLast;
					});
				}
				$($pagerInner[tatalpageNum - 1]).show();
			}
		}

		// 最初のボタンをクリック
		$this.find('.first').on('click', function(){
			var current = 0;
			if(currentIndex == 0){
				if (o.linkInvalid) {
					return false;
				}
			}
			change(current);
		});

		// 最後のボタンをクリック
		$this.find('.last').on('click', function(){
			var current = tatalpageNum - 1;
			if(currentIndex == $pagerInner.length - 1){
				if (o.linkInvalid) {
					return false;
				}
			}
			change(current);
		});

		// 前のボタンをクリック
		$this.find('.prev').on('click', function(){
			var current = currentIndex - 1;
			if(currentIndex == 0){
				if (o.linkInvalid) {
					return false;
				} else {
					current = currentIndex;
				}
			}
			change(current);
		});

		// 次のボタンをクリック
		$this.find('.next').on('click', function(){
			var current = currentIndex + 1;
			if(currentIndex == $pagerInner.length - 1){
				if (o.linkInvalid) {
					return false;
				} else {
					current = currentIndex;
				}
			}
			change(current);
		});

		// 番号をクリック
		$pagerInner.each(function (current) {
			$(this).on('click', function(){
				if($(this).hasClass('current')){
					if (o.linkInvalid) {
						return false;
					}
				}
				change(current);
			});
		});

		// 切り替え実行
		var change = function (current) {
			// コンテンツの表示
			$element.not('.pager, .pageNum').hide();
			for(var i = (current * o.viewNum) ; i < ((current + 1) * o.viewNum) ; i++){
				$($element[i]).show();
			}
			// ページャーの表示
			$pagerInner.hide();
			if(o.ellipsis) {
				if(ellipsisFlag){
					$ellipsisFirst.remove();
					$ellipsisLast.remove();
				}
			}
			var num = current - 1;
			if(num < 0) {
				num = 0;
			}
			if(num > (tatalpageNum - o.pagerNum)){
				num = tatalpageNum - o.pagerNum;
			}
			for(var i = num ; i < (num + o.pagerNum) ; i++){
					$($pagerInner[i]).show();
			};
			// 省略記号の表示
			if(o.ellipsis) {
				if(ellipsisFlag){
					// 前の省略記号
					$($pagerInner[0]).show();
					if(num > 1){
							$($pagerInner[0]).after(function() {
							  return $ellipsisFirst;
							});
					}
					// 後ろの省略記号
					if(num < (tatalpageNum - o.pagerNum - 1)) {
						$($pagerInner[tatalpageNum - 1]).before(function() {
						  return $ellipsisLast;
						});
					}
					$($pagerInner[tatalpageNum - 1]).show();
				}
			}
			// 現在位置設定
			currentIndex = current;
			// デザイン
			$pagerInner.removeClass('current');
			$($pagerInner[current]).addClass('current');
			if (o.linkInvalid) {
				if(current == 0 ) {
					$this.find('.prev').addClass('invalid');
					$this.find('.first').addClass('invalid');
				} else {
					$this.find('.prev').removeClass('invalid');
					$this.find('.first').removeClass('invalid');
				}
				if(current == tatalpageNum - 1 ) {
					$this.find('.next').addClass('invalid');
					$this.find('.last').addClass('invalid');
				} else {
					$this.find('.next').removeClass('invalid');
					$this.find('.last').removeClass('invalid');
				}
			}
			// ページトップへの戻り
			if(o.goTop){
				$('html,body').scrollTop(0);
			}
			// ページカウンター
			$this.find('.nownum').text(currentIndex + 1);
		}
	}
});
