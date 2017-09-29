<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/arquivos/scripts/vendor/bootstrap.js"></script>

<script>

	var session = Number($('.session')[0].innerHTML);
    if(session > 0) {
    	$('.department-nav').removeClass('hidden');
    }

    if(session > 1) {
    	$('.user-nav').removeClass('hidden');
    }
    
	$('#logout').click(function(e) {

		var delete_cookie = function(name) {
		    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		};

		delete_cookie('helptiuser');
		delete_cookie('helptitoken');
	});
</script>

