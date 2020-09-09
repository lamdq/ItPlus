window.addEventListener('load',function(){
	var obj_form = document.getElementById('form-sb');
	obj_form.addEventListener('submit',function(){
		var name = document.getElementById('name').value;
		var mail = document.getElementById('mail').value;
		var check = "@";
		var check1 ='.com';
		var error ='';
		var error1 ='';
		var error2 = '';
		var error3 = '';
		var error4 ='';
		var result ='';
		if (mail=='') {
			error1 = 'Không được để trống';
			document.getElementById('mail').focus();
		if (name=='') {
			error = 'Không được để trống';
			document.getElementById('name').focus();
		}
		
		} else if (mail !=''){
			ckecked = mail.includes(check);
			if(ckecked==true){
				error2='';
			}
			else{
				error2="Bạn thiếu '@'";
			}
			ckecked1 = mail.includes(check1);
			if(ckecked1==true){
				error3="";
			}
			else{
				error3="Bạn thiếu'.'";
			}
		}
			var selectop = document.forms[0].selectop.value;
			if (selectop=='null') {
				error4 ='Bạn phải chọn Country';
				document.getElementById('selectop').focus();
				document.getElementById('error2').innerHTML = error4;
				event.preventDefault();
				return 0;
			}
			
				
		document.getElementById('error1').innerHTML = error1 + error2 + error3;
		document.getElementById('error').innerHTML = error;
		document.getElementById('result').innerHTML = 
			'Tên vừa nhập: '+name+
			'<br/>Mail của bạn: '+mail+
			'<br/>Country: '+selectop;
			window.open('mailto:'+mail+'hiiiiii');
		event.preventDefault();
	})
})