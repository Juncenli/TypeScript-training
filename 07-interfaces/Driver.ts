import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCriketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();


let theCoaches: Coach[] = [];

theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoach);

for (let coach of theCoaches) {
    console.log(coach.getDailyWorkout());
}