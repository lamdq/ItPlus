window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit', function(){
		var number_a =document.getElementById('number_a').value;
		var number_b =document.getElementById('number_b').value;
		var number_c =document.getElementById('number_c').value;
		var error ='';
		var result ='';
		var message ='';
		if(number_a==''||number_b==''||number_c==''){
			error ='Không được để trống';
		} else if(isNaN(number_a)||isNaN(number_b)||isNaN(number_c)){
			error ='Dữ liệu nhập vào phải là số';
		}
		if (error =='') {
			if(number_a== 0){
				number_b = parseInt(number_b);
				number_c = parseInt(number_c);
				var devide = (- number_c) / number_b ;
				message ='Phương trình có dạng:<br/>'+number_b+'x + '+number_c+' = 0';
				result = 'x = '+devide;
			} else if(number_a != 0){
				number_a = parseInt(number_a);
				number_b = parseInt(number_b);
				number_c = parseInt(number_c);
				var delta = number_b*number_b - 4*number_a*number_c;
				message = 'Phương trình có dạng:<br/>'+number_a+'x² + '+number_b+'x + '+number_c+' = 0';
				if (delta < 0) {
					result ='Phương trình vô nghiệm';
				} else if (delta == 0) {
					var devide = (-number_b)/(2*number_a);
					result = 'Phương trình có nghiệm kép x1 = x2 = '+devide;
				} if(delta > 0){
					var devide1 = ((-number_b) + sqrt(delta)) / (2*number_a);
					var devide2 = ((-number_b) - sqrt(delta)) / (2*number_a);
					result = 'Phương trình có 2 nghiệm phân biệt x1 = '+devide1+' x2 = '+devide2;
				}
			}
		}
		document.getElementById('error').innerHTML = error;
		document.getElementById('message').innerHTML = message;
		document.getElementById('result').innerHTML = result;
	    event.preventDefault();
	})
})