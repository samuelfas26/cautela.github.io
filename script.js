document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('anagram-form');
    const resultDiv = document.getElementById('result');
    const proceedButton = document.getElementById('proceed-button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        const needsRadio = document.querySelector('input[name="needs-radio"]:checked')?.value;

        if (nameInput === '') {
            alert('Por favor, insira um nome.');
            return;
        }

        if (needsRadio === 'sim') {
            const indicatives = [
                'Onça-pintada', 'Jacaré', 'Arara-azul', 'Capivara', 'Anta', 
                'Jabuti', 'Tamanduá-bandeira', 'Cervo-do-pantanal', 'Macaco-prego', 
                'Rã', 'Iguana', 'Paca', 'Robalo', 'Tuiuiú', 'Mula', 'Quati', 
                'Jararaca', 'Serpente', 'Gavião-real', 'Peixe-boi', 'Formiga', 
                'Inseto', 'Suará', 'Curicaca', 'Búfalo', 'Lobo-guará', 
                'Pirarucu', 'Urubu', 'Cacatua', 'Gambá', 'Gato-do-mato', 
                'Ariranha', 'Mico-leão-dourado'
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
        } else {
            // Se não vai precisar de rádio, libera o botão de redirecionamento diretamente
            resultDiv.style.display = 'none';
            proceedButton.style.display = 'block';
            proceedButton.href = '1.html';
        }
    });

    // Reproduzir o MP3 automaticamente ao carregar a página
    const audio = new Audio('sound.mp3');
    audio.volume = 0.5; // Ajuste o volume entre 0.0 e 1.0
    audio.play();
});
