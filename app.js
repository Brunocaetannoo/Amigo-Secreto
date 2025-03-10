<<<<<<< HEAD
// Armazena os participantes
let participantes = [];

// Função para adicionar o nome do participante
function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();
    let errorMessage = document.getElementById("error-message");
    
    // Verifica se o limite de 20 participantes foi atingido
    if (participantes.length >= 20) {
        errorMessage.textContent = "Você atingiu o limite de 20 participantes.";
        nomeInput.value = ""; // Limpa o campo de input
        return;
    }
    
    // Verifica se o nome é válido e ainda não foi adicionado
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        let lista = document.getElementById("lista");
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
        nomeInput.value = ""; // Limpa o campo de input
        errorMessage.textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para sortear o "Amigo Secreto"
function sortearAmigo() {
    if (participantes.length < 2) {
        document.getElementById("resultado").textContent = "Adicione pelo menos 2 participantes!";
        return;
    }
    // Sorteia um participante aleatório
    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById("resultado").textContent = "O amigo secreto é: " + sorteado;
}
=======
// Armazena os participantes
let participantes = [];

// Função para adicionar o nome do participante
function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();
    let errorMessage = document.getElementById("error-message");
    
    // Verifica se o limite de 20 participantes foi atingido
    if (participantes.length >= 20) {
        errorMessage.textContent = "Você atingiu o limite de 20 participantes.";
        nomeInput.value = ""; // Limpa o campo de input
        return;
    }
    
    // Verifica se o nome é válido e ainda não foi adicionado
    if (nome && !participantes.includes(nome)) {
        participantes.push(nome);
        let lista = document.getElementById("lista");
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
        nomeInput.value = ""; // Limpa o campo de input
        errorMessage.textContent = ""; // Limpa a mensagem de erro
    }
}

// Função para sortear o "Amigo Secreto"
function sortearAmigo() {
    if (participantes.length < 2) {
        document.getElementById("resultado").textContent = "Adicione pelo menos 2 participantes!";
        return;
    }
    // Sorteia um participante aleatório
    let sorteado = participantes[Math.floor(Math.random() * participantes.length)];
    document.getElementById("resultado").textContent = "O amigo secreto é: " + sorteado;
}
>>>>>>> 35c290b (primeiro commit)
