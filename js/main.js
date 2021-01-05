//Menu open
$(function () {

    $("#bar").click(function () {

        $("#menu").toggle("display", "block");
    });

});

//Cart card remove
$(function (e) {

    $(".fa-times").click(function () {

        $(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).css("display", "none");
    });
});

