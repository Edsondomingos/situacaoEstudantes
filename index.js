const express = require('express')

const app = express()
app.set('view engine', 'ejs')



app.get('/', (req,res) => {
    res.render('principal')
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/login', (req,res) => {
    //
})

app.get('/novoUsuario', (req,res) => {
    res.render('novoUsuario')
})

app.post('/novoUsuario', (req,res) => {
    //
})

app.get('/recuperarConta', (req,res) => {
    res.render('recuperarConta')
})

app.post('/recuperarConta', (req,res) => {
    //
})

app.get('/perfil', (req,res) => {
    res.render('perfil')
})

app.post('/perfil', (req,res) => {
    res.render('perfil')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
})