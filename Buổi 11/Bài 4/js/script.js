$(document).ready(function(){
	$('#form-sb').submit(function(){
		var number = $('#number').val();
		var error ='';
		var result ='';
		var write= '';
		var i,j;
		var x =0;
		if (number=='') {
			error = 'Không được để trống';
		} else if (isNaN(number)) {
			error ='Phải nhập số';
		}
		if (error=='') {
			number = parseInt(number);
			for(i = 2 ; i<=number ; i++){
				for( j = 2; j<=Math.sqrt(i);j++){
					
					if (i % j == 0) {
						x++;
					}
				}
				if (x==0) {
						e = i;
					}
					write = write + ',' +;
			}
			result = 'Các số nguyên tố từ 1 đến '+number+' là: 1 , 2 , '+ write;
		}
		$('#error').html(error);
		$('#result').html(result);
		event.preventDefault();
	})
})