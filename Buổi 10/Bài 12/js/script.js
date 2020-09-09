window.addEventListener('load',function () {
	// body...
	var obj_form =document.getElementById('form-sb');
	obj_form.addEventListener('submit',function(){
		var number = document.getElementById('number').value;
		var error = '';
		var result ;
		var result2 ='' ;
		var ss="";
		var i;
		var j;
		if(number==''){
			error ='Không được để trống';
		} else if(isNaN(number)){
			error = 'Phải nhập số';
		}
		if(error==''){
			number = parseInt(number);
			for(i=0; i<number; i++){
				result ='';
				for(j=0 ; j<=i; j++){
					 
					 result += '*';
				}
				 result2 = '<br/>';
				 ss += result + result2 ;
			}
		}
		document.getElementById('error').innerHTML = error;
		document.getElementById('result').innerHTML = ss ;
		event.preventDefault();
	})
})