for (let i = 0; i < colecaoElementos .length; i++) {
    const tabela = document.querySelector('tabela')
    tabela.innerHTML += `
        <tr>
            <td>${colecaoElementos[i][0]}</td>
            <td>${colecaoElementos[i][1]}</td>
            <td>${colecaoElementos[i][2]}</td>
            <td>${colecaoElementos[i][3]}</td>
            <td>${colecaoElementos[i][4]}</td>
        </tr>
    `;
}