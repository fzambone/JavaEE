/**
 * Validação de formulário
 * @author Fernando Zambone
 */
 
 function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Preencha o campo Nome!')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('Preencha o campo Fone!')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true) {
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}