	window.addEventListener('load',function () {
		var obj_change = document.getElementById('selected');
		obj_change.addEventListener('change',function () {
			string = document.forms[0].selected.value;
			alert('Quốc gia bạn vừa nhập là: '+ string);
		})
	})
// function hienThi() {
//   selection = document.forms[0].selected.value;
// 			alert('Quốc gia bạn vừa nhập là: '+ selection);
// }