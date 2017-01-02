function nextQuestion() {
    console.log("Next");
}

$(".content").click(function() {
    if ($(this).hasClass("reponse")) {
        $(this).css({ "background-color": "#4CAF50" });
    } else {

        $(this).css({ "background-color": "#B71C1C" });
        $(".reponse").css({ "background-color": "#4CAF50" });
    }
    setTimeout(nextQuestion, 3000);
});