//Arreglo que contiene las preguntas
const preguntas = [
    {
        id: 1,
        categoria: "Definición y conceptos",
        titulo: "¿Cómo se diferencia del bullying tradicional?",
        opcionA: "Se lleva a cabo a través de la tecnología",
        opcionB: "Se lleva a cabo solo en la escuela",
        opcionC: "Se lleva a cabo solo en línea",
        opcionD: "Se lleva a cabo en persona",
        correcta: "a"
    },
    {
        id: 2,
        categoria: "Definición y conceptos",
        titulo: "¿Qué es exactamente el ciberbullying?",
        opcionA: "Un juego en línea",
        opcionB: "Acoso o intimidación en línea",
        opcionC: "Un tipo de virus informático",
        opcionD: "Acoso o intimidación en persona",
        correcta: "b"
    },
    {
        id: 3,
        categoria: "Definición y conceptos",
        titulo: "¿Qué es la propagación del ciberbullying?",
        opcionA: "La eliminación del acoso en línea",
        opcionB: "La creación de leyes contra el ciberbullying",
        opcionC: "Extensión rápida del acoso en línea",
        opcionD: "La educación sobre el ciberbullying",
        correcta: "c"
    },
    {
        id: 4,
        categoria: "Definición y conceptos",
        titulo: "¿Qué es el ciberacoso?",
        opcionA: "Un tipo de virus informático",
        opcionB: "Un juego en línea",
        opcionC: "Acoso o intimidación en persona",
        opcionD: "Acoso o intimidación a través de la tecnología",
        correcta: "d"
    },
    {
        id: 5,
        categoria: "Definición y conceptos",
        titulo: "¿Qué es la intimidación en línea?",
        opcionA: "Un tipo de educación en línea",
        opcionB: "Un juego en línea",
        opcionC: "Acoso o intimidación a través de la tecnología",
        opcionD: "Un tipo de virus informático,",
        correcta: "c"
    },
    {
        id: 6,
        categoria: "Formas y plataformas",
        titulo: "¿Cuáles son las formas más comunes de ciberbullying?",
        opcionA: "Mensajes de texto amistosos",
        opcionB: "Correos electrónicos de felicitación",
        opcionC: "Publicaciones en redes sociales sobre la naturaleza",
        opcionD: "Mensajes ofensivos, correos amenazantes, publicaciones humillantes",
        correcta: "d"
    },
    {
        id: 7,
        categoria: "Formas y plataformas",
        titulo: "¿Qué plataformas son más propensas al ciberbullying?",
        opcionA: "Sitios web de noticias",
        opcionB: "Redes sociales, foros en línea, juegos en línea",
        opcionC: "Plataformas de comercio electrónico",
        opcionD: "Aplicaciones de productividad",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "Formas y plataformas",
        titulo: "¿Qué tipo de contenido se utiliza comúnmente en el ciberbullying?",
        opcionA: "Imágenes de paisajes",
        opcionB: "Mensajes ofensivos, imágenes humillantes, videos amenazantes",
        opcionC: "Videos de música",
        opcionD: "Mensajes de texto inspiradores",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "Formas y plataformas",
        titulo: "¿Qué plataformas de redes sociales son más propensas al ciberbullying?",
        opcionA: "LinkedIn",
        opcionB: "Pinterest",
        opcionC: "Reddit",
        opcionD: "Instagram, Facebook, Twitter",
        correcta: "d"
    },
    {
        id: 10,
        categoria: "Formas y plataformas",
        titulo: "¿Qué tipo de interacciones en línea pueden considerarse ciberbullying?",
        opcionA: "Comentarios amistosos",
        opcionB: "Mensajes de felicitación",
        opcionC: "Publicaciones sobre la naturaleza",
        opcionD: "Insultos, amenazas, acoso sexual",
        correcta: "d"
    },
    {
        id: 11,
        categoria: "Impacto en la salud mental y el rendimiento académico",
        titulo: "¿Cómo afecta el ciberbullying la salud mental?",
        opcionA: "Ansiedad, depresión, estrés",
        opcionB: "Mejora la posición social",
        opcionC: "Reduce el aislamiento",
        opcionD: "Incrementa la motivación perdedora",
        correcta: "a"
    },
    {
        id: 12,
        categoria: "Impacto en la salud mental y el rendimiento académico",
        titulo: "¿Qué impacto tiene en el rendimiento académico?",
        opcionA: "Mejora la concentración",
        opcionB: "No participar",
        opcionC: "Disminución en la motivación y concentración",
        opcionD: "Aumenta la parte social positivamente",
        correcta: "c"
    },
    {
        id: 13,
        categoria: "Impacto en la salud mental y el rendimiento académico",
        titulo: "¿Cómo puede afectar el ciberbullying la autoestima de una persona?",
        opcionA: "Mejorándola",
        opcionB: "Disminuyéndola",
        opcionC: "Manteniéndola igual",
        opcionD: "Incrementando la confianza",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "Impacto en la salud mental y el rendimiento académico",
        titulo: "¿Qué efectos puede tener el ciberbullying en la vida social de una persona?",
        opcionA: "Incrementar las amistades",
        opcionB: "Mejorar las relaciones familiares",
        opcionC: "Aumentar la participación en actividades sociales",
        opcionD: "Aislamiento social, pérdida de amistades",
        correcta: "d"
    },
    {
        id: 15,
        categoria: "Impacto en la salud mental y el rendimiento académico",
        titulo: "¿Cómo puede afectar el ciberbullying la salud física de una persona?",
        opcionA: "Bajando el rendimiento de la energía",
        opcionB: "Mejorando el sueño",
        opcionC: "Problemas de sueño, dolores de cabeza, problemas de alimentación",
        opcionD: "Mejorando la alimentación",
        correcta: "c"
    },
    {
        id: 16,
        categoria: "Señales y detección",
        titulo: "¿Qué señales indican ciberbullying?",
        opcionA: "Cambios de escuela",
        opcionB: "Cambios en el comportamiento, ansiedad, depresión",
        opcionC: "Cambios en la moda",
        opcionD: "Cambios en la economía, inflación, etc",
        correcta: "b"
    },
    {
        id: 17,
        categoria: "Señales y detección",
        titulo: "¿Cómo detectan los padres el ciberbullying?",
        opcionA: "Adivinando",
        opcionB: "Intuición",
        opcionC: "Observación, revisión de actividad en línea, comunicación abierta",
        opcionD: "Mediante la astrología",
        correcta: "c"
    },
    {
        id: 18,
        categoria: "Señales y detección",
        titulo: "¿Qué cambios en el comportamiento pueden indicar ciberbullying?",
        opcionA: "Aislamiento, irritabilidad, cambios en el apetito",
        opcionB: "Mayor entusiasmo por la tecnología",
        opcionC: "Imaginar ser famoso",
        opcionD: "Querer tener muchos seguidores",
        correcta: "a"
    },
    {
        id: 19,
        categoria: "Señales y detección",
        titulo: "¿Cómo pueden los educadores detectar el ciberbullying en el aula?",
        opcionA: "Mediante la observación de los estudiantes",
        opcionB: "Mediante la revisión de los registros de asistencia",
        opcionC: "Mediante la comunicación abierta con los estudiantes y los padres",
        opcionD: "Mediante la evaluación de los proyectos de los estudiantes",
        correcta: "c"
    },
    {
        id: 20,
        categoria: "Señales y detección",
        titulo: "¿Qué señales pueden indicar que un niño está siendo víctima de ciberbullying?",
        opcionA: "Mayor interés en los programas educativos",
        opcionB: "Mayor entusiasmo por la lectura",
        opcionC: "Cambios en el estado de ánimo, evasión de la tecnología, problemas de sueño",
        opcionD: "Voverese gay",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "Prevención y apoyo",
        titulo: "¿Qué pasos siguen las víctimas de ciberbullying?",
        opcionA: "Ignorar al agresor",
        opcionB: "Bloquear al agresor, para mantenerlo anonimo",
        opcionC: "Bloquear al agresor, guardar evidencia, y hacer comosi nada",
        opcionD: "Bloquear al agresor, guardar evidencia, informar a un adulto",
        correcta: "d"
    },
    {
        id: 22,
        categoria: "Prevención y apoyo",
        titulo: "¿Qué medidas toman las escuelas para prevenir el ciberbullying?",
        opcionA: "Castigar a los agresores",
        opcionB: "Castigar a los agresores",
        opcionC: "Educar a los estudiantes sobre el ciberbullying, pero no establecer políticas claras",
        opcionD: "Educación, políticas claras, apoyo emocional",
        correcta: "d"
    },
    {
        id: 23,
        categoria: "Prevención y apoyo",
        titulo: "¿Qué recursos están disponibles para las víctimas de ciberbullying?",
        opcionA: "Internet",
        opcionB: "Policía, servicios de salud mental, organizaciones de apoyo, líneas de ayuda",
        opcionC: "La escuela",
        opcionD: "Gustambo police",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "Prevención y apoyo",
        titulo: "¿Qué pueden hacer los padres para prevenir el ciberbullying?",
        opcionA: "Prohibir el uso de la tecnología",
        opcionB: "Ignorar el problema",
        opcionC: "Establecer límites, monitorear el uso de la tecnología, educar sobre el ciberbullying",
        opcionD: "Aprender a usar la tecnología",
        correcta: "c"
    },
    {
        id: 25,
        categoria: "Prevención y apoyo",
        titulo: "¿Qué papel juegan los amigos en la prevención del ciberbullying?",
        opcionA: "Pueden apoyar a la víctima, promover un ambiente positivo en línea",
        opcionB: "No juegan ningún papel",
        opcionC: "Solo pueden informar a un adulto",
        opcionD: "Solo pueden apoyar a la víctima",
        correcta: "a"
    },
    {
        id: 26,
        categoria: "Regulación y políticas",
        titulo: "¿Qué papel juegan los gobiernos en la regulación?",
        opcionA: "Creación de leyes que protejan a los becados",
        opcionB: "Creación de leyes y políticas para proteger a las víctimas",
        opcionC: "Creación de leyes que hablen de pou",
        opcionD: "Creación de leyes que solo protejan a los menores de edad",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "Regulación y políticas",
        titulo: "¿Qué tipo de leyes existen para combatir el ciberbullying?",
        opcionA: "Leyes que penalizan a las víctimas",
        opcionB: "Leyes que penalizan a los agresores y protegen a las víctimas",
        opcionC: "Leyes que unicamente de la UAEM sobre asistencias",
        opcionD: "Leyes que solo se aplican a los adultos",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "Regulación y políticas",
        titulo: "¿Qué papel juegan las organizaciones internacionales en la regulación del ciberbullying?",
        opcionA: "No juegan ningún papel",
        opcionB: "Solo proporcionan apoyo financiero",
        opcionC: "Solo proporcionan apoyo técnico y de en línea",
        opcionD: "Desarrollan políticas y directrices para combatir el ciberbullying",
        correcta: "d"
    },
    {
        id: 29,
        categoria: "Regulación y políticas",
        titulo: "¿Qué tipo de políticas deben implementar las escuelas para prevenir el ciberbullying?",
        opcionA: "Políticas que no dejen tareas",
        opcionB: "Políticas que solo se apliquen a los estudiantes",
        opcionC: "Políticas que den mas recreo, becas y respeto unicamente para estudiantes",
        opcionD: "Políticas que promuevan un ambiente seguro y respetuoso para todos",
        correcta: "d"
    },
    {
        id: 30,
        categoria: "Regulación y políticas",
        titulo: "¿Qué papel juegan los padres en la regulación del ciberbullying?",
        opcionA: "No juegan ningún papel, por que no saben de tecnología",
        opcionB: "Solo deben supervisar el uso de la tecnología",
        opcionC: "Deben establecer límites, supervisar el uso de la tecnología",
        opcionD: "Verificar que pasen el semestre:)",
        correcta: "c"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})