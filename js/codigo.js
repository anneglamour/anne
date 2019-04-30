function copyanio()
    lest anio= new Date(). getFullYear();
    document.getElementById("copyanio").innerHTML = anio;}

    function fechahora() {
       
    var d=new Date();
var dia=new Array(7);
dia[0]="domingo";
dia[1]="lunes";
dia[2]="martes";
dia[3]="miercoles";
dia[4]="jueves";
dia[5]="viernes";
dia[6]="sabado";
document.write(" Hoy es: " + dia[d.getDay()]);
document.write(" La hora actual es:" + d.getHours(),':', d.getMinutes()) ;
    } 

  
// vamos a realizar el ejercicio juntos, 