window.addEventListener('load',function(){
		var obj_mouseenter = document.getElementById('dropdown');
		obj_mouseenter.addEventListener('mouseenter',function(){
			document.getElementById('dropdown-content').style = ('display: block');
		})
		var obj_mouseleave = document.getElementById('dropdown');
		obj_mouseleave.addEventListener('mouseleave',function(){
			document.getElementById('dropdown-content').style = ('display: none');
		})
		var obj_mouseenter = document.getElementById('dropdown1');
		obj_mouseenter.addEventListener('mouseenter',function(){
			document.getElementById('dropdown-content1').style = ('display: block');
		})
		var obj_mouseleave = document.getElementById('dropdown1');
		obj_mouseleave.addEventListener('mouseleave',function(){
			document.getElementById('dropdown-content1').style = ('display: none');
		})
		var obj_mouseenter = document.getElementById('dropdown2');
		obj_mouseenter.addEventListener('mouseenter',function(){
			document.getElementById('dropdown-content2').style = ('display: block');
		})
		var obj_mouseleave = document.getElementById('dropdown2');
		obj_mouseleave.addEventListener('mouseleave',function(){
			document.getElementById('dropdown-content2').style = ('display: none');
		})
		var obj_mouseenter = document.getElementById('dropdown3');
		obj_mouseenter.addEventListener('mouseenter',function(){
			document.getElementById('dropdown-content3').style = ('display: block');
		})
		var obj_mouseleave = document.getElementById('dropdown3');
		obj_mouseleave.addEventListener('mouseleave',function(){
			document.getElementById('dropdown-content3').style = ('display: none');
		})
		var obj_mouseenter = document.getElementById('dropdown4');
		obj_mouseenter.addEventListener('mouseenter',function(){
			document.getElementById('dropdown-content4').style = ('display: block');
		})
		var obj_mouseleave = document.getElementById('dropdown4');
		obj_mouseleave.addEventListener('mouseleave',function(){
			document.getElementById('dropdown-content4').style = ('display: none');
		})
		event.preventDefault();
	})