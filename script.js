const icone = document.querySelector('.icone')
const pesquisa = document.querySelector('.pesquisa')
const logo = document.querySelector('.logo')
const user = document.querySelector('.user')
const carrinho = document.querySelector('.carrinho')

icone.onclick = function() {
    pesquisa.classList.toggle('active')
    logo.classList.toggle('active')
    user.classList.toggle('active')
    carrinho.classList.toggle('active')
}