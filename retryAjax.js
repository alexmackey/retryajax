
(function($) {

	$.extend( {

		retryAjax: function(arguments, retryAttempts)
	    {
	    	console.log('calling');

	    	var _ajax = $.ajax;
	    	var retryCount=0;

	    	for (i=0; i<retryAttempts; i++){

	    		console.log('attempt ' + i);

	    		var ret= _ajax.apply(this, arguments);	

	    		debugger;
	    	}
	    	
	    	return ret;
	    }

	});

	

})(jQuery);