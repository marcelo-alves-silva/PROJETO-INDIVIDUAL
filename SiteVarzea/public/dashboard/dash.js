document.addEventListener('DOMContentLoaded', () => {
    const votes = JSON.parse(localStorage.getItem('votes')) || { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
    const ctx = document.getElementById('votesChart').getContext('2d');

    // Carregar as imagens dos logos dos times
    const images = [
        new Image(),  // Imagem do Mundo da Varzea
        new Image(),  // Imagem do Brisas F.C
        new Image(),  // Imagem do Vila São Paulo
        new Image()   // Imagem do Varzea F.C
    ];
    images[0].src = '../assets/logo.png'; 
    images[1].src = '../assets/time3.png';
    images[2].src = '../assets/time2.png';
    images[3].src = '../assets/CYMERA_20160601_103758-removebg-preview.png';

  
    images.forEach((img, index) => {
        img.onload = () => {
            console.log(`Imagem ${index + 1} carregada com sucesso!`);
        };
        img.onerror = () => {
            console.error(`Erro ao carregar imagem ${index + 1}`);
        };
    });

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mundo da Varzea', 'Brisas F.C', 'Vila São Paulo', 'Varzea F.C','Só amigos','Fenomenautas'],
            datasets: [{
                label: 'VOTOS',
                data: [votes[1], votes[2], votes[3], votes[4],votes[5],votes[6]],
                backgroundColor: ['orange', 'blue', 'green', 'yellow','red','black'],
                borderColor: 'white', // Cor da borda
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                afterDatasetsDraw: function (chart) {
                    const ctx = chart.ctx;
                    chart.data.datasets.forEach((dataset, i) => {
                        const meta = chart.getDatasetMeta(i);
                        meta.data.forEach((bar, index) => {
                            const model = bar;
                            const yPos = model.y - 25;
                            const xPos = model.x - 10;
                            ctx.drawImage(images[index], xPos, yPos, 20, 20);  // Ajuste o tamanho da imagem conforme necessário
                        });
                    });
                },
                legend: {
                    labels: {
                        color: 'white',
                        backgroundColor: ['black'],
                        // Ajuste da fonte e cor dos nomes dos times
                        font: {
                            size: 10, // Tamanho da fonte
                            weight: 'bold' // Peso da fonte
                        },
                        color: 'White' // Cor do texto
                    }
                }
            }
        }
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        // Reset votes
        const resetVotes = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
        localStorage.setItem('votes', JSON.stringify(resetVotes));

        // Update chart
        chart.data.datasets[0].data = [resetVotes[1], resetVotes[2], resetVotes[3], resetVotes[4],resetVotes[5],resetVotes[6]];
        chart.update();
    });
});
