window.addEventListener('load',function () {
	var obj_form = document.getElementById('form-sb');
	this.addEventListener('submit',function(){
		var use_name = document.getElementById('use-name').value;
		var password = document.getElementById('password').value;
		var re_password = document.getElementById('re-password');
		var repeat_password = re_password.value;
		var first_name = document.getElementById('first-name').value;
		var last_name = document.getElementById('last-name').value;
		var mail = document.getElementById('email').value;
		var phone = document.getElementById('phone').value;
		var error ='';
		if(password != repeat_password){
			error = 'Bạn nhập sai mật khẩu';
			document.getElementById('error').innerHTML = error;
			re_password.focus();
		}
		document.getElementById('result'). innerHTML = 'Tên đăng nhập: '+use_name
														+'<br/>Password: '+password
														+'<br/>Họ của bạn: '+first_name
														+'<br/>Tên của bạn: '+last_name
														+'<br/>Email: '+mail
														+'<br/>Số điện thoại: '+phone;
		event.preventDefault();
	})
})