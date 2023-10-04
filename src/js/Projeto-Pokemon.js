/*
   o que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

   - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua.
   -passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
   - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
   - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
   - passo 4 - adicionar a classe modo escuro no body
   - passo 5 - trocar a imagem do botão de alterar tema para lua

   - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mugar a imagem para o sol
   - passo 6 - remover a classe do modo escuro do body
   - passso 7 - trocar a imagem do botão de alterar tema para o sol
   */

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png")
    }

})