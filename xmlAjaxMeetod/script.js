$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "ex.xml",
        dataType: "xml",
        success: kuvaXML,
        error: vigaXML
    });
});

function vigaXML(){
    $("#vastus").append('<p style="color:red;">Проблемы с XML файлом!</p>');
}
function kuvaXML(xml){
    $(xml).find("inimene").each(function() {
        let name = $(this).find("Nimi").text();
        let sex = $(this).find("sex").text();
        let link = $(this).find("link").text();
        let image = $(this).find("pilt").text();

        // Определяем цвет в зависимости от пола
        let color = (sex === "Mees") ? "blue" : (sex === "Naine") ? "pink" : "black";

        $("#vastus").append(
            '<tr>'+
            '<td><h2 style="color:' + color + ';">' + name + '</h2></td>'+
            '<td><a href="' + link + '" target="_blank">'+
            '<img src="pildid/' + image + '" alt="pilt"></a></td>'+
            '</tr>'
        );
    });
}
