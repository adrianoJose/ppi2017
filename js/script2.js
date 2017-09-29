window.onload = function () {
	
	var ori = document.querySelector("#origem");
	
	var usa = document.querySelector("#usabilidade");
	
	var func = document.querySelector("#funcionalidade");
	

	ori.onclick = function(){
		var spanOri = document.querySelector("#spanOrigem"); 
		if(spanOri.style.display == "none"){
			ori.innerHTML = "esconder";
			spanOri.style.display = "block";
		}else{
			ori.innerHTML = "mostrar";
			spanOri.style.display = "none";
		}
	}
	usa.onclick = function(){
		var spanUsa = document.querySelector("#spanUsabilidade"); 
		if(spanUsa.style.display == "none"){
			usa.innerHTML = "esconder";
			spanUsa.style.display = "block";
		}else{
			usa.innerHTML = "mostrar";
			spanUsa.style.display = "none";
		}
	}
	func.onclick = function(){
		var spanFunc = document.querySelector("#spanFuncionalidade"); 
		
		if(spanFunc.style.display == "none"){
			func.innerHTML = "esconder";
			spanFunc.style.display = "block";
		}else{
			func.innerHTML = "mostrar";
			spanFunc.style.display = "none";
		}
	}
}