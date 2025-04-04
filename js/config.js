// config.js
// Funciones específicas para la configuración del router

class RouterConfig {
    constructor() {
        this.settings = {
            wifi: {
                ssid: 'Ruijie-Reyee',
                password: 'admin123',
                band: '2.4GHz + 5GHz',
                enabled: true
            },
            network: {
                ip: '192.168.1.1',
                subnet: '255.255.255.0',
                dhcp: true
            },
            security: {
                firewall: true,
                encryption: 'WPA2-PSK',
                macFiltering: false
            }
        };
    }
    
    getSetting(section, key) {
        return this.settings[section]?.[key];
    }
    
    updateSetting(section, key, value) {
        if(this.settings[section] && key in this.settings[section]) {
            this.settings[section][key] = value;
            return true;
        }
        return false;
    }
    
    applyChanges() {
        // Simular aplicación de cambios
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 1500);
        });
    }
    
    resetToDefaults() {
        // Simular restablecimiento de valores por defecto
        return new Promise((resolve) => {
            setTimeout(() => {
                this.settings = {
                    wifi: {
                        ssid: 'Ruijie-Reyee',
                        password: 'admin123',
                        band: '2.4GHz + 5GHz',
                        enabled: true
                    },
                    network: {
                        ip: '192.168.1.1',
                        subnet: '255.255.255.0',
                        dhcp: true
                    },
                    security: {
                        firewall: true,
                        encryption: 'WPA2-PSK',
                        macFiltering: false
                    }
                };
                resolve(true);
            }, 2000);
        });
    }
}

// Exportar para uso en otras páginas
const routerConfig = new RouterConfig();
