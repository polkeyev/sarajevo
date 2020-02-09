function showMenu() {
	var menu = document.getElementById('menu');
	menu.classList.toggle('open')
}

document.addEvantListner('DOMContentLoaded', function(){

});	

window.onscroll = function() {
	var top = document.getElementById('top')
	if(window.pageYOffset > 65){
		top.classList.add('show')
	}else{
		top.classList.remove('show')
	}
}

