var obj_click = document.getElementById('submit');
	obj_click.addEventListener('click',
		function Hienthi() {
			var name = document.getElementById('name').value;
			var mail = document.getElementById('mail').value;
			var contact = document.getElementById('contact').value;
			var infor = 'Name: '+ name + '<br/> Mail: '+ mail + '<br/> Contact No: '+ contact;
			document.getElementById('comment').innerHTML = infor;
			event.preventDefault();
}
)
