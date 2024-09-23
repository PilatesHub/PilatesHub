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
            <a href="#" target="_bank">${dado.nome}</a>
          </h2>
          <a href="${dado.link}" target= "_blank">
     <video poster="imagens/${dado.imagem}" controls>
            <source src="videos/${dado.video}" type="video/mp4">
            Seu navegador não suporta o elemento de vídeo.
        </video>
   </a>
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

function mostrarVideo() {
  const videos = document.querySelectorAll('video.hidden');
  videos.forEach(video => {
    video.classList.remove('hidden');
  });
}