function greet(Observer) {
    return 'Hello, ${Observer}!';
}

console.log(greet("Observer"));


function calculateCircumference(diameter) {
    return diameter
}

console.log('Circumference for diameter 10: ${calculateCircumference(10)}');

function firstFunction() {
    console.log("Entering the first starties function!");

    secondFunction();

    console.log("Leaving the first starties function!");
}

function secondFunction() {
    console.log("Inside the second starties function!");
}

firstFunction();

function stackOverFlow() {
    stackOverFlow();
}