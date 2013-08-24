onload = function() {
  
	var webview = document.querySelector('#browser_content');
	var urlinput = document.querySelector('#url');
	
	document.querySelector('#url-form').onsubmit = function(e) {
	  e.preventDefault();
	  var url = validateUrl(urlinput.value);
	  urlinput.value = url;
	  webview.src = url;
	}
}

var validateUrl = function(url) {
  var urlregex = new RegExp("http:\/\/");
      if (urlregex.test(url)) {
          return url;
      }
      return "http://" + url;
}

	

