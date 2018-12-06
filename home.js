$(document).ready(function(){


var $some = $('.content');
	
function run(interval, frames) {
    var int = 1;
    var count =12;
    
    function func() {
        $('.background').attr('id', "b" + int);

        // $('.content').css('background-image','NangSIte-'+ count+'.png')
        int++;
        count++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}
run(5000, 5); //milliseconds, frames;
	
	var $menu = $('.nav_word');

	$menu.on('click',function(e){
		$('.content').hide();
		$('.mao1').hide();
		$('.mao2').hide();
		var $target = $(e.target);

		var dataType = $target.data('type');
		
		$('.' + dataType).slideDown('normal');
	})

	var $mao = $('.text_logo');

	$mao.on('click',function(e){

		$('.mao1').slideDown('10000');
		$('.mao2').slideDown('10000');

	})

})


	// $(element).animate( { 'property': 'value' }, time );

	// $('.quote-img').animate({'left': '700px'}, 750);

	

