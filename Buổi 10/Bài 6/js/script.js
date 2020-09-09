window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit', function(){
		var string1 = document.getElementById('string1').value;
		var string2 = document.getElementById('string2').value;
		var result ='';
		var error = '';
		if(string1 ==''|| string2==''){
			error = 'Không được để trống';
		}
		else{
		var ss = string1.includes(string2);
				if (ss==true) {
					result ='Chuỗi '+string2+' tồn tại trong chuỗi ban đầu<br/>'+string1;
				} else{
					result ='Chuỗi '+string2+' không tồn tại trong chuỗi ban đầu<br/>'+string1; 
				}
	    }
	    document.getElementById('error').innerHTML = error;
	    document.getElementById('result').innerHTML = result;
	    event.preventDefault();
	})
})