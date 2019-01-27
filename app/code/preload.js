

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
