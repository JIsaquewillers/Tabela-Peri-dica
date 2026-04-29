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
})      

        

