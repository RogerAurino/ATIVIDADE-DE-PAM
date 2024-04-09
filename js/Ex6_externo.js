var botao = document.getElementById("botao");

var contador = 0;

// Adicionando um evento de clique ao botão
	botao.addEventListener("click", function() {
		contador++;
		alert("Número de cliques: " + contador);
	});
