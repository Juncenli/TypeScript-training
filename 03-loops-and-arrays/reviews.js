var reviews = [5, 5, 4.5, 1, 3];
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    sum += reviews[i];
    console.log(reviews[i]);
}
console.log("The average is: " + (sum / reviews.length));
console.log("The average is: ".concat((sum / reviews.length)));
