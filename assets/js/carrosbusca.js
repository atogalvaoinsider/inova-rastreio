document.getElementById('carTypeSelect').addEventListener('change', function() {
    var brand = document.getElementById('carBrandSelect').value;
    if (!brand) {
        alert('Por favor, selecione o fabricante primeiro.');
        this.value = ''; // Reseta a seleção de tipo se não houver fabricante selecionado
        return;
    }

    var carModelsByBrandAndType = {
        'Toyota': {
            'SUV': ['RAV4', 'Highlander'],
            'SEDAN': ['Corolla', 'Camry'],
            'PICKUP': ['Hilux']
        },
        'Ford': {
            'SUV': ['EcoSport', 'Escape'],
            'SEDAN': ['Fusion', 'Focus'],
            'PICKUP': ['Ranger', 'F-150']
        },
        'Fiat': {
            'SUV': ['500X'],
            'SEDAN': ['Cronos'],
            'PICKUP': ['Strada', 'Toro']
        }
    };

    var type = this.value;
    var models = (carModelsByBrandAndType[brand] && carModelsByBrandAndType[brand][type]) || [];
    var modelSelect = document.getElementById('carModelSelect');
    
    // Limpa modelos anteriores
    modelSelect.innerHTML = '<option value="">Selecione o modelo do carro</option>';
    modelSelect.disabled = models.length === 0;

    // Adiciona novos modelos
    models.forEach(function(model) {
        var option = new Option(model, model);
        modelSelect.add(option);
    });
});

// Garante que o usuário selecione o fabricante antes do tipo de carro
document.getElementById('carBrandSelect').addEventListener('change', function() {
    document.getElementById('carTypeSelect').value = '';
    document.getElementById('carModelSelect').innerHTML = '<option value="">Selecione o modelo do carro</option>';
    document.getElementById('carModelSelect').disabled = true;
});