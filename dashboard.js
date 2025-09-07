document.addEventListener('DOMContentLoaded', function() {
  // Simulação do gráfico de barras
  const chartContainer = document.querySelector('.chart-container');
  if (chartContainer) {
    // Limpar o conteúdo existente
    chartContainer.innerHTML = '';
    
    // Dados do gráfico (valores aleatórios entre 0.2 e 0.8)
    const data = [
      0.25, 0.4, 0.35, 0.5, 0.3, 0.45, 0.7, 0.6, 0.5, 0.65, 0.4, 0.3, 0.5, 0.35, 0.25
    ];
    
    // Criar o gráfico
    const chartWrapper = document.createElement('div');
    chartWrapper.style.display = 'flex';
    chartWrapper.style.alignItems = 'flex-end';
    chartWrapper.style.justifyContent = 'space-between';
    chartWrapper.style.height = '100%';
    chartWrapper.style.padding = '0 10px';
    
    // Adicionar barras
    data.forEach((value, index) => {
      // Barra principal
      const bar = document.createElement('div');
      bar.style.width = '20px';
      bar.style.height = `${value * 100}%`;
      bar.style.backgroundColor = index % 2 === 0 ? '#3a86ff' : '#8ab4ff';
      bar.style.borderRadius = '4px 4px 0 0';
      bar.style.position = 'relative';
      
      // Valor no topo da barra
      if (index === 3 || index === 4) {
        const tooltip = document.createElement('div');
        tooltip.style.position = 'absolute';
        tooltip.style.top = '-30px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.backgroundColor = '#3a86ff';
        tooltip.style.color = 'white';
        tooltip.style.padding = '4px 8px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '12px';
        tooltip.style.whiteSpace = 'nowrap';
        
        if (index === 3) {
          tooltip.textContent = 'Jun 24: €0.45';
        } else {
          tooltip.textContent = 'Jun 21: €0.58';
        }
        
        bar.appendChild(tooltip);
      }
      
      // Container para cada barra
      const barContainer = document.createElement('div');
      barContainer.style.display = 'flex';
      barContainer.style.flexDirection = 'column';
      barContainer.style.alignItems = 'center';
      barContainer.style.height = '100%';
      barContainer.style.justifyContent = 'flex-end';
      
      barContainer.appendChild(bar);
      chartWrapper.appendChild(barContainer);
    });
    
    chartContainer.appendChild(chartWrapper);
  }
});
