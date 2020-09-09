$(document).ready(function () {
	$('#form-sb').submit(function(){
		var lenght = $('#length').val();
		var width = $('#width').val();
		var error = '';
		var result ='';
		if(lenght==''|| width==""){
			error = 'Không được để trống';
		} 
		else if(isNaN(lenght) || isNaN(width)){
			error = 'Phải nhập số';
		} 
		if(error==''){
			lenght = parseInt(lenght);
			width = parseInt(width);
			console.log( lenght);
			console.log( width);
		 	var	sum = (lenght + width) * 2;
		 	var	mul = lenght * width ;
		 	result = 'Tổng: '+ sum +'<br/> Tích: '+  mul;
		}
		$('#error').html(error);
		$('#result').html(result);
			event.preventDefault();
	})
})