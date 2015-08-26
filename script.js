var counter = 0;
var numberOfChildren;
var interval = 3000;
var delay = 900; // offset for gray circles 
var height;

var initDivs = function() {
	var box = $("#box");
	numberOfChildren = box.children().length;
	height = box.height();
	createButtons();
	rotateDiv();
	setInterval(rotateDiv, interval);	
};

var rotateDiv = function() {
		$('#buttons').children().css('background', 'none')
			     .eq(counter).css('background', 'darkgray');
			    
		var box = $('#box');
		var currentChild = box.children().eq(counter);
		
		box.children('div').css('display','none').css('top', '-' + height + 'px');
		currentChild.css('display', 'block')
			    .animate({top: '+=' + height})
			    .delay(interval - delay).animate({top: '+=' + height});

		counter += 1;
		counter %= numberOfChildren;
};

var createButtons = function() {
	for (var i = 0; i < numberOfChildren; i += 1) {
	
		var buttons = $("#buttons");	
		buttons.append($('<div/>')).html();
		buttons.html(buttons.html() + ' ');
	}
}

	
