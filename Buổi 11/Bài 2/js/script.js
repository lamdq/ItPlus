
$(document).ready(function () {
	$('#form-sb').submit(function(){
		var number = $('#length').val();
		var error ='';
		var result ='';
		if (number=='') {
			error='Không được để trống';
		} else if (isNaN(number)) {
			error ='Bạn chỉ được nhập số';
		}
		if (error=='') {
			number = parseInt(number);
			var total = number * 4;
			var mul = number * number;
			result ='Chu vi: '+total+'m'+'<br/>Diện tích: '+mul+'m<sup>2</sup>';
		}
		$('#error').html(error);
		$('#result').html(result);
		event.preventDefault();
	})
})