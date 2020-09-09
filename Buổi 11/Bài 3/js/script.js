$(document).ready(function () {
	$('#form-sb').submit(function(){
		var number = $('#length').val();
		var error ='';
		var result ='';
		var pi = 3.14;
		if (number=='') {
			error='Không được để trống';
		} else if (isNaN(number)) {
			error='Phải nhập số';
		}
		if (error=='') {
			number = parseFloat(number);
			var total = number * 2 * pi;
			var mul = number * number * pi;
			result ='Chu vi: '+total+'m'+'<br/>Diện tích: '+mul+'m<sup>2</sup>';
		}
		$('#error').html(error);
		$('#result').html(result);
		event.preventDefault();
	})
})