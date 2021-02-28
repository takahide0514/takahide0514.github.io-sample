// グローバル変数
var syncerTimeout = null ;

$(function(){

    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        /*direction: 'vertical',*/
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      
      });

      $('.alert').hide();
    var sendFlag =true;

    $('#submitBtn').click(function(){
        if(!$('#text').val())
        {
            $('#textSection .alert').show();
            sendFlag =false;
        }
        else
        {
            $('#textSection .alert').hide();
        }

        if(!$('#textarea').val())
        {
            $('#textareaSection .alert').show();
            sendFlag =false;
        }
        else
        {
            $('#textareaSection .alert').hide();
        }

        if($('select').val()=="none")
        {
            $('#selectSection .alert').show();
            sendFlag =false;
        }
        else
        {
            $('#selectSection .alert').hide();
        }

        var radioChk = $('input[name="radio"]:checked').length;

        if(radioChk==0)
        {
            $('#radioSection .alert').show();
            sendFlag =false;
        }
        else
        {
            $('#radioSection .alert').hide();
        }
        var checkboxChk = $('input[name="checkbox"]:checked').length;

        if(checkboxChk<=0)
        {
            $('#checkboxSection .alert').show();
            sendFlag =false;
        }
        else
        {
            $('#checkboxSection .alert').hide();
        }

        if(sendFlag ==false)
        {
            
            return false;
        }

    });

    // スクロールイベントの設定
	$( window ).scroll( function()
	{
		// 1秒ごとに処理
		if( syncerTimeout == null )
		{
			// セットタイムアウトを設定
			syncerTimeout = setTimeout( function(){

				// 対象のエレメント
				var element = $( '#page-top' ) ;

				// 現在、表示されているか？
				var visible = element.is( ':visible' ) ;

				// 最上部から現在位置までの距離を取得して、変数[now]に格納
				var now = $( window ).scrollTop() ;

				// 最下部から現在位置までの距離を計算して、変数[under]に格納
				var under = $( 'body' ).height() - ( now + $(window).height() ) ;

				// 最上部から現在位置までの距離(now)が1500以上かつ
				// 最下部から現在位置までの距離(under)が200px以上かつ…
				if( now > 1500 && 200 < under )
				{
					// 非表示状態だったら
					if( !visible )
					{
						// [#page-top]をゆっくりフェードインする
						element.fadeIn( 'slow' ) ;
					}
				}

				// 1500px以下かつ
				// 表示状態だったら
				else if( visible )
				{
					// [#page-top]をゆっくりフェードアウトする
					element.fadeOut( 'slow' ) ;
				}

				// フラグを削除
				syncerTimeout = null ;
			} , 1000 ) ;
		}
	} ) ;

	// クリックイベントを設定する
	$( '#move-page-top' ).click(
		function()
		{
			// スムーズにスクロールする
			$( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
		}
	) ;

    $(window).scroll(function(){
        if($(window).scrollTop()>620){
            $('header').addClass("scroll");
        }
        else{
            $('header').removeClass("scroll");
        }
    });
});
