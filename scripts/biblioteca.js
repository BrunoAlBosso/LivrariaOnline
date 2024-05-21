const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sAutor = document.querySelector('#m-autor')
const sAno = document.querySelector('#m-ano')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      sNome.value = itens[index].nome
      sAutor.value = itens[index].autor
      sAno.value = itens[index].ano
      id = index
    } else {
      sNome.value = ''
      sAutor.value = ''
      sAno.value = ''
    }
    
  }
  
  function editItem(index) {
  
    openModal(true, index)
  }
  
  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }
  
  function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.autor}</td>
      <td>${item.ano}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bxs-message-square-edit'></i></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bxs-trash-alt'></i></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }
  
  btnSalvar.onclick = e => {
    
    if (sNome.value == '' || sAutor.value == '' || sAno.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].nome = sNome.value
      itens[id].autor = sAutor.value
      itens[id].ano = sAno.value
    } else {
      itens.push({'nome': sNome.value, 'autor': sAutor.value, 'ano': sAno.value})
    }
  
    setItensBD()
  
    modal.classList.remove('active')
    loadItens()
    id = undefined
  }
  
  function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
      insertItem(item, index)
    })
  
  }
  
  const getItensBD = () => JSON.parse(localStorage.getItem('dbliv')) ?? []
  const setItensBD = () => localStorage.setItem('dbliv', JSON.stringify(itens))
  
  loadItens()

