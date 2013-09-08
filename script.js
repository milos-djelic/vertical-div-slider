var counter = 0;
var numberOfChildren;
var interval = 3000;
var delay = 900; // offset for gray circles 
var height;

var initDivs = function(){
	numberOfChildren = $('#box').children().length;
	height = $("#box").height();
	rotateDiv();
	setInterval(rotateDiv, interval);	
	
	};

var rotateDiv = function(){
		$('#buttons').children().css('background', 'none');
		$('#buttons').children().eq(counter).css('background', 'darkgray');

		$('#box').children('div').css('display','none').css('top', '-' + height + 'px');
		$('#box').children().eq(counter).css('display', 'block');
		$('#box').children().eq(counter).animate({top: '+=' + height});
		$('#box').children().eq(counter).delay(interval - delay).animate({top: '+=' + height});

		counter++;
		counter%=numberOfChildren;
	}

	