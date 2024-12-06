
    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -12.043333, lng: -77.028333 },
            zoom: 13,
        });

        // Controle de Zoom In
        document.getElementById("zoom-in").addEventListener("click", () => {
            map.setZoom(map.getZoom() + 1);
        });

        // Controle de Zoom Out
        document.getElementById("zoom-out").addEventListener("click", () => {
            map.setZoom(map.getZoom() - 1);
        });

        // Resetar para o Ponto Inicial
        document.getElementById("reset").addEventListener("click", () => {
            map.setCenter({ lat: -12.043333, lng: -77.028333 });
            map.setZoom(13);
        });

        // Ativar tela cheia
        document.getElementById("fullscreen").addEventListener("click", () => {
            if (!document.fullscreenElement) {
                document.getElementById("map").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });

        // Adicione eventos para outros botões conforme necessário
    }

    window.onload = initMap;


    // Função de cadastro de grupo de veiculos 

    const veiculosInput = document.getElementById('veiculos-grupo');
    const listaVeiculos = document.getElementById('lista-veiculos');

    veiculosInput.addEventListener('click', () => {
        listaVeiculos.classList.toggle('d-none');
    });

    listaVeiculos.addEventListener('change', () => {
        const selecionados = Array.from(listaVeiculos.querySelectorAll('input[type="checkbox"]:checked'))
            .map(el => el.value)
            .join('; ');
        veiculosInput.value = selecionados;
    });


    // Função de cadastrar grupo de interesse POI
    const tipoMapaSelect = document.getElementById("tipo-mapa");
    const localizacaoSelect = document.getElementById("localizacao");
    const iframe = document.getElementById("map-iframe");
    
    // Função para atualizar o mapa
    function atualizarMapa() {
        const tipoMapa = tipoMapaSelect.value; // Tipo de mapa (roadmap ou satellite)
        const coordenadas = localizacaoSelect.value; // Coordenadas selecionadas
    
        // URL base do Google Maps
        let srcBase = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085928142253!2d${coordenadas.split(",")[1]}!3d${coordenadas.split(",")[0]}`;
    
        // Ajusta o tipo de visualização
        if (tipoMapa === "satellite") {
            srcBase += "!5m1!1e3"; // Modo satélite
        } else {
            srcBase += "!2m3!1f0!2f0!3f0"; // Modo mapa
        }
    
        // Adiciona idioma e configurações adicionais
        srcBase += "&hl=en&gl=US";
    
        // Atualiza o iframe
        iframe.src = srcBase;
    }
    
    // Eventos de alteração
    tipoMapaSelect.addEventListener("change", atualizarMapa);
    localizacaoSelect.addEventListener("change", atualizarMapa);

//// Odômetro função


