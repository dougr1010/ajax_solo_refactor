console.log('Hello Epsilon!');

$(document).ready(function(){

    var jsonArray = [];
    $.ajax({
        url: "/getColors"
    }).done(function(response){
        jsonArray = response;
        console.log(response);

        var $insertHere = $('.content-placeholder');
        var $myData = "";
        var colorValue = "";
        var colorName = "";

        for (i=0;i<jsonArray.length;i++) {
            console.log("loop it out")
            console.log(jsonArray[i]);

            colorValue = jsonArray[i].value;
            colorName = jsonArray[i].color;

            $myData = 	"<div class = '" + colorName +"' style='background-color:"  +  colorValue +  "'>" +
                "<p>Color: " + colorName + "</p></div>";

            $insertHere.append($myData);
        };

    });

});