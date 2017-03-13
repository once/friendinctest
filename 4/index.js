
var request = require('request'),
	cheerio = require('cheerio'),
	url = require('url');

// https://gist.github.com/lukekarrys/4102152


//var targetUrl = 'https://sale-russia.com/testing/t1.html',
var startUrl = 'https://ru.wikipedia.org',
	allLinks = [],
	limit = 20;

	processLink(startUrl);



	function processLink(targetUrl) {

		request(targetUrl, function (err, res, body) {
    	
	    	if (err) {
	    		console.log("Error : " + err);
	    		return;
	    	}

				var $ = cheerio.load(body),
						links = $("a");

				links.each(function(index, elem) {
				
					var href = $(elem).attr('href');
					
					if (typeof href != 'undefined') {

						if (allLinks.length < limit) {
							
							href = url.resolve(targetUrl, href);
							allLinks.push(href);

							processLink(href);
						}
						else {
							done();
						}
					} 

				});
				
			
	    	
	    
		});


	}
	function printLinks(){ 
		
		for (var i=0;i < allLinks.length; i++) {
			
			console.log(allLinks[i]);

		}
		
	}

	function done() {

		printLinks();
		process.exit();
	}


