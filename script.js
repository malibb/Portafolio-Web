var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Malinali Becerril')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .start();