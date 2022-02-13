$(document).ready(main);

pattern = new Array();
round = 0;
currentlyClickedTile = 0;
getKeyPress = true;

function main() {
    $("#green").click(onGreenButtonClick);
    $("#red").click(onRedButtonClick);
    $("#yellow").click(onYellowButtonClick);
    $("#blue").click(onBlueButtonClick);
    $(document).keypress(keyPressEventHandler);

}

function keyPressEventHandler() {
    if (getKeyPress) {
        chooseTile();
    }
}


function chooseTile() {
    nextTile = Math.floor(Math.random() * 4);

    pattern.push(nextTile);

    $("." + nextTile).fadeOut();
    $("." + nextTile).fadeIn();

    $("h1").text("Round " + (round + 1));

    currentlyClickedTile = 0;
}

function onGreenButtonClick() {

    if (pattern[currentlyClickedTile] !== 0) {
        gameOver();
    } else if (pattern[currentlyClickedTile] === 0) {
        if (round === currentlyClickedTile) {
            round++;
            chooseTile();
            return;
        }
        currentlyClickedTile++;
    }
}

function onRedButtonClick() {

    if (pattern[currentlyClickedTile] !== 1) {
        gameOver();
    } else if (pattern[currentlyClickedTile] === 1) {
        if (round === currentlyClickedTile) {
            round++;
            chooseTile();
            return;
        }
        currentlyClickedTile++;
    }

}

function onYellowButtonClick() {

    if (pattern[currentlyClickedTile] !== 2) {
        gameOver();
    } else if (pattern[currentlyClickedTile] === 2) {
        if (round === currentlyClickedTile) {
            round++;
            chooseTile();
            return;
        }
        currentlyClickedTile++;
    }
}

function onBlueButtonClick() {

    if (pattern[currentlyClickedTile] !== 3) {
        gameOver();
    } else if (pattern[currentlyClickedTile] === 3) {
        if (round === currentlyClickedTile) {
            round++;
            chooseTile();
            return;
        }
        currentlyClickedTile++;
    }
}


function gameOver() {
    $("h1").text("Game Over! Press Any Key To Restart The Game!");
    pattern = new Array();
    round = 0;
    getKeyPress = true;
    return;
}