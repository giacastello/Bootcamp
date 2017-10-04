var vueloLargo = 1000;
var hostel = 50;
var vueloCorto = 1500;
/*Prompt: toma strings*/
var dias = prompt("¿Cuántos días quieres quedarte en el hostel?");
/* En este caso no me conviene tomarlo, porque el valor numérico lo va a tomar como string*/

if (vueloLargo + (hostel*7) < vueloCorto) {
  //alert: muestra un mensaje en ventana pequeña con Z:1
  alert("Toma el vuelo largo");
}

else {
  alert("Tomar el vuelo corto");
}
