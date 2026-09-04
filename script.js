document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const txtMensagem = document.getElementById("mensagem");
    const msgSucesso = document.getElementById("sucesso-mensagem");

    form.addEventListener("submit", (event) => {
        // Impede o envio real do formulário para validação
        event.preventDefault();

        // Limpa mensagens de erro e sucesso anteriores
        limparErros();

        let formularioValido = true;

        // Validação do campo Nome
        if (inputNome.value.trim().length < 3) {
            exibirErro("erro-nome", "Por favor, digite seu nome completo (mínimo 3 caracteres).");
            formularioValido = false;
        }

        // Validação do campo E-mail (Regex básico e acessível)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.value.trim())) {
            exibirErro("erro-email", "Por favor, insira um e-mail válido (exemplo@dominio.com).");
            formularioValido = false;
        }

        // Validação do campo Mensagem
        if (txtMensagem.value.trim().length < 10) {
            exibirErro("erro-mensagem", "Sua mensagem deve conter pelo menos 10 caracteres.");
            formularioValido = false;
        }

        // Se passar em todas as validações (Usando dados simulados/fictícios)
        if (formularioValido) {
            msgSucesso.textContent = "Mensagem enviada com sucesso! (Simulação de envio acadêmico)";
            msgSucesso.className = "sucesso-visivel";
            
            // Reseta o formulário limpando os campos
            form.reset();
        }
    });

    // Função para renderizar as mensagens de erro nos spans corretos
    function exibirErro(idElemento, mensagem) {
        const elementoErro = document.getElementById(idElemento);
        if (elementoErro) {
            elementoErro.textContent = message = mensagem;
        }
    }

    // Função para limpar todos os alertas de erro da tela
    function limparErros() {
        const erros = document.querySelectorAll(".erro-mensagem");
        erros.forEach(erro => erro.textContent = "");
        msgSucesso.textContent = "";
        msgSucesso.className = "";
    }
});
