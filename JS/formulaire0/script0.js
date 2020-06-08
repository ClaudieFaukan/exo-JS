function test(){
	alert('ok');
	affiche();
}

function affiche(){
	//var nom=document.forms[0].nom.value;
	var nom=document.getElementById('nom').value;
	if (nom != ''){
		alert("bonjour, "+nom);
	}
}