const paginasProhibidas = ["ebay.com","amazon.com", "aliexpress.com"];
const horaInicioBloqueo = 21;
const horaTerminoBloqueo = 8;


const esHoraValida = ()=>{
    const horaActual = new Date().getHours();
    return horaActual > horaTerminoBloqueo && horaActual < horaInicioBloqueo;
}

const verificarPagina = function(){
    const ubicacion = window.location.hostname;
    let busqueda = paginasProhibidas.filter(p=>ubicacion.includes(p));
    return busqueda.length>0;
};

const prohibirDOM = ()=>{
    const body = document.querySelector('body');
    body.innerHTML = "";
    let colorFondo = "#3c9ddb";
    let colorLetra = "#1e1e1e";
    let h1Error = document.createElement("h1");
    h1Error.style=`background:${colorFondo};color:${colorLetra};margin:0px;text-align:center;`;
    h1Error.innerText = "El acceso a esta página está prohibido";
    let segundoMensaje = h1Error.cloneNode(true);
    body.appendChild(h1Error);
    segundoMensaje.innerText = "Debe acceder en un horario permitido";
    segundoMensaje.style.marginTop = "50px";
    body.appendChild(segundoMensaje);

};

if(verificarPagina() && ! esHoraValida()){
    prohibirDOM();
}
