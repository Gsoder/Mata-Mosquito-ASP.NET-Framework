/*function PararWorker() {
	w.terminate();
	w = undefined;
}

$("#iniciar").click(function () {
	var w;
	if (typeof (Worker) !== "undefined") {
		if (typeof (w) == "undefined") {
			w = new Worker("/Scripts/worker.js");
		}

		/*w.postMessage([40, 2]);

		w.addEventListener("message", contador => {

			console.log(contador.data)

		})


	} else {
		console.log("Desculpe esse navegador não suporta aquivos worker")
	}
})*/



window.onload = function () {

	/*$.ajax({
		url: 'request',
		type: 'GET',
		success: function (data) {
			console.log(data)
		},
		error: function (xhr, textStatus, errorThrown) {
			console.log("Erro")
		}
	});*/


	tempo = 0

	switch (dificuldade) {
		case "normal":
		var temporizadorElemento = document.getElementById("cronometro");

		
		var totalSegundos = 0;
		var segundos = 20;

		function atualizarTemporizador() {
			temporizadorElemento.innerHTML = segundos;
			segundos--;
			console.log(segundos)

			// Verifica se o temporizador chegou ao fim
			if (segundos == totalSegundos) {
				clearInterval(intervalo); // Para o temporizador
				temporizadorElemento.innerHTML = "Temporizador concluído!";
			}}
			var intervalo = setInterval(atualizarTemporizador, 1000);
		
			break;
		case "dificil":
			var temporizadorElemento = document.getElementById("cronometro");


			var totalSegundos = 0;
			var segundos = 15;

			function atualizarTemporizador() {
				temporizadorElemento.innerHTML = segundos;
				segundos--;
				console.log(segundos)

				// Verifica se o temporizador chegou ao fim
				if (segundos == totalSegundos) {
					clearInterval(intervalo); // Para o temporizador
					temporizadorElemento.innerHTML = "Temporizador concluído!";
				}
			}
			var intervalo = setInterval(atualizarTemporizador, 1000);

			break;
		case "boww":
			var temporizadorElemento = document.getElementById("cronometro");


			var totalSegundos = 0;
			var segundos = 10;

			function atualizarTemporizador() {
				temporizadorElemento.innerHTML = segundos;
				segundos--;
				console.log(segundos)

				// Verifica se o temporizador chegou ao fim
				if (segundos == totalSegundos) {
					clearInterval(intervalo); 
					temporizadorElemento.innerHTML = "Temporizador concluído!";
					const myModal = document.getElementById('myModal')
					const myInput = document.getElementById('myInput')

					myModal.addEventListener('shown.bs.modal', () => {
						myInput.focus()
					})
				}
			}
			var intervalo = setInterval(atualizarTemporizador, 1000);

			break;
		



	}


	altura = window.innerHeight
	largura = window.innerWidth


}


