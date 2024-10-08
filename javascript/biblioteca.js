const tbody = document.querySelector('tbody')
const modal = document.querySelector('.modal-container')
const sNome = document.querySelector('#m-nome')
const sAutor = document.querySelector('#m-autor')
const sAno = document.querySelector('#m-ano')
const btnSalvar = document.querySelector('#btnSalvar')

let livro
let id

document.addEventListener("DOMContentLoaded", function () {
    loadItens();
});

function loadItens() {
    fetch("http://localhost:3000/biblioteca", { method: "GET" })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const tbody = document.querySelector('tbody'); // Seleciona o elemento tbody
            tbody.innerHTML = ''; // Limpa o conteúdo atual do tbody

            data.forEach((livro) => {
                insertItem(livro);
            });
        })
        .catch(error => console.error("Erro:", error));
}

function insertItem(livro) {
    let tr = document.createElement('tr');
    renderTr(livro, tr)
    tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
    if (sNome.value == '' || sAutor.value == '' || sAno.value == '') {
        return
    }

    e.preventDefault();

    const novoLivro = {
        nome_livro: sNome.value,
        autor: sAutor.value,
        ano: sAno.value
    };

    if (id !== undefined) {
        // Se for uma atualização, envie apenas o livro atualizado
        fetch(`http://localhost:3000/biblioteca/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoLivro)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Livro atualizado:", data);
                // Atualize a linha na tabela com o livro atualizado
                const tr = document.getElementById(`livro-${id}`);
                renderTr(data, tr);
            })
            .catch(error => console.error("Erro:", error));
    } else {
        // Se for uma adição, envie o novo livro
        fetch("http://localhost:3000/biblioteca", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoLivro)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Livro adicionado:", data);
                // Adicione uma nova linha na tabela com o novo livro
                insertItem(data);
            })
            .catch(error => console.error("Erro:", error));
    }

    // Feche o modal após a operação ser concluída
    modal.classList.remove('active');
    id = undefined;
};

function renderTr(item, tr) {
    tr.innerHTML = `
      <td>${item.nome_livro}</td>
      <td>${item.autor}</td>
      <td>${item.ano}</td>
      <td class="acao">
        <button onclick="editItem('${item.id}')"><i class='bx bxs-message-square-edit'></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem('${item.id}')"><i class='bx bxs-trash-alt'></i></button>
      </td>
    `;
}

function openModal(edit = false, idlinha = 0) {
    modal.classList.add('active')

    modal.onclick = e => {
        if (e.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if (edit) {
        sNome.value = livro[idlinha].nome_livro
        sAutor.value = livro[idlinha].autor
        sAno.value = livro[idlinha].ano
        id = idlinha
    } else {
        sNome.value = ''
        sAutor.value = ''
        sAno.value = ''
    }

}

function editItem(idlinha) {
    id = idlinha
    openModal(true, idlinha)
}

function deleteItem(idlinha) {
    fetch(`http://localhost:3000/biblioteca/${idlinha}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                loadItens()
            })
            .catch(error => console.error("Erro:", error));
}
