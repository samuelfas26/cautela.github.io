document.addEventListener('DOMContentLoaded', function () {
    const materials = [
        'Viatura', 'Fuzil 7,62', 'Fuzil 5,56', 'Espingarda Cal 12', 'Pistola Beretta', 'Pistola Imbel',
        'Carregador Sobressalente Fuzil', 'Carregador Sobressalente Pistola', 'Munição 7,62', 'Munição 9mm',
        'Bandoleira', 'Colete Tático', 'Capacete Balístico', 'Placa Balística', 'Spray de Pimenta Pequeno',
        'Granada Lacrimogênea', 'Granada Luz e Som', 'Kit Antitumulto', 'Escudo OCD', 'Tonfa', 'Rádio',
        'Bateria Sobressalente', 'Barraca Iglu', 'Rede Operacional', 'Manta Térmica', 'Mochila', 'Marmita',
        'Poncho', 'Saco de Dormir', 'Mochila T10', 'Óculos Tático', 'Lanterna', 'Camelback'
    ];

    const materialSelection = document.getElementById('material-selection');

    // Exibe os materiais na página
    materials.forEach(material => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.textContent = material;
        div.dataset.material = material;
        div.addEventListener('click', () => {
            div.classList.toggle('selected');
        });
        materialSelection.appendChild(div);
    });

    document.getElementById('next-step').addEventListener('click', () => {
        const selectedMaterials = Array.from(document.querySelectorAll('.material-item.selected')).map(item => item.textContent);
        if (selectedMaterials.length === 0) {
            alert('Nenhum material selecionado.');
            return;
        }

        // Salva os materiais selecionados na URL e redireciona para a próxima página
        const params = new URLSearchParams();
        params.append('materials', JSON.stringify(selectedMaterials));
        window.location.href = `2.html?${params.toString()}`;
    });
});
