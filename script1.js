document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedMaterials = JSON.parse(urlParams.get('materials')) || [];

    const materialsBody = document.getElementById('material-selection');

    // Adiciona os materiais à página
const materials = [
    'Viatura', 
    'Fuzil 7,62', 
    'Fuzil 5,56', 
    'Espingarda Cal 12', 
    'Pistola Beretta', 
    'Pistola Imbel', 
    'Carregador Sobressalente Fuzil', 
    'Carregador Sobressalente Pistola', 
    'Munição 7,62', 
    'Munição 9mm', 
    'Munição Cal 12 Elastômero', 
    'Munição Cal 12 Explosiva', 
    'Bandoleira', 
    'Colete Tático', 
    'Capacete Balístico', 
    'Placa Balística', 
    'Spray de Pimenta Pequeno', 
    'Granada Lacrimogênea', 
    'Granada Luz e Som', 
    'Kit Antitumulto', 
    'Escudo OCD', 
    'Tonfa', 
    'Rádio', 
    'Bateria Sobressalente', 
    'Barraca Iglu', 
    'Rede Operacional', 
    'Manta Térmica', 
    'Mochila', 
    'Marmita', 
    'Poncho', 
    'Saco de Dormir', 
    'Saco de Campanha', 
    'Mochila T10', 
    'Óculos Tático', 
    'Lanterna', 
    'Bornal', 
    'Camelback'
];


    materials.forEach(material => {
        const div = document.createElement('div');
        div.className = 'material-item';
        div.textContent = material;
        div.dataset.material = material;
        div.addEventListener('click', () => {
            div.classList.toggle('selected');
        });
        materialsBody.appendChild(div);
    });

    document.getElementById('next-step').addEventListener('click', () => {
        const selectedMaterials = Array.from(document.querySelectorAll('.material-item.selected')).map(item => item.textContent);
        if (selectedMaterials.length === 0) {
            alert('Nenhum material selecionado.');
            return;
        }
        const params = new URLSearchParams();
        params.append('materials', JSON.stringify(selectedMaterials));
        window.location.href = `2.html?${params.toString()}`;
    });
});
