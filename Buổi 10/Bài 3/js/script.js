window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
		obj_form.addEventListener('submit',function(){
			var number1 =document.getElementById('number1').value;
			var number2 = document.getElementById('number2').value;
			var error ='';
			var result ='';
			var message =''
			if(number1==''|| number2==''){
				error ='Không được để trống';
			} else if(isNaN(number1)||isNaN(number2)){
				error = 'Chỉ được nhập số ';
			}
			if(error==''){
				number1 = parseInt(number1);
				number2 = parseInt(number2);
				result = number1+'x'+' + '+number2;
				var mes = (- number2) / number1;
				message = 'x = '+mes;
			}
			document.getElementById('error').innerHTML = error;
			document.getElementById('result').innerHTML = result;
			document.getElementById('message').innerHTML =message;
			event.preventDefault();
		})
})