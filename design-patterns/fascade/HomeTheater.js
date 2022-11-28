import { HomeTheaterFacade } from "./HomeTheaterFacade";

class HomeTheater {
    homeTheater
    constructor(homeTheaterFacade) {
        this.homeTheater = homeTheaterFacade
    }
}

const homeTheaterFacade = new HomeTheaterFacade(new Amplifier(), new Tuner(), new Dvd(), new Cd(), new Projector(), new Lights(), new Screen(), new Popper())
const homeTheater = new HomeTheater(homeTheaterFacade)
homeTheater.watchMovie('타짜')
homeTheater.endMovie()