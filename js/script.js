window.addEventListener('load', start);

function start() {
  var input = document.querySelector('#nameinput');
  input.addEventListener('keyup', contar);
}

function contar(event) {
  var count = event.target.value;
  var span = document.querySelector('#tamanho');
  span.textContent = count.length;
  console.log(count);
}
