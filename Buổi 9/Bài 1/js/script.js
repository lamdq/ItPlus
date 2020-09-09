window.addEventListener('load',function () {
	var obj_form = document.getElementById('form-sub');
	this.addEventListener('submit', function(){
		var fname = document.getElementById('f-name').value;
		var lname = document.getElementById('l-name').value;
		var mail = document.getElementById('mail').value;
		var phone = document.getElementById('phone').value;
		document.getElementById('result').innerHTML = 
		'First name: '+fname+ '<br/>Last name: '+lname+'<br/>Email: '+mail+'<br/>Telephone: '+phone;
		event.preventDefault();
	})
})