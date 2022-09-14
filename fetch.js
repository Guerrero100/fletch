/* siempre se ejecuta a traves de  un servidor  */
/* fetch('datos.txt')
.then(function(response){
    return response.text();
})//Que clase de información estoy pidiendo.
.then(function (data){
    console.log(data);
})//extrae los datos de busqueda o consulta.
.catch(function(error){
    console.log(`hemos tenido un error${error}`);
}) */

/* fetch('datos.txt')
.then((response)=>{return response.text()})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(`hemos tenido un error ${error} `)}) */

/* let url = 'datos.txt'
fetch(url)
.then(response=>response.json())
.then(data => {
    let inf = document.getElementById('datos');
    inf.innerHTML = data;
})
.catch(error=>console.log(`hemos tenido un error ${error}`)) */

let url = 'datos.json';

fetch(url)
.then(res=>res.json())
.then(data=>{
    /*     imp.innerHTML= data[0].nombre + " " 
    +"<br>"+ data[0].apellido + " " 
    +"<br>"+ data[0].telefono + " "
    +"<br>"+ data[0].cedula + " ";  */
    let imp = document.getElementById('datos')
    let mensaje = "";
    for (let index = 0; index < data.length; index++) {
        mensaje = mensaje + data[index].nombre + " "  
        +"<br>"+ data[index].apellido + " " 
        +"<br>"+ data[index].telefono + " "
        +"<br>"+ data[index].cedula + " ";
    }
    imp.innerHTML= mensaje
})
.then()
.catch(error=>console.log(`ha habido un error  ${error}`))


