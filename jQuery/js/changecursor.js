$(document).ready(function() {
    console.log('jQuery loader');

    var newCursor = $('#new-cursor');
    $(document).mousemove(function() {
       newCursor.css("left", event.clientX - 12)
                .css("top", event.clientY - 12);
    });
});