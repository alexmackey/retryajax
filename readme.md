retryAjax
================================
I wanted a little wrapper function to retry ajax requests in the event of transient failures (particularly likely for mobile sites). This is my first stab at a little wrapper over jQuery's ajax function. 


Options:

* retries: The number of times to retry requests (default is 3)
* backoff: Boolean option on whether to increase time between attempts (default false)
* backoffInterval: Starting interval between wait time for requests (default 1000),
* backOffFunc: Function to increase time between retries (default function multiples current backoffInterval value by 2 on each attempt)


Example usage:
================================

$.ajaxWithRetries(
	{
		url: "badUrl.html",  
		error: function(){
	 		console.log('original error handler func');
		} 
	},
	{
		retries: 3,
		backoff: true
	}
);

