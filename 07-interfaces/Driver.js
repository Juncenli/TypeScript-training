"use strict";
exports.__esModule = true;
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCriketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
var theCoaches = [];
theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkout());
}
