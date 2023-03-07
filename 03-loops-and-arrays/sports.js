var sports = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
sports.push("Running");
sports.push("Ball");
console.log("---------------");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    console.log(sport);
}
console.log("---------------");
for (var _b = 0, sports_3 = sports; _b < sports_3.length; _b++) {
    var sport = sports_3[_b];
    if (sport == "Golf")
        console.log("I love: " + sport);
}
