window.addEventListener('load',function(){
	var obj_form = document.getElementById('fomr-sb');
	this.addEventListener('submit',function () {
		var name = document.getElementById('use-name').value;
		var pass = document.getElementById('password').value;
		var email = document.getElementById('mail').value;
		var date = document.getElementById('date').value;
		var option = document.forms[0].selected.value;
		document.getElementById('result').innerHTML =
		'Tên tài khoản: ' + name
		+'<br/>Mật khẩu: ' + pass
		+'<br/>E-mail: ' + email
		+'<br/>Ngày sinh: '+ date
		+'<br/>Nghề nghiệp: '+ option;
		event.preventDefault();
	})
})