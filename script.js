document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('anagram-form');
    const resultDiv = document.getElementById('result');
    const proceedButton = document.getElementById('proceed-button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        if (nameInput === '') {
            alert('Por favor, insira um nome.');
            return;
        }

        const indicatives = [
            'leão', 'tigre', 'elefante', 'girafa', 'zebra', 'macaco', 'leopardo', 'rinoceronte', 'hipopótamo',
            'crocodilo', 'cobra', 'águia', 'falcão', 'corvo', 'pinguim', 'urso', 'lobo', 'raposa', 'coelho',
            'guaxinim', 'esquilo', 'castor', 'tartaruga', 'golfinho', 'baleia', 'tubarão', 'cavalo', 'vaca',
            'ovelha', 'porco', 'cabra', 'galinha', 'pato', 'ganso', 'pavão', 'flamingo', 'cisne', 'coruja',
            'paca', 'mico', 'tamanduá', 'anta', 'jaguar', 'puma', 'porquinho-da-índia', 'roedor', 'camelo',
            'canguru'
        ];

        // Gera um indicativo aleatório da lista
        const randomIndex = Math.floor(Math.random() * indicatives.length);
        const indicativo = indicatives[randomIndex];

        // Cria um objeto JSON com os dados
        const combatantData = {
            name: nameInput,
            indicative: indicativo
        };

        // Salva o objeto JSON no localStorage
        localStorage.setItem('combatantData', JSON.stringify(combatantData));

        // Exibe o indicativo gerado
        resultDiv.textContent = `Seu indicativo é: ${indicativo}`;
        resultDiv.style.display = 'block';

        // Exibe o botão de redirecionamento
        proceedButton.style.display = 'block';
        proceedButton.href = '1.html';
    });
});
