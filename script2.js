document.addEventListener('DOMContentLoaded', function () {
    const combatantData = JSON.parse(localStorage.getItem('combatantData'));
    const materialsBody = document.getElementById('materials-body');
    const selectedMaterials = JSON.parse(new URLSearchParams(window.location.search).get('materials')) || [];

    selectedMaterials.forEach(material => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${material}</td>
            <td><input type="number" min="1" value="1"></td>
        `;
        materialsBody.appendChild(row);
    });

    document.getElementById('generate-pdf').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Adiciona o título e os dados do combatente no PDF
        doc.text('Folha de Cautela para Missão', 10, 10);
        doc.text(`Nome: ${combatantData.name}`, 10, 20);

        if (combatantData.indicative) {
            doc.text(`Indicativo: ${combatantData.indicative}`, 10, 30);
        }

        // Gera a tabela de materiais e quantidades
        doc.autoTable({
            startY: 40,
            head: [['Material', 'Quantidade']],
            body: Array.from(materialsBody.children).map(row => [
                row.children[0].textContent,
                row.children[1].querySelector('input').value
            ])
        });

        // Salva o PDF
        doc.save('materiais-cautelados.pdf');
    });
});
