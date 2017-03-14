(function() {

	var myApp = new Framework7(),
		$$ = Dom7,
		fsSelector = 'html';
		mainView = myApp.addView('.view-main');

	
	myApp.onPageInit('index plugins', function (page) {

		
		resetFontSize();
	
	  
	});

	myApp.onPageInit('main2 plugins2', function (page) {

		var viewWidth = $$(window).width();
		setFontSize(viewWidth);
	
	  
	});


	function setFontSize(viewWidth) {
	  
	 
	  if (viewWidth > 800) { $$(fsSelector).addClass('wide') }
	  else if (viewWidth > 500) { $$(fsSelector).addClass('standard') }
	  else { $$(fsSelector).addClass('small') }

	}
	
	function resetFontSize() {
	  
		  $$(fsSelector).removeClass('wide').removeClass('standard').removeClass('small');

	}


	window.$$ = $$;

})();
