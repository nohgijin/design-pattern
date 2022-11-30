import { HomeTheaterFacade } from "./HomeTheaterFacade";

class HomeTheater {
    homeTheater
    amp=new Amplifier();
    tuner=new Tuner();
    dvd=new Dvd();
    cd=new Cd();
    projector=new Projector();
    lights=new Lights();
    screen=new Screen();
    popper=new Popper();


    constructor() {
        this.homeTheater = new HomeTheaterFacade(this.amp,this.tuner,this.dvd,this.cd,this.projector,this.lights,this.screen,this.popper);
    }
}

const homeTheater = new HomeTheater()
homeTheater.watchMovie('타짜')
homeTheater.endMovie()