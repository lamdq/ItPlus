window.addEventListener('load',function(){
		var obj_sum = document.getElementById('sum');
		obj_sum.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''|| number_b==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)||isNaN(number_b)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' && number_b!=''){
				number_a = parseInt(number_a);
				number_b = parseInt(number_b);
				var sum = number_a + number_b;
				result ="Tổng 2 số bạn vừa nhập là: "+sum;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_sub = document.getElementById('sub');
		obj_sub.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''|| number_b==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)||isNaN(number_b)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' && number_b!=''){
				number_a = parseInt(number_a);
				number_b = parseInt(number_b);
				var sub = number_a - number_b;
				result ="Hiệu 2 số bạn vừa nhập là: "+sub;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_multiple = document.getElementById('multiple');
		obj_multiple.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''|| number_b==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)||isNaN(number_b)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' && number_b!=''){
				number_a = parseInt(number_a);
				number_b = parseInt(number_b);
				var multiple = number_a * number_b;
				result ="Tích 2 số bạn vừa nhập là: "+multiple;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_divide = document.getElementById('divide');
		obj_divide.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''|| number_b==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)||isNaN(number_b)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' && number_b!=''){
				number_a = parseInt(number_a);
				number_b = parseInt(number_b);
				var divide = number_a / number_b;
				result ="Thương 2 số bạn vừa nhập là: "+divide;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_a = document.getElementById('a++');
		obj_a.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		// var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' ){
				number_a = parseInt(number_a);
				number_a++;
				result ="Giá trị a++ là: "+number_a;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_a = document.getElementById('++a');
		obj_a.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		// var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' ){
				number_a = parseInt(number_a);
				++number_a;
				result ="Giá trị ++a là: "+number_a;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_a = document.getElementById('a--');
		obj_a.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		// var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' ){
				number_a = parseInt(number_a);
				number_a--;
				result ="Giá trị a-- là: "+number_a;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_a = document.getElementById('--a');
		obj_a.addEventListener('click', function(){
		var number_a = document.getElementById('number1').value;
		// var number_b = document.getElementById('number2').value;
		var error ='';
		var result = '';
			if(number_a==''){
				error ="Không được để trống";
			} else if(isNaN(number_a)){
				error ='Mời bạn nhập số';
			}
			if(number_a!='' ){
				number_a = parseInt(number_a);
				--number_a;
				result ="Giá trị --a là: "+number_a;
			}
				document.getElementById('error').innerHTML = error;
				document.getElementById('result').innerHTML = result;				
				event.preventDefault();
		})
		var obj_reset = document.getElementById('reset');
		obj_reset.addEventListener('click',function(){
			// document.getElementById("form-sb").reset();
		})
		event.preventDefault();
	})