function validateJS(){
	var bValide=true;
	var nom=document.forms[0].nom.value;
	if (nom == ''){
		showError('errNom','erreur nom');
		bValide=false;
	}
	else{
		hideError('errNom');
		alert("bonjour, "+nom);
	}
	var pass=document.getElementById('pass').value;
	if (pass == ''){
		showError('errPass','erreur pass');
		bValide=false;
	}
	else{
		hideError('errPass');
	}
	return bValide;
}

function showError(id, mess){
	document.getElementsById(id).innerHTML=mess;
}
function hideError(id){
document.getElementsById(id).innerHTML='';
}
