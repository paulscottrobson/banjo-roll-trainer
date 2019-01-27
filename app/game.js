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

class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }
    create() {
        this.add.image(110,110,"sprites","row1");
        this.add.bitmapText(110,110,"dfont","hello",32,0);
        this.add.existing(new Button(this,64,64));
        var ts = this.sound.add("1");
        ts.play();
    }
}

class Button extends Phaser.GameObjects.Container {
    constructor(scene,x,y,width=gameOptions.screenWidth/10,height=gameOptions.screenHeight/10) {
        super(scene,x,y);
        var bgr = scene.add.image(0,0,"sprites","button");
        bgr.displayWidth = width;bgr.displayHeight = height;
        bgr.tint = 0xC0C0C0;
        var btn = scene.add.image(0,0,"sprites","i_increase");
        btn.displayWidth = width*0.8;btn.displayHeight = height*0.8;
        btn.tint = 0x404040;
        this.add(bgr);this.add(btn);
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