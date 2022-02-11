var numOfDrums = document.querySelectorAll(".drum").length;

makeSoundOnKeyPress();


function makeSoundOnClick() {
    for (var i = 0; i < numOfDrums; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function() {
            var buttonPressed = this.innerHTML;

            switch (buttonPressed) {
                case "w":
                    var tom1 = new Audio("C:/dev/web/drum-kit/sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("C:/dev/web/drum-kit/sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio('C:/dev/web/drum-kit/sounds/tom-3.mp3');
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio('C:/dev/web/drum-kit/sounds/tom-4.mp3');
                    tom4.play();
                    break;

                case "j":
                    var snare = new Audio('C:/dev/web/drum-kit/sounds/snare.mp3');
                    snare.play();
                    break;

                case "k":
                    var crash = new Audio('C:/dev/web/drum-kit/sounds/crash.mp3');
                    crash.play();
                    break;

                case "l":
                    var kick = new Audio('C:/dev/web/drum-kit/sounds/kick-bass.mp3');
                    kick.play();
                    break;


                default:
                    console.log(key);
            }
        });

    }
}

function makeSoundOnKeyPress() {

    addEventListener("keydown", function(event) {

        var keyPressed = event.key;
        switch (keyPressed) {
            case "w":
                var tom1 = new Audio("C:/dev/web/drum-kit/sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("C:/dev/web/drum-kit/sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio('C:/dev/web/drum-kit/sounds/tom-3.mp3');
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio('C:/dev/web/drum-kit/sounds/tom-4.mp3');
                tom4.play();
                break;

            case "j":
                var snare = new Audio('C:/dev/web/drum-kit/sounds/snare.mp3');
                snare.play();
                break;

            case "k":
                var crash = new Audio('C:/dev/web/drum-kit/sounds/crash.mp3');
                crash.play();
                break;

            case "l":
                var kick = new Audio('C:/dev/web/drum-kit/sounds/kick-bass.mp3');
                kick.play();
                break;


            default:
                console.log(key);
        }
    });


}