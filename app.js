function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
  
    if (campoPesquisa == "") {
      section.innerHTML = "Resultado não encontrado. Você precisa digitar algo."
      return
    };
  
    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = "";
    let nome = "";
    let descricao = "";
    let nivel = "";
  
    for (let dado of dados) {
      nome = dado.nome.toLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      nivel = dado.nivel.toLocaleLowerCase()
  
      // se titulo inclui campoPesquisa
      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || nivel.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            ${dado.nome}
          </h2>
          <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${dado.link}" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
          <p class="descricao">${dado.descricao}</p>
          <p class="nivel">${dado.nivel}</p>
          <p class="local">${dado.local}</p>
          <p class="musculostrabalhados">${dado.musculosTrabalhados}</p>
        </div>
        `;
      }
    }
  
    if (!resultados) {
      resultados = "Resultado não encontrado"
    }
  
    section.innerHTML = resultados;

    mostrarVideo();
}
// Novo código para o botão de aceitação
document.getElementById("btnAceitar").addEventListener("click", function() {
  // Aqui você define a ação que será executada ao clicar no botão
  alert("Você aceitou os termos!");
  // Outras ações, como salvar preferências, redirecionar, etc.
});

// function mostrarVideo() {
//   const videos = document.querySelectorAll('video.hidden');
//   videos.forEach(video => {
//     video.classList.remove('hidden');
//   });
// }