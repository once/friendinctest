
var request = require('request'),
	cheerio = require('cheerio'),
	url = require('url');

var startUrl = 'https://ru.wikipedia.org',
	
	host = url.parse(startUrl).host,
	allLinks = [],
	limit = 1000;

	processLink(startUrl);

	function processLink(targetUrl) {

		request(targetUrl, function (err, res, body) {
    	
	    		if (err) return;

				var $ = cheerio.load(body),
						links = $("a");

				links.each(function(index, elem) {
				
					var href = $(elem).attr('href');
					
					if (typeof href != 'undefined') {

						if (allLinks.length < limit) {
							
							href = url.resolve(startUrl, href);

							if (linkBelongsToUrl(href)) {
								
								allLinks.push(href);
								processLink(href);

							}
							
							
						}
						else {
							done();
						}
					} 

				});
	    
		});

	}

	function linkBelongsToUrl(link) {

		return (link.indexOf(host) > -1);

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


