
addEventListener("message", contador => {
    console.log("Oi")

    const [a, b] = contador.data;
    postMessage(a + b);


    let conter = 0;

    function atualizarContador() {
        conter++;
        console.log(conter)
    }

    setInterval(atualizarContador, 1000);
    
});