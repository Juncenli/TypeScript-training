let reviews: number[] = [5, 5, 4.5, 1, 3];

let sum: number = 0;
for (let i = 0; i <reviews.length; i++) {
    sum += reviews[i];
    console.log(reviews[i]);
}

console.log("The average is: " + (sum / reviews.length));
console.log(`The average is: ${(sum / reviews.length)}`);