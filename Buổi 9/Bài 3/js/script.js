
window.addEventListener('load', function(){
	var obj_form = document.getElementById('form-sb');
	this.addEventListener('submit', function () {
		var full_name = document.getElementById('full-name').value;
		var email = document.getElementById('email').value;
		var use_name = document.getElementById('use-name').value;
		var password = document.getElementById('password').value;
				var gender = document.forms[0];
  				var txt = "";
  				var i;
  				for (i = 0; i < gender.length; i++) {
    				if (gender[i].checked) {
     	 				txt = txt + gender[i].value;
    				}
  				}			
		document.getElementById('result').innerHTML = 'Tên đầy đủ của bạn là: '+full_name
													 +'<br/>Tài khoản E-mail: '+email
													 +'<br/>Tên tài khoản: '+use_name
													 +'<br/>Mật khẩu: '+password
													 +'<br/>Giới tính: '+txt;
		event.preventDefault();
	})
})