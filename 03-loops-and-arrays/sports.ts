let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let sport of sports) {
    console.log(sport);
}

sports.push("Running");
sports.push("Ball");

console.log("---------------");

for (let sport of sports) {
    console.log(sport);
}

console.log("---------------");

for (let sport of sports) {
    if (sport == "Golf") 
        console.log("I love: " + sport);
}

