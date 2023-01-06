function sum(){
    let sum = 0;
    Array.from(arguments).forEach(element => {
        sum += element;
    });
    return sum
}

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

function goodSum(...args){
    let sum = 0;
    args.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(goodSum(1, 2, 3, 4) === 10);
console.log(goodSum(1, 2, 3, 4, 5) === 15);

