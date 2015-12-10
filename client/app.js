console.log('Hello Epsilon!');

$(document).ready(function(){

    var jsonArray = [];
    var $insertHere = $('.content-placeholder');
    var $myData = "";
    var colorValue = "";
    var colorName = "";
    var i = 0;

    //Read the getColors file and get array of color names and values
    $.ajax({
        url: "/getColors"
    }).done(function(response){
        jsonArray = response;
        console.log(response);

        // Loop over the array and append to the DOM divs containing the
        // color-named class, using inline style to set background
        // color per file data. Paragraph text displays color name text.
        for (i=0; i<jsonArray.length; i++) {
            colorValue = jsonArray[i].value;
            colorName = jsonArray[i].color;
            $myData = 	"<div class = '" + colorName +"' style='background-color:"  +  colorValue +  "'>" +
                "<p>Color: " + colorName + "</p></div>";

            $insertHere.append($myData);
        }
    });

});