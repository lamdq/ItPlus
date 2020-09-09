window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit',function(){
		var number = document.getElementById('number').value;
		var error ='';
		var result ='';
		if (number=='') {
			error ='Không được để trống';
		} else if(isNaN(number)){
			error ='Phải nhập số';
		}
		if (error=='') {
			number =parseInt(number);
			var i;
			var ss =1;
			var n = 1;
			for(i=2;i<=number;i++){
				ss = ss*i;
				result1 = i;
				result = result +' x '+ result1;
			}
			document.getElementById('error').innerHTML=error;
			document.getElementById('result').innerHTML =number+'! = 1 '+result+' = '+ss;
			event.preventDefault();
		}
	})
})