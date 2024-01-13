document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://avaliacoes-js.onrender.com/listar_comentarios";
    const comentariosLista = document.getElementById("comentarios-lista");

    function obterComentarios() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => exibirComentarios(data.comentarios))
            .catch(error => console.error("Erro ao obter comentários:", error));
    }

    function exibirComentarios(comentarios) {
        comentariosLista.innerHTML = "";

        comentarios.forEach((comentario, index) => {
            const itemLista = document.createElement("li");
            const nomeUsuario = document.createElement("div");
            nomeUsuario.textContent = comentario.usuario;
            nomeUsuario.classList.add("usuario");
            const textoComentario = document.createElement("div");
            textoComentario.textContent = comentario.comentario;
            textoComentario.classList.add("comentario");

            itemLista.appendChild(nomeUsuario);
            itemLista.appendChild(textoComentario);

            comentariosLista.appendChild(itemLista);

            // Adiciona um deslocamento para baixo proporcional ao índice do comentário
            setTimeout(() => {
                comentariosLista.style.top = `calc(500px + ${index * 5}px)`;
            }, 100 * index);
        });
    }

    function alterarCorFundo() {
        const cores = ["lightblue", "lightgreen", "lightcoral", "lightyellow"];
        let index = 0;

        setInterval(function () {
            document.body.style.backgroundColor = cores[index];
            index = (index + 1) % cores.length;
        }, 1500);
    }

    alterarCorFundo();


    obterComentarios();
    alterarCorFundo();
});