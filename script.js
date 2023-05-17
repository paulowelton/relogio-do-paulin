const horas = document.getElementById("horas"); 
const minutos = document.getElementById("minutos"); 
const segundos = document.getElementById("segundos");

const relogio = setInterval(function tempo() {
  const datatual = new Date();
  let hora = datatual.getHours();
  let minuto = datatual.getMinutes();
  let segundo = datatual.getSeconds();
   
    if(hora<10){
        hora = "0" + hora
    }
  if (segundo < 10) {
    segundo = "0" + segundo;
  }
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
   
  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
}, 1000);
