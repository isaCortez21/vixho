function abrirDesafio(){

    document.querySelector(".contenedor").scrollIntoView({
        behavior: "smooth"
    });

}

const botonInicio = document.getElementById("botonInicio");

const reglas = document.querySelector(".reglas");
const juego = document.getElementById("juego");

const imagenAuto = document.getElementById("imagenAuto");
const opciones = document.getElementById("opciones");



let preguntaActual = 0;
let tiempo = 120;
let reloj;
let vidas = 2;

const autos = [

{
imagen:"img/a.png",
nombre:"Toyota Supra MK4",
opciones:[
"Toyota Supra MK4",
"Nissan Skyline GT-R R34",
"Mazda RX-7 FD"
]
},

{
imagen:"img/b.png",
nombre:"Nissan Skyline GT-R R34",
opciones:[
"Nissan Silvia S15",
"Nissan Skyline GT-R R34",
"Toyota AE86 Trueno"
]
},

{
imagen:"img/c.png",
nombre:"Mazda RX-7 FD",
opciones:[
"Honda NSX (NA1)",
"Mazda RX-7 FD",
"Ferrari F40"
]
},

{
imagen:"img/d.png",
nombre:"Honda NSX (NA1)",
opciones:[
"Honda NSX (NA1)",
"Porsche 911 Turbo (930)",
"Toyota Supra MK4"
]
},

{
imagen:"img/e.png",
nombre:"Toyota AE86 Trueno",
opciones:[
"Toyota AE86 Trueno",
"Nissan Skyline GT-R R34",
"Subaru Impreza 22B STI"
]
},

{
imagen:"img/f.png",
nombre:"Nissan Silvia S15",
opciones:[
"Mitsubishi Evo VI",
"Nissan Silvia S15",
"Honda NSX (NA1)"
]
},

{
imagen:"img/g.png",
nombre:"Mitsubishi Lancer Evolution VI",
opciones:[
"Mitsubishi Lancer Evolution VI",
"Toyota AE86 Trueno",
"Ferrari F40"
]
},

{
imagen:"img/h.png",
nombre:"Subaru Impreza 22B STI",
opciones:[
"Subaru Impreza 22B STI",
"Porsche 911 Turbo (930)",
"Nissan Silvia S15"
]
},

{
imagen:"img/i.png",
nombre:"Porsche 911 Turbo (930)",
opciones:[
"Ferrari F40",
"Porsche 911 Turbo (930)",
"Mazda RX-7 FD"
]
},

{
imagen:"img/j.png",
nombre:"Ferrari F40",
opciones:[
"Ferrari F40",
"Honda NSX (NA1)",
"Toyota Supra MK4"
]
}

];



botonInicio.addEventListener("click", function(){

    reglas.style.display = "none";
    botonInicio.style.display = "none";

    juego.style.display = "block";

    mostrarPregunta();

    iniciarTiempo();


});





function mostrarPregunta(){


    let auto = autos[preguntaActual];


    imagenAuto.src = auto.imagen;


    opciones.innerHTML = "";


    auto.opciones.forEach(function(opcion){


        let boton = document.createElement("button");


        boton.textContent = opcion;


        boton.onclick = function(){

            comprobarRespuesta(opcion);

        };


        opciones.appendChild(boton);


    });


}


function comprobarRespuesta(respuesta){


    let correcto = autos[preguntaActual].nombre;


    if(respuesta == correcto){

        document.getElementById("resultado").innerHTML =
        "✅ ¡Correcto!";

    }else{

        tiempo -= 15;

        vidas--;

        document.getElementById("vidas").innerHTML =
        "❤️".repeat(vidas) + " Oportunidades: " + vidas;


        document.getElementById("resultado").innerHTML =
        "❌ Incorrecto -15 segundos";

    }


    if(vidas <= 0){

        clearInterval(reloj);

        document.getElementById("juego").style.display = "none";

        document.getElementById("finJuego").style.display = "block";

        return;

    }


    setTimeout(function(){

        preguntaActual++;

        if(preguntaActual < autos.length){

            mostrarPregunta();

            document.getElementById("resultado").innerHTML = "";

        }else{

        clearInterval(reloj);

        document.getElementById("juego").style.display = "none";

        document.getElementById("premio").style.display = "block";

        }

    },1500);


}




function iniciarTiempo(){

    reloj = setInterval(function(){

        tiempo--;

        document.getElementById("tiempo").innerHTML =
        "⏱️ Tiempo: " + tiempo;


        if(tiempo <= 0){

            clearInterval(reloj);

            alert("⏰ Se acabó el tiempo");

        }


    },1000);

}

function mostrarCupon(){

    document.getElementById("premio").style.display = "none";
    
    document.getElementById("tituloPrincipal").style.display = "none";

    document.getElementById("desbloqueo").style.display = "flex";

    setTimeout(function(){

        document.getElementById("desbloqueo").style.display = "none";

        document.getElementById("cupon").style.display = "block";

        document.getElementById("contenidoCupon").innerHTML = `

        <h2>🏆 ¡MISIÓN COMPLETADA! 🏆</h2>

        <p>
        Lo logró.
        </p>

        <p>
        Ha demostrado conocimiento en los deportivos clásicos.
        </p>

        <hr>

        <h2>🎟️ PREMIO DESBLOQUEADO</h2>

        <h1 style="color:gold;">
        🎬 Vale por una salida al cine 🍿
        </h1>

        <hr>

        <p style="font-size:20px;">
        Con derecho a elegir la película,
        las cabritas y la mejor compañía. ❤️
        </p>

        <p>
        Espero que este pequeño detalle le haya sacado una sonrisa.
        </p>

        <p>
        Con mucho amor para usted.
        </p>

        `;

    },2500);

}