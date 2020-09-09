window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	this.addEventListener('submit', function(){
		var title = document.getElementById('title').value;
		var area = document.getElementById('area').value;
		var author_name = document.getElementById('author-name').value;
		var author_remarks = document.getElementById('author-remarks').value;
		var author_name_2 = document.getElementById('author-name-2').value;
		var author_remarks_2 = document.getElementById('author-remarks-2').value;
		document.getElementById('result').innerHTML = 'Title: '+title+
													  '<br/>Description: '+area+
													  '<br/>Author name: '+author_name+
													  '<br/>Author remarks: '+author_remarks+
													  '<br/>Author name: '+author_name_2+
													  '<br/>Author remarks: '+author_remarks_2;
	    event.preventDefault();
	})
})