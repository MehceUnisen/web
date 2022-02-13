$("document").ready(main);

function main() {

    $(".bigboi").css("color", "red");

    $(".bigboi").click(h1OnClick);

    $("button").click(buttonOnClick)

    $(document).keypress(onKeyPress);
}

function h1OnClick() {
    $(".bigboi").css("color", "purple");
}

function buttonOnClick() {
    $(".bigboi").css("color", "yellow");
}

function onKeyPress(event) {
    $(".bigboi").text(event.key)
}