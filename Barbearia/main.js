const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', ()=>{
    if(menu.classList.contains('menu-open')){
        menu.classList.remove('menu-open');
    }
    else{
        menu.classList.add('menu-open');
    }
})

// Obtém a referência do formulário
const form = document.getElementById('agendamento-form');

// Obtém a referência do campo de horário
const horarioSelect = document.getElementById('horario');

// Função para preencher o campo de horário com opções disponíveis
function preencherHorariosDisponiveis() {
    // Define os horários de trabalho (9h às 19h de segunda a sábado)
    const horarios = [];
    for (let hora = 9; hora <= 19; hora++) {
        for (let minuto = 0; minuto < 60; minuto += 15) {
            const horario = `${hora}:${minuto < 10 ? '0' : ''}${minuto}`;
            horarios.push(horario);
        }
    }

    // Preenche o campo de horário com as opções
    horarioSelect.innerHTML = '';
    horarios.forEach((horario) => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
    });
}

// Chama a função para preencher os horários disponíveis
preencherHorariosDisponiveis();
