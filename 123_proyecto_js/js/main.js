$(document).ready(function () {

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

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

});