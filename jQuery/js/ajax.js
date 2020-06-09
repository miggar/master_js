$(document).ready(function() {
    console.info('ready');

    // Load
    $('#load_datos').load('https://raw.githubusercontent.com/WebAssembly/website/master/LICENSE');
  
    // Get
    $.get("https://reqres.in/api/users", {page: 2}, function(response) {
        response.data.forEach( (element, index) => {
            $('#get_datos').append('<p> • ' + element.first_name + ' ' + element.last_name +'</p>')
        });
    });

    // Post
    $('#form_post').submit(function(e) {
        e.preventDefault();

        var user = {
            "name": $('input[name=name]').val(),
            "web": $('input[name=web]').val()
        };

        $.post($(this).attr("action"), user, function(response) {
            //console.log(response);
            $('#post_datos').append("<pre>" + JSON.stringify(response, null, 2) + "<pre>");
        }).done(function() {
            $('input[name=name]').val('');
            $('input[name=web]').val('');
            alert('Usuario añadido correctamente');
        });

        return false;
    });

    // Ajax
    $.ajax({
        type: 'GET',
        url: 'https://reqres.in/api/users?delay=3',
        // data: lo que envío,
        beforeSend: function() {
            console.log('Enviando la petición AJAX...');
        },
        success: function(response) {
            console.log('Petición AJAX aceptada...');
            $('#ajax_datos').append("<pre>" + JSON.stringify(response, null, 2) + "<pre>");
        },
        error: function(e) {
            console.error('Ha ocurrido un error con AJAX:', e.statusText);
        },
        timeout: 10000
    });
});