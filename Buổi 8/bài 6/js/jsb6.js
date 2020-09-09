		window.addEventListener('load',function () {
		var obj_input = document.getElementById('inputname');
		obj_input.addEventListener('keyup',function myFuntion() {
		var text = document.getElementById('inputname').value;
		var string = 'Chuỗi bạn đang nhập là: '+ text ;
		alert(string);
		})
	})
	