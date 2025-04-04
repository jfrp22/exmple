// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráfico de tráfico
    initTrafficChart();
    
    // Simular datos de dispositivos conectados
    simulateConnectedDevices();
    
    // Manejar el logout
    document.querySelector('.logout-btn a').addEventListener('click', function(e) {
        e.preventDefault();
        if(confirm('¿Estás seguro que deseas cerrar sesión?')) {
            alert('Simulación: Sesión cerrada. Redirigiendo a página de login.');
            // En una implementación real, redirigiría a la página de login
        }
    });
});

function initTrafficChart() {
    const ctx = document.getElementById('trafficChart').getContext('2d');
    
    // Datos de ejemplo para el gráfico
    const labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
    const downloadData = [5, 15, 30, 45, 30, 60, 40];
    const uploadData = [2, 8, 15, 20, 15, 30, 20];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Descarga (Mbps)',
                    data: downloadData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Subida (Mbps)',
                    data: uploadData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Mbps'
                    }
                }
            }
        }
    });
}

function simulateConnectedDevices() {
    // Simular actualización periódica de dispositivos
    setInterval(() => {
        const statusCells = document.querySelectorAll('.devices-list tbody tr td:last-child span');
        statusCells.forEach(cell => {
            // Cambiar estado aleatoriamente (solo para simulación)
            if(Math.random() > 0.7) {
                if(cell.classList.contains('active')) {
                    cell.classList.remove('active');
                    cell.classList.add('inactive');
                    cell.textContent = 'Inactivo';
                } else {
                    cell.classList.remove('inactive');
                    cell.classList.add('active');
                    cell.textContent = 'Activo';
                }
            }
        });
    }, 5000);
}
