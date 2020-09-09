window.addEventListener('load',function () {
	// body...
	var obj_form = document.getElementById('form-sb');
	this.addEventListener('submit',function(){
		var number = document.getElementById('number').value;
		var error = '';
		var result = '';
		if(number==''){
			error = 'Mời bạn nhập số ヾ(≧ ▽ ≦)ゝ';
		} else if(isNaN(number)){
			error ='Chỉ nhập được số thôi ヾ(≧▽≦*)o';
		} if(number !='' && number== parseInt(number)){
			number = parseInt(number);
			if(1 <= number && number <= 10){
				result =number+' nằm trong khoảng từ 1 -> 10';
			} else if(20 <= number && number <= 100){
				result =number+' nằm trong khoảng từ 20 -> 100';
			} else {
				result = number+' không nằm trong khoảng từ 1 -> 10 và 20 -> 100';
			}
		}
		document.getElementById('error').innerHTML= error;
		document.getElementById('result').innerHTML=result;
		event.preventDefault();
	})
})