// Selección visual de opciones radio/checkbox
document.querySelectorAll('.opcion-label').forEach(label => {
    const input = label.querySelector('input[type="radio"], input[type="checkbox"]');
    if (!input) return;

    input.addEventListener('change', () => {
        if (input.type === 'radio') {
            document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => {
                r.closest('.opcion-label')?.classList.remove('seleccionada');
            });
        }
        if (input.checked) {
            label.classList.add('seleccionada');
        } else {
            label.classList.remove('seleccionada');
        }
        actualizarProgreso();
    });
});

// Barra de progreso
const TOTAL = 20;
function actualizarProgreso() {
    const respondidas = new Set();
    document.querySelectorAll('input[type="radio"]:checked').forEach(r => respondidas.add(r.name));
    document.querySelectorAll('select').forEach(s => { if (s.value) respondidas.add(s.name); });
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        if (cb.name !== 'aceptar_terminos') respondidas.add(cb.name);
    });
    const numInput = document.querySelector('input[type="number"]');
    if (numInput && numInput.value) respondidas.add(numInput.name);

    const n = Math.min(respondidas.size, TOTAL);
    document.getElementById('barra-relleno').style.width = (n / TOTAL * 100) + '%';
    document.getElementById('progreso-texto').textContent = n + ' de ' + TOTAL + ' respondidas';
}

document.querySelectorAll('input[type="number"], select').forEach(el => {
    el.addEventListener('change', actualizarProgreso);
});

// Reset limpia clases seleccionadas
document.querySelector('form').addEventListener('reset', () => {
    setTimeout(() => {
        document.querySelectorAll('.opcion-label').forEach(l => l.classList.remove('seleccionada'));
        actualizarProgreso();
    }, 10);
});
