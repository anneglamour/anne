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
//los indices de los elementos array son los calores de getDay() 
// para enviar el documento y trabajar con Git
//primer paso hay que ir a git config user.name ""
// suundo paso config user.email 
// git add .
//git commit - m" inicial comit"
//git remote add github ( cambio)
//git push