
(function(){

    var lessons;

    $(document).ready(function() {

        $.get( "https://final-project-recording.firebaseio.com/lessons.json", function( data ) {

            lessons = Object.values(data);

            $("#lessons").html(generateHtml(lessons));

        });

       $('#btn').on('click',function() {

            lessons.forEach(function(lesson, index) {
                lessons[index].description = index + ' - ' + lessons[index].description
            });

            $("#lessons").html(generateHtml(lessons));

        });
    });

}());

function generateHtml(lessons) {
    var html = "<table class='table lessons-list'>" +
        "<thead>" +
        "<th>Description</th>" +
        "</thead>" +
        "<tbody>";

    lessons.forEach(function(lesson) {
        html += '<tr>' +
                '<td>' + lesson.description + '</td>' +
            '</tr>';
    });

    html += '</tbody></table>';

    return html;
}

