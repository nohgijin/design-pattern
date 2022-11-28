export class HomeTheaterFacade {

    constructor(amp) {
        this.amp=amp;
        this.tuner=tuner;
        this.dvd=dvd;
        this.cd=cd;
        this.projector=projector;
        this.lights=lights;
        this.screen=screen;
        this.popper=popper;
    }

    watchMovie(movie){
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(dvd);
        this.amp.setsurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie() {
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }
}