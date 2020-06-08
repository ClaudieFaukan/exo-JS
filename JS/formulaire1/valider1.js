function validateJS(){
	var bValide=true;
	var nom=document.forms[0].nom.value;
	if (nom == ''){
		alert('le nom est obligatoire!');
		bValide=false;
	}
	else{
		alert("bonjour, "+nom);
	}
	var pass=document.getElementById('pass').value;
	if (pass == ''){
		alert('le password est obligatoire!');
		bValide=false;
	}
	return bValide;
}