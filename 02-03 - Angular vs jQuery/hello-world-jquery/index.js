
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

           var lessonsDiv = document.getElementById('lessons');

           // delete all child elements
           while (lessonsDiv.firstChild) {
               lessonsDiv.removeChild(lessonsDiv.firstChild);
           }

           // apply the table directly to the DOM
           lessonsDiv.appendChild(generateDomTable(lessons));

        });
    });

}());

function generateDomTable(lessons) {

    var table = document.createElement('table');

    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "Description";

    for (var i = 0; i < lessons.length; i++) {

        var row = table.insertRow(i);
        var col = row.insertCell(0);

        col.innerHTML = lessons[i].description;
    }

    return table;
}


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


