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
        /*
        $("#form_contact").validate({
            rules: {
                name: "required",
                surname: "required",
                email: {
                    required: true,
                    email: true
                },
                date: {

                }
            },
            messages: {
                name: "• Por favor introduzca su nombre",
                surname: "• Por favor introduzca sus apellidos"
            },
            submitHandler: function(form) {
                form.submit();
            }
        });*/
    }

});