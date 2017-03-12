(function() {

	var arr = ['aaa','bbb','xxx','ddd','eee','fff','ggg'],
		counter = 0;
	
	var $output = document.getElementById("content");
		

	(function put() {
		
		if (counter > 0) $output.textContent += ',';
				
		$output.textContent += arr[counter++];
		
		if (counter < arr.length) setTimeout(put, 1000);
		
	})();
	
	
})();