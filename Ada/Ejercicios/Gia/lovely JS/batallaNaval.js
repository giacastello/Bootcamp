var barcos = [
var colA=[0,0,0,0,0,0,0,0,0,0],
var colB=[0,0,0,0,0,0,0,0,0,0],
var colC=[0,0,0,1,0,0,0,2,0,0],
var colD=[0,0,0,0,0,0,0,2,0,0],
var colE=[4,0,0,0,0,0,0,0,0,0],
var colF=[4,0,0,0,0,0,0,0,0,0],
var colG=[4,0,0,0,0,0,0,0,0,0],
var colH=[4,0,0,0,0,0,0,0,0,0],
var colI=[0,0,0,0,0,3,3,3,0,0],
var colJ=[0,0,0,0,0,0,0,0,0,0],
]
/*
- preguntoPosición (x,y)
- busco el vlaor de la posición
- determino el tipo de barco (1,2,3,4)
- contador de hundidos
- contador de tocados
*/
barcos [x] [y]

if (barcos [x][y] == 0 || barcos [x][y] == "x"){

  if(barcos[x][y] == 0){
    barcos[x][y] = "x";
    return "Agua";
  }
  return "Ya me lo dijiste";

} else { //hay un barco
  switch(barcos[x][y]){
    case 1: contHundidos++;
            barcos[x][y] = -1;
    break;

    case 2: contT2++;
          if(contT2 == 2){
          return "hundiste destructor";
          contHundidos++;
          }
          barcos[x][y] = -2;
    break;

    case 3: contT3++;
            if(contT3 == 3){
            return "hundiste crucero";
            }
            contHundidos++;
            barcos[x][y] = -3;
    break;

    case 4: contT4++;

  } break;


}
