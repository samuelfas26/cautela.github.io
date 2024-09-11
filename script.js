document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('anagram-form');
    const resultDiv = document.getElementById('result');
    const proceedButton = document.getElementById('proceed-button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nameInput = document.getElementById('name').value.trim();
        const needsRadio = document.getElementById('needs-radio').value;

        if (nameInput === '') {
            alert('Por favor, insira um nome.');
            return;
        }

        if (needsRadio === '') {
            alert('Por favor, selecione se vai precisar de rádio.');
            return;
        }

        const combatantData = {
            name: nameInput,
            needsRadio: needsRadio
        };

        if (needsRadio === 'sim') {
            const indicatives = [
                'formiga', 'onça', 'arara', 'tuiuiú', 'tamanduá', 'jacaré', 'capivara', 'jabuti', 'piranha', 
                'sucuri', 'anta', 'bugio', 'veado-campeiro', 'coruja', 'quati', 'seriemas', 'garça', 'cobra',
                'javali', 'peixe-boi', 'guará', 'tartaruga', 'guaxinim', 'gavião', 'ema', 'macuco', 'lobinho', 
                'ema', 'cervo-do-pantanal', 'ariranha'
            ];

            // Gera um indicativo aleatório da lista
            const randomIndex = Math.floor(Math.random() * indicatives.length);
            const indicativo = indicatives[randomIndex];
            combatantData.indicative = indicativo;

            // Exibe o indicativo gerado
            resultDiv.textContent = `Seu indicativo é: ${indicativo}`;
            resultDiv.style.display = 'block';
        } else {
            resultDiv.style.display = 'none';
        }

        // Salva o objeto JSON no localStorage
        localStorage.setItem('combatantData', JSON.stringify(combatantData));

        // Exibe o botão de redirecionamento
        proceedButton.style.display = 'block';
    });

    proceedButton.addEventListener('click', function () {
        // Redireciona para a página 1.html
        window.location.href = '1.html';
    });
    // Reproduzir o MP3 automaticamente ao carregar a página
    const audio = new Audio('sound.mp3');
    audio.volume = 0.5; // Ajuste o volume entre 0.0 e 1.0
    audio.play();
});


