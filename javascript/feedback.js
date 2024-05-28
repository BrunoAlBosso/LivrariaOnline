const tbody = document.querySelector('tbody')
const modal = document.querySelector('.modal-container')
const sFeedback = document.querySelector('#m-feedback')
const btnPostar = document.querySelector('#btnPostar')

let feedback
let id

document.addEventListener("DOMContentLoaded", function () {
    loadItens();
});

function loadItens() {
    fetch("http://localhost:3000/feedback", { method: "GET" })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const tbody = document.querySelector('tbody'); // Seleciona o elemento tbody
            tbody.innerHTML = ''; // Limpa o conteúdo atual do tbody

            data.forEach((feedback) => {
                insertItem(feedback);
            });
        })
        .catch(error => console.error("Erro:", error));
}

function insertItem(feedback) {
    let tr = document.createElement('tr');
    renderTr(feedback, tr)
    tbody.appendChild(tr);
}

btnPostar.onclick = e => {
    if (sFeedback.value == '') {
        return
    }

    e.preventDefault();

    const novoPost = {
        feedback: sFeedback.value
    };

    if (id !== undefined) {
        // Se for uma atualização, envie apenas o feedback atualizado
        fetch(`http://localhost:3000/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoPost)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Post atualizado:", data);
                // Atualize a linha na tabela com o feedback atualizado
                const tr = document.getElementById(`feedback-${id}`);
                renderTr(data, tr);
            })
            .catch(error => console.error("Erro:", error));
    } else {
        // Se for uma adição, envie o novo feedback
        fetch("http://localhost:3000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoPost)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Post adicionado:", data);
                // Adicione uma nova linha na tabela com o novo feedback
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
      <td>${item.feedback}</td>
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
        sFeedback.value = feedback[idlinha].feedback
        id = idlinha
    } else {
        sFeedback.value = ''
    }

}

function editItem(idlinha) {
    id = idlinha
    openModal(true, idlinha)
}

function deleteItem(idlinha) {
    fetch(`http://localhost:3000/feedback/${idlinha}`, {
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