Function.prototype.curry = function(numArgs) {
    const donatello = [];
    const leonardo = this;
    return function _curly(davinci){
        donatello.push(davinci)
        console.log(donatello.length)
        console.log(numArgs)
        if (donatello.length === numArgs){
            return leonardo.apply(leonardo, donatello);
        } else {
            return _curly;
        }

    }
}

function regina(num1, num2) {
    console.log(typeof num1 +  " and " + typeof num2)
    barry = num1 + num2;
    return barry;
}

let luis = regina.curry(2)
console.log(luis(420)(69));