window.addEventListener('load',function () {
	var obj_form = document.getElementById('form-sb');
	this.addEventListener('submit',function () {
		var usename = document.getElementById('usename').value;
		var password = document.getElementById('password').value;
		var email = document.getElementById('email').value;
		var name = document.getElementById('name').value;
		var phone = document.getElementById('phone').value;
		document.getElementById('result').innerHTML = 
		'Use name: '+usename+'<br/>Password: '+password+'<br/>E-mail: '+email+'<br/>Name: '+name+'<br/>Phone: '+phone;
		event.preventDefault();
	})
})