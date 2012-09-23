/*
Author: Alex Mackey
Site: simpleisbest.co.uk
Description: First stab at wrapper for jQuery AJAX method to retry requests 
*/


(function($, undefined) {

	"option strict";

	var retryCounter=1,
	 	backoffInterval=100;

	$.ajaxWithRetries=function(options, retryConfig) {
	
		var 
		originalErrorFunc=options.error,
		config={
			retries: 3,
			backoff: false,
			backOffFunc: function(currentInterval){
				return currentInterval *2;
			}
		};
		
		$.extend(config, retryConfig);
		
		options.error=function(){

			if(retryCounter===config.retries){					
				
				if(typeof originalErrorFunc !== "undefined"){
					originalErrorFunc();
				}		
				
			}
			else{
								
				retryCounter++;
				
				if(config.exponentialBackoff){
					backoffInterval = retryCounter===0 ? backoffInterval : 	config.backOffFunc(backoffInterval);
				}
				
				setTimeout(function(){$.ajax(options)}, backoffInterval);
			}
				
		}

		return $.ajax(options);

	};
	

})(jQuery, undefined);