// 1.HelloWorld - program

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);
    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}

// 2.Datatypes

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    const sumIntegers = firstInteger + Number(secondInteger);
console.log(sumIntegers);

const sumDecimals = firstDecimal + Number(secondDecimal);
console.log(sumDecimals);

const concatenatedString = firstString + secondString;
console.log(concatenatedString);
    
}

//3. Arithmetic Operators

function getPerimeter(length, width) {
    let perimeter;
    perimeter=2*(length+width);
    return perimeter;
}
function getArea(length, width) {
    let area;
    area=length*width;
    return area;
}