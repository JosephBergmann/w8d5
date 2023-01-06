Function.prototype.curry = function (numArgs) {
    const donatello = [];
    // const leonardo = this;
    // return function _curly(davinci) {
    //     donatello.push(davinci);
    //     // console.log(donatello.length);
    //     // console.log(numArgs);
    //     if (donatello.length >= numArgs) {
    //         // return leonardo.apply(leonardo, donatello);
    //         return leonardo.call(leonardo, ...donatello)
    //     } else {
    //         return _curly;
    //     }

    // };
    const _culry = (davinci) => {
            donatello.push(davinci);
            // console.log(donatello.length);
            // console.log(numArgs);
            if (donatello.length === numArgs) {
                // return leonardo.apply(leonardo, donatello);
                return this(...donatello)
            } else {
                return _culry;
            }
    
        };
    return _culry;
};
function regina(num1, num2) {
    // console.log(typeof num1 + " and " + typeof num2);
    barry = num1 + num2;
    return barry;
}
let luis = regina.curry(2);
console.log(luis(420));
console.log(luis(54));