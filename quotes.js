/**
 * Created by Krzysiek on 19.07.2017.
 */


var colors = ['#16a085', '#bebebe', '#2c3e50', '#8af322', '#e74c3c', '#99b681', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

function change_color() {
    var color = Math.floor(Math.random() * colors.length);
    $("html body").animate({
        backgroundColor: colors[color]
    }, 100);
}

$(document).ready(function () {

    $("#change").on("click", function () {

        $.getJSON("http://new.spedia.tk/quote/quotes.json", function (json) {
            var selectline = Math.floor(Math.random() * 75);
            var html1 = "";
            var html2 = "";
            json = json.filter(function (val) {
                return (val.id === selectline);
            });
            json.forEach(function (val) {
                html1 = val.quote;
                html2 = "~" + val.author;
            });
            $("#quote").html(html1); //pobiera cytat
            $(".author").html(html2); //pobiera autora

        });
        $(".quote").html(change_color()); //losuje kolor
    });
});
