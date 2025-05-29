const input = document.getElementById('notaInput');
const lista = document.getElementById('listaNotas');

function agregarNota() {
  const texto = input.value.trim();
  if (texto !== '') {
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
    input.value = '';
  }
}
