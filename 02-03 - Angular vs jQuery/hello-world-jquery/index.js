


$.get( "https://final-project-recording.firebaseio.com/lessons.json", function( data ) {

    var lessons = Object.values(data);

    var html = "<table class='table lessons-list'>' + " +
                   "'<thead>" +
                        "<th>Description</th>" +
                    "</thead>" +
                    "<tbody>";

    lessons.forEach(function(lesson) {
        html += '<tr>' +  +
                    '<td>' + lesson.description + '</td>' +
                '</tr>';
    });

    html += '</tbody></table>';

    $("#lessons").html(html);


});
