window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit', function(){
		var number1 = document.getElementById('number1').value;
		var number2 = document.getElementById('number2').value;
		var number3 = document.getElementById('number3').value;
		var error ='';
		var result_max ='';
		var result_min ='';
		if (number1==''||number2==''||number3=='') {
			error ='Không được để trống';
		} else if(isNaN(number1)||isNaN(number2)||isNaN(number3)){
			error ='Chỉ được nhập số';
		}
		if (error=='') {
			number1 =parseInt(number1);
			number2 =parseInt(number2);
			number3 =parseInt(number3);
			if (number1==number2 && number1==number3) {
				result='Ba số trên bằng nhau';
			}
			var max = min = number1;
			if(number2>max){
				max = number2;
			}
			if (number3 > max) {
				max = number3;
			}
			result_max ='Số lớn nhất là: '+max;
			if (number2<min) {
				min = number2;
			}
			if (number3<min) {
				min = number3;
			}
			result_min ='Số bé nhất là:'+min;
		}
			document.getElementById('error').innerHTML = error;
			document.getElementById('result').innerHTML = result_max +'<br/>'+ result_min;
			event.preventDefault();
	})
})