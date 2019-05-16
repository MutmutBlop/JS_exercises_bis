number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(number));
