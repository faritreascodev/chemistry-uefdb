function showBiome(bioma) {
    const biomeDetails = getBiomeDetails(bioma);

    // Mostrar la información del bioma
    document.getElementById('biome-title').innerText = biomeDetails.title;
    document.getElementById('biome-description').innerText = biomeDetails.description;

    const simulation = getBiomeSimulation(bioma);
    document.getElementById('simulation').innerHTML = simulation;
}

function getBiomeDetails(bioma) {
    // Función para obtener detalles específicos de cada bioma
    // Aquí deberías retornar un objeto con la información adecuada para cada bioma
    switch (bioma) {
        case 'bioma1':
            return {
                title: 'Detalles de Bioma 1',
                description: 'Información detallada sobre flora, fauna y características únicas del Bioma 1.'
            };
        case 'bioma2':
            // Información para Bioma 2
            return {
                title: 'Detalles de Bioma 2',
                description: 'Información detallada sobre flora, fauna y características únicas del Bioma 2.'
            };
        // Agrega más casos para otros biomas
        default:
            // En caso de bioma desconocido
            return {
                title: 'Bioma Desconocido',
                description: 'No se encontró información para este bioma.'
            };
    }
}