window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit', function(){
		var number = document.getElementById('number').value;
		var error = '';
		var result = '';
		if(number ==''){
			error = 'Không được để trống';
		} else if(isNaN(number)){
			error = 'Chỉ được nhập số';
		}
		if (error =='') {
			number = parseInt(number);
			var check = 0;
			var i;
			if(number <2){
				result = 'Đây không phải là số nguyên tố';
			}
			for(i = 2; i <= Math.sqrt(number);i++){
				if(number % i == 0){					
					check ++;
				}
			}
			if (check == 0){
				result = number+' là số nguyên tố';
			} else{
				result = number+' không là số nguyên tố';
			}
		}
		document.getElementById('error').innerHTML = error;
		document.getElementById('result').innerHTML = result;
	    event.preventDefault();
	})
})