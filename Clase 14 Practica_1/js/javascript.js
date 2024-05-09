function arrobj() {

    let alimentos = ["bread", "milk", "cheese", "hummus", "noodles"]

       

let diasSemana = ["lunes", "martes", "miercoles","jueves", "viernes", "sabado", "domingo"]
        

let usuarios = [
                                                          
                    {"nombre": "Pablo","apellido": "Rodriguez", "telefono": "2345167", "edad": "20"},          
                    {"nombre": "Rodrigo", "apellido": "Jimenez", "telefono": "9898765","edad": "35"},
                    {"nombre": "Milton", "apellido": "Ibañez", "telefono":"7654321", "edad":"18"},
                    {"nombre": "Angelica", "apellido": "Zapata", "telefono":"7659876", "edad": "39"},
                    {"nombre": "Camila","apellido": "Velez", "telefono": "5643298", "edad": "25"}
                ]


let estudiantes = [
                    {"nombre": "Pablo","apellido": "Rodriguez", "telefono": "2345167", "edad": "20", "mat_matriculadas": "ingles","hobby": "natacion"} ,          
                    {"nombre": "Rodrigo", "apellido": "Jimenez", "telefono": "9898765","edad": "35", "mat_matriculadas": "base de datos", "hobby": "equitacion"}, 
                    {"nombre": "Milton", "apellido": "Ibañez", "telefono":"7654321", "edad": "18", "mat_matriculadas": "frances", "hobby": "danza"},
                    {"nombre": "Angelica", "apellido": "Zapata", "telefono":"7659876", "edad": "39", "mat_matriculadas": "programacion",  "hobby": "ceramica"},
                    {"nombre": "Camila","apellido": "Velez", "telefono": "5643298", "edad": "25", "mat_matriculadas": "Javascript", "hobby": "senderismo"}
                
                ]


let mat_matriculadas = [
                    {"cod_materia": "A211", "mat_matriculadas": "ingles"},
                    {"cod_materia": "B411", "mat_matriculadas": "base de datos"},
                    {"cod_materia": "A212", "mat_matriculadas": "frances"},
                    {"cod_materia": "B412", "mat_matriculadas": "programacion"},
                    {"cod_materia": "B413", "mat_matriculadas": "Javascript"}
                ]

let hobby_estudiantes = [
                {"nombre": "Pablo","apellido": "Rodriguez","hobby": "natacion"},
                {"nombre":"Rodrigo","apellido":"Jimenez","hobby":"equitacion"},
                {"nombre": "Milton", "apellido": "Ibañez", "hobby": "danza"},
                {"nombre": "Angelica", "apellido": "Zapata", "hobby": "ceramica"},
                {"nombre": "Camila","apellido": "Velez", "hobby": "senderismo"}]


                
console.log(estudiantes)



//Arreglo con 4 posiciones y que la posicon 4 sea otro <arreglo

let lenguasChibchas =  ["Costa Rica", "Panama", "Nicaragua", "Honduras", ["Sierra Nevada Santa Marta", "Sierra Nevada Cocuy", "Serrania Perija"]]
    
  //recorrer los objetos y arreglos realizados


    console.log(alimentos)   
    console.log(alimentos[0]) 
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(usuarios)
    console.log(usuarios[0])
    console.log(estudiantes)
    console.log(mat_matriculadas)
    console.log(hobby_estudiantes)
    console.log(lenguasChibchas)

    for (let i= 0; i < lenguasChibchas.length ; i++) {
        
        if (i == 4) {
            for (let j = 0; j < lenguasChibchas[4].length; j++){
                console.log(lenguasChibchas[4][j])
            }
                    
        }
        else{
            console.log(lenguasChibchas[i])
        }

    }

    for(let i =  0; i < lenguasChibchas[4].length;i++){
        console.log(lenguasChibchas[4][i])
    }
        
 }

 