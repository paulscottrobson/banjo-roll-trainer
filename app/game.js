var game;

var gameOptions = {
    screenWidth:640,
    screenHeight:480,
};

window.onload = function() {
    var gameConfig = {
        width:gameOptions.screenWidth,
        height:gameOptions.screenHeight,
        backgroundColor: 0x000000,
        scene:[PreloaderScene,MainScene]
    };
    game = new Phaser.Game(gameConfig);
    window.focus();
    resizeGame();
    window.addEventListener("resize",resizeGame);
    }


class PreloaderScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }
    preload() {
        this.load.atlas("sprites","assets/sprites/sprites.png","assets/sprites/sprites.json");
        for (var sound of ["1","2","3","4","5","metronome"]) {
            this.load.audio(sound,["assets/sounds/"+sound+".ogg",
                                   "assets/sounds/"+sound+".mp3"]);
        }
        for (var font of ["dfont","font"]) {
            this.load.bitmapFont(font,"assets/fonts/"+font+".png",
                                            "assets/fonts/"+font+".fnt");
        }
    }
    create() {
        this.scene.start("MainScene");
    }
}

class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }
    create() {
        this.add.image(110,110,"sprites","row1");
        this.add.bitmapText(110,110,"dfont","hello",32,0);
        var ts = this.sound.add("1");
        ts.play();
    }
}



function resizeGame() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
};