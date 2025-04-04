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

// Función para simular el guardado de configuración
function saveConfiguration(section, data) {
    return new Promise((resolve) => {
        console.log(`Guardando configuración para ${section}:`, data);
        
        // Simular retardo de red
        setTimeout(() => {
            resolve({ success: true, message: 'Configuración guardada correctamente' });
        }, 1000);
    });
}

// Función para simular reinicio del router
function restartRouter() {
    return new Promise((resolve) => {
        console.log('Reiniciando router...');
        
        setTimeout(() => {
            resolve({ success: true, message: 'Router reiniciado correctamente' });
        }, 3000);
    });
}

// Función para cargar configuración actual
function loadCurrentConfig() {
    return {
        wifi: {
            ssid24: 'Ruijie-Reyee-2.4G',
            ssid5: 'Ruijie-Reyee-5G',
            password24: 'admin123',
            password5: 'admin123',
            enabled24: true,
            enabled5: true
        },
        network: {
            lanIp: '192.168.1.1',
            subnet: '255.255.255.0',
            dhcp: true,
            dhcpStart: '192.168.1.100',
            dhcpEnd: '192.168.1.200',
            wanType: 'dhcp'
        },
        security: {
            firewall: true,
            macFilter: false,
            macFilterMode: 'whitelist'
        }
    };
}

// Exportar para uso en otras páginas
export { saveConfiguration, restartRouter, loadCurrentConfig };
