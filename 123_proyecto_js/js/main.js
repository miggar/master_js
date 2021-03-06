$(document).ready(function () {

    // Slider
    if(location.href.indexOf('index.html') !== -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    // Posts
    var posts = [
        {
            title: "Título 1",
            date: "13 de abril del 2020",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi architecto suscipit vitae\
            dolorem qui deserunt maiores, eligendi illo doloremque vero alias rerum maxime sapiente.\
            Inventore et nostrum eaque voluptate ipsam!"
        },
        {
            title: "Título 2",
            date: "14 de abril del 2020",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi architecto suscipit vitae\
            dolorem qui deserunt maiores, eligendi illo doloremque vero alias rerum maxime sapiente.\
            Inventore et nostrum eaque voluptate ipsam!"
        },
        {
            title: "Título 3",
            date: "15 de abril del 2020",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi architecto suscipit vitae\
            dolorem qui deserunt maiores, eligendi illo doloremque vero alias rerum maxime sapiente.\
            Inventore et nostrum eaque voluptate ipsam!"
        },
        {
            title: "Título 4",
            date: "16 de abril del 2020",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi architecto suscipit vitae\
            dolorem qui deserunt maiores, eligendi illo doloremque vero alias rerum maxime sapiente.\
            Inventore et nostrum eaque voluptate ipsam!"
        },
        {
            title: "Título 5",
            date: "17 de abril del 2020",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi architecto suscipit vitae\
            dolorem qui deserunt maiores, eligendi illo doloremque vero alias rerum maxime sapiente.\
            Inventore et nostrum eaque voluptate ipsam!"
        }
    ];

    posts.forEach( (item, index) => {
        var post = `<article class="post">
            <h2>${item.title}</h2>
            <span class="date">Fecha de publicación: ${item.date}</span>
            <p>${item.content}</p>
            <a href="" class="button-more">Leer más</a>
            </article>`;
        $("#post").append(post);
    });

    // Selector de tema
    var theme = $("#theme");
    
    $("#to-green").click(function(){
        theme.attr("href","css/green.css")
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css")
    });

    // Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault(); // el link no redirige
        $("html, body").animate({
            scrollTop: 0 
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br />Bienvenido, <strong>" + form_name + "</strong>");
        about_parrafo.append('<br /><a href="#" id="logout">Cerrar sesión</a>');
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
    }

    // Acordeon
    if(location.href.indexOf('about.html') !== -1) {
        $('#acordeon').accordion();
    }

    // Reloj
    if(location.href.indexOf('reloj.html') !== -1) {
        var reloj = $('#reloj');
        reloj.html( moment().format("hh:mm:ss") );

        setInterval(function(){
            reloj.html( moment().format("hh:mm:ss") );
        }, 1000);
    }

    // Reloj
    if(location.href.indexOf('contacto.html') !== -1) {
        $("#form_contact input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy',
            showAnim: "fadeIn",
            closeText: 'Cerrar',
            prevText: '<Ant',
            nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            firstDay: 1,
        });

        $("#form_contact").validate({
            rules: {
                name: "required",
                surname: "required",
                email: {
                    required: true,
                    email: true
                },
                date: {
                    required: true,
                    regex: /^((0?[1-9])|([12][0-9])|(3[01]))[\-\/]((0?[1-9])|1[012])[\-\/]((19\d{2})|(20[0-5]\d))$/
                },
                years: {
                    required: true,
                    min: 0,
                    max: 150
                }
            },
            messages: {
                name: "• Por favor agregue su nombre",
                surname: "• Por favor agregue sus apellidos",
                email: "• Por favor agregue su correo",
                date: "• Por favor agregue una fecha válida (dd/mm/aaaa)",
                years: {
                    required: "Por favor agregue su edad",
                    min: "Debe tener una edad positiva",
                    max: "No me creo que exceda de 150 años"
                }
            },
            submitHandler: function(form) {
                form.submit();
            }
        });

        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
        );
    }

});