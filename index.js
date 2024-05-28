const express = require("express");
const cors = require("cors");
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(cors());
server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('./db/items.json', 'utf-8')
    return JSON.parse(content)
}

const readFileFeedback = () => {
    const content = fs.readFileSync('./db/feedback.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./db/items.json', updateFile, 'utf-8')
}

const writeFileFeedback = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./db/feedback.json', updateFile, 'utf-8')
}

router.get('/biblioteca', (req, res) => {
    const content = readFile()
    res.send(content)
})

router.get('/feedback', (req, res) => {
    console.log("Feedback open");
    const content = readFileFeedback()
    res.send(content)
})

router.post('/biblioteca', (req, res) => {
    const { nome_livro, autor, ano } = req.body
    const currentContent = readFile()

    const id = Math.random().toString(32).substr(2, 9)
    currentContent.push({ id, nome_livro, autor, ano })
    writeFile(currentContent)
    res.send( {id, nome_livro, autor, ano} )
})

router.post('/feedback', (req, res) => {
    const { feedback} = req.body
    const currentContent = readFileFeedback()

    const id = Math.random().toString(32).substr(2, 9)
    console.log(id, feedback);
    currentContent.push({ id, feedback})
    writeFileFeedback(currentContent)
    res.send( {id, feedback} )
})

router.put('/biblioteca/:id', (req, res) => {
    const { nome_livro, autor, ano } = req.body
    const {id} = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id == id)

    const { id: cId, nome_livro: cNome, autor: cAutor, ano: cAno } = currentContent[selectedItem]

    const newObject = {
        id: cId,
        nome_livro: nome_livro ? nome_livro: cNome,
        autor: autor ? autor: cAutor,
        ano: ano ? ano: cAno,
    }

    currentContent[selectedItem] = newObject
    writeFile(currentContent)

    res.send(newObject)
})

router.put('/feedback/:id', (req, res) => {
    const { feedback} = req.body
    const {id} = req.params
    const currentContent = readFileFeedback()
    const selectedItem = currentContent.findIndex((item) => item.id == id)

    const { id: cId, feedback: cFeedback } = currentContent[selectedItem]

    const newObject = {
        id: cId,
        feedback: feedback ? feedback: cFeedback
    }

    currentContent[selectedItem] = newObject
    writeFileFeedback(currentContent)

    res.send(newObject)
})

router.delete('/biblioteca/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id == id)
    currentContent.splice(selectedItem, 1)
    writeFile(currentContent)
    res.send(true)
})

router.delete('/feedback/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFileFeedback()
    const selectedItem = currentContent.findIndex((item) => item.id == id)
    currentContent.splice(selectedItem, 1)
    writeFileFeedback(currentContent)
    res.send(true)
})

server.use(router)

server.listen(3000, () => {
    console.log("Rodando o servidor")
})