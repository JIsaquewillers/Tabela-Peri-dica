    //cria uma variável para a tabela//
    const tabela = document.getElementById("tabela")

    //cria um laço de repetição para criar as 10 colunas da tabela//
    for(let i = 0; i < 10; i++){
        const tr = document.createElement("tr")

    //cria um laço de repetição para criar as 18 linhas da tabela e colocar dentro das colunas//
    for(let i = 0; i < 18; i++){
        const td = document.createElement("td")
    //coloca as linhas dentro das colunas//
            tr.appendChild(td)
        }
    //coloca as colunas dentro da tabela//
        tabela.appendChild(tr)
        
    }
    //pega a colecaElementos e cria um laço de repetição com foreach.//
    //onde pega cada elemento(e)//
    colecaoElementos.forEach((e) => {
    //acha o elemento certo e suas linhas e colunas//
    // (-1) converte de base 1 para base 0 //
        const td = tabela.rows[e.linha-1].cells[e.coluna-1]
    //coloca os itens h4,h4 e p dentro da linha com innerHTML//
        td.innerHTML = `
        <h4>${e.numeroAtomico}</h4>
        <h3>${e.simbolo}</h3>   
        <p>${e.nome}</p>
        <p>${e.massaAtomica}</p>`
        td.elemento = e
        td.style.backgroundColor = e.corGrupo;

        //evento de quando passar o mouse em cma do elemento aparecera suas carateristicas no card//
        td.addEventListener('click', ()=> {
  const info = document.getElementById("info")

    info.innerHTML = `
        <h2 id="nome">${e.nome}</h2><br>
    <p class="dados">Número Atômico: ${e.numeroAtomico}</p>
    <p class="dados"id="massa">Massa Atômica: ${e.massaAtomica}</p>
    <p class="dados">Grupo: ${e.grupo}</p>
    <p class="dados">Configuração Eletrônica: ${e.configuracaoEletronica}</p>
    <h3 id="simbolo">${e.simbolo}</h3>
    `  
    
})
    });


    










